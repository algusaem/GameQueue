import { createContext, useContext, useState, ReactNode } from "react";

type FilterContextType = {
  searchValue: string;
  setSearchValue: (value: string) => void;
  platformFilter: string;
  setPlatformFilter: (value: string) => void;
  genreFilter: string;
  setGenreFilter: (value: string) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

type FilterProviderProps = {
  children: ReactNode;
};

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [platformFilter, setPlatformFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("");

  const value: FilterContextType = {
    searchValue,
    setSearchValue,
    platformFilter,
    setPlatformFilter,
    genreFilter,
    setGenreFilter,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
