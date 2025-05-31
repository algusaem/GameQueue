import Image from "next/image";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { GameCardProps, Genre, Platform } from "@/interfaces/Content/interface";
import { Calendar } from "lucide-react";
import useFetchDetails from "@/hooks/useFetchDetails";

const GameCard = ({ game }: GameCardProps) => {
  const { data, isLoading, isError, error } = useFetchDetails(game.slug);
  console.log(data);
  return (
    <Card className="bg-transparent text-white min-h-120 max-h-full gap-0 rounded-md overflow-hidden">
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
        <div className="w-full flex justify-center text-xl font-semibold">
          <p>{game.name}</p>
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

        {/* Platforms */}
        <div className="w-full flex gap-2 text-xs">
          {data?.platforms?.map(({ platform }: { platform: Platform }) => (
            <p key={platform.id}>{platform.name}</p>
          ))}
        </div>

        {/* Genres */}
        <div className="w-full flex gap-2 text-xs">
          {data?.genres.map((genre: Genre, index: number) => (
            <p key={index}>{genre.name}</p>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="w-full p-4 flex flex-col justify-center gap-4">
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
        <Button
          className=" bg-gray-600 hover:bg-gray-500 w-full flex-1"
          variant="default"
        >
          More info
        </Button>
      </div>
    </Card>
  );
};

export default GameCard;
