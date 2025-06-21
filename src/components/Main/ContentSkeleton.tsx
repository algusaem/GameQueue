import GameCardSkeleton from "./GameCardSkeleton";

const ContentSkeleton = () => {
  return (
    <div className="flex-grow w-full px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pb-8 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <GameCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default ContentSkeleton;
