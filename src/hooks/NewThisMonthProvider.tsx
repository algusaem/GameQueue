import { createContext, useContext, useMemo } from "react";
import useFetchNewThisMonth from "./useFetchNewThisMonth";
import { Game, Genre, Platform } from "@/interfaces/Content/interface";

interface ExtendedGame extends Game {
  genres: Genre[];
  platforms: {
    platform: Platform;
  }[];
}

interface NewThisMonthContextType {
  newGames: ExtendedGame[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
  genres: string[];
  platforms: string[];
}

const NewThisMonthContext = createContext<NewThisMonthContextType | undefined>(
  undefined
);

export const NewThisMonthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    data: newGames,
    isLoading,
    isError,
    error,
  } = useFetchNewThisMonth() as {
    data: ExtendedGame[] | undefined;
    isLoading: boolean;
    isError: boolean;
    error: unknown;
  };

  const genres = useMemo(() => {
    return [
      ...new Set(
        newGames?.flatMap((r) => r.genres.map((genre: Genre) => genre.name)) ??
          []
      ),
    ];
  }, [newGames]);

  const platforms = useMemo(() => {
    return [
      ...new Set(
        newGames?.flatMap((r) => r.platforms.map((p) => p.platform.name)) ?? []
      ),
    ];
  }, [newGames]);

  const value: NewThisMonthContextType = {
    newGames,
    isLoading,
    isError,
    error,
    genres,
    platforms,
  };

  return (
    <NewThisMonthContext.Provider value={value}>
      {children}
    </NewThisMonthContext.Provider>
  );
};

export const useNewThisMonth = () => {
  const context = useContext(NewThisMonthContext);
  if (!context) {
    throw new Error("useNewThisMonth must be used within NewThisMonthProvider");
  }
  return context;
};
