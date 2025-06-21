import Image from "next/image";
import { Card } from "../ui/card";
import { GameCardProps, Genre, Platform } from "@/interfaces/Content/interface";
import { Calendar } from "lucide-react";
import useFetchDetails from "@/hooks/useFetchDetails";
import Tag from "../ui/tag";
import { useRouter } from "next/navigation";
import GameCardSkeleton from "./GameCardSkeleton";

const GameCard = ({ game }: GameCardProps) => {
  const { data, isLoading } = useFetchDetails(game.slug);
  const navigate = useRouter();

  if (isLoading) return <GameCardSkeleton />;

  return (
    <Card
      className="bg-transparent text-white min-h-120 max-h-full gap-0 overflow-hidden"
      onClick={() => {
        navigate.push(`/details/${game.slug}`);
      }}
    >
      {/* Header */}
      <div className="relative w-full h-48">
        <Image
          src={game.background_image ?? "/assets/game_fallback.png"}
          alt={`${game.name}'s background image`}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      {/* Body */}
      <div className="w-full mb-auto p-4 flex-1 flex flex-col gap-2">
        {/* Title */}
        <div className="w-full flex justify-center text-xl font-bold">
          <p>{game.name}</p>
        </div>

        {/* Developers */}
        <div className="w-full flex text-lg font-semibold text-gray-400">
          <p>{data.developers[0]?.name}</p>
        </div>

        {/* Description */}
        <div className="w-full">
          <p>
            {data?.description_raw
              ? `${data.description_raw.slice(0, 200)}${
                  data.description_raw.length > 200 ? "..." : ""
                }`
              : "No description available"}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full p-4 flex flex-col justify-center gap-4">
        {/* Genres */}
        <div className="w-full flex flex-wrap gap-2 text-xs">
          {data?.genres.map((genre: Genre, index: number) => (
            <Tag key={index}>{genre.name}</Tag>
          ))}
        </div>

        {/* Platforms */}
        <div className="w-full flex flex-wrap gap-2 text-xs">
          {data?.platforms?.map(({ platform }: { platform: Platform }) => (
            <Tag key={platform.id}>{platform.name}</Tag>
          ))}
        </div>

        {/* Date */}
        <div className="w-full font-medium text-gray-500 flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <p>
            {game.released
              ? new Date(game.released).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "No release date"}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default GameCard;
