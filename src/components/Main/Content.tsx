import useFetchNewThisMonth from "@/hooks/useFetchNewThisMonth";
import { Game, Tag } from "@/interfaces/Content/interface";
import GameCard from "./GameCard";

const hasBannedTag = (game: Game) => {
  return game.tags.some((tag: Tag) =>
    ["hentai", "nudity", "code"].includes(tag.name.toLowerCase())
  );
};

const Content = () => {
  const {
    data: newGames,
    isLoading,
    isError,
    error,
  } = useFetchNewThisMonth() as {
    data: Game[] | undefined;
    isLoading: boolean;
    isError: boolean;
    error: unknown;
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;
  if (!newGames) return <div>No new games found.</div>;
  // console.log(newGames);

  return (
    <div className="flex-grow w-full px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pb-8 gap-6">
      {newGames.map((game, index) => {
        if (Array.isArray(game.tags) && hasBannedTag(game)) return null; // Skip games with banned tags
        return <GameCard game={game} key={index} />;
      })}
    </div>
  );
};
export default Content;
