import { Card } from "../ui/card";

const GameCardSkeleton = () => (
  <Card className="bg-transparent text-white min-h-120 max-h-full overflow-hidden animate-pulse">
    {/* Skeleton Header */}
    <div className="w-full h-48 bg-gray-800" />

    {/* Skeleton Body */}
    <div className="w-full mb-auto p-4 flex-1 flex flex-col gap-2">
      <div className="w-3/4 h-6 bg-gray-700 rounded" />
      <div className="w-1/2 h-5 bg-gray-600 rounded" />
      <div className="w-full h-20 bg-gray-800 rounded" />
    </div>

    {/* Skeleton Footer */}
    <div className="w-full p-4 flex flex-col justify-center gap-4">
      <div className="flex flex-wrap gap-2">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-5 w-16 bg-gray-700 rounded" />
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="h-5 w-20 bg-gray-600 rounded" />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 bg-gray-500 rounded-full" />
        <div className="w-32 h-4 bg-gray-600 rounded" />
      </div>
    </div>
  </Card>
);

export default GameCardSkeleton;
