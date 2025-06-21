import { Game, Tag } from "@/interfaces/Content/interface";
import GameCard from "./GameCard";
import { useNewThisMonth } from "@/hooks/NewThisMonthProvider";
import { useFilter } from "@/hooks/FilterProvider";
import ContentSkeleton from "./ContentSkeleton";

const hasBannedTag = (game: Game) => {
  return game.tags.some((tag: Tag) =>
    ["hentai", "nudity", "code"].includes(tag.name.toLowerCase())
  );
};

const matchesSearch = (game: Game, searchValue: string) => {
  return game.name.toLowerCase().includes(searchValue.toLowerCase());
};

const matchesPlatform = (game: Game, platformFilter: string | null) => {
  if (!platformFilter) return true;
  return (
    game.platforms?.some((p) =>
      p.platform.name.toLowerCase().includes(platformFilter.toLowerCase())
    ) ?? false
  );
};

const matchesGenre = (game: Game, genreFilter: string | null) => {
  if (!genreFilter) return true;
  return (
    game.genres?.some((g) =>
      g.name.toLowerCase().includes(genreFilter.toLowerCase())
    ) ?? false
  );
};

const Content = () => {
  const { newGames, isLoading, isError, error } = useNewThisMonth();
  const { searchValue, platformFilter, genreFilter } = useFilter();

  if (isLoading) return <ContentSkeleton />;

  if (isError) return <div>Error: {(error as Error).message}</div>;
  if (!newGames) return <div>No new games found.</div>;

  const filteredGames = newGames.filter((game) => {
    if (Array.isArray(game.tags) && hasBannedTag(game)) return false;
    if (!matchesSearch(game, searchValue)) return false;
    if (!matchesPlatform(game, platformFilter)) return false;
    if (!matchesGenre(game, genreFilter)) return false;
    return true;
  });

  if (filteredGames.length === 0) {
    return (
      <div className="text-gray-500 font-medium text-xl w-full flex justify-center">
        No games matched your filters.
      </div>
    );
  }

  return (
    <div className="flex-grow w-full px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pb-8 gap-6">
      {filteredGames.map((game, index) => (
        <GameCard game={game} key={index} />
      ))}
    </div>
  );
};

export default Content;
