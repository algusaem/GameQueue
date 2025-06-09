import { ArrowBigLeft, Calendar } from "lucide-react";
import Link from "next/link";
import Tag from "../ui/tag";
import { Genre } from "@/interfaces/Content/interface";
import { HeaderProps } from "@/interfaces/Details/interface";

const Header = ({ data }: HeaderProps) => {
  return (
    <div className="w-full lg:w-3/5 flex flex-col gap-2 mt-auto mb-4 px-4 sm:px-6 lg:px-0">
      <div className="w-full flex gap-2 text-gray-500 items-center cursor-pointer hover:text-gray-300 text-sm sm:text-base">
        <ArrowBigLeft className="h-5 w-5 shrink-0" />
        <Link href={"/"}>
          <span className="truncate">Back to homepage</span>
        </Link>
      </div>

      {/* Genres */}
      <div className="w-full flex flex-wrap gap-2 text-xs sm:text-sm">
        {data?.genres.map((genre: Genre, index: number) => (
          <Tag key={index}>{genre.name}</Tag>
        ))}
      </div>

      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight break-words">
        {data.name}
      </h1>

      <div className="w-full flex flex-wrap text-sm sm:text-base font-semibold text-gray-400 gap-2 sm:gap-4">
        <p className="truncate">{data.developers[0]?.name}</p>
        <div>-</div>
        <p className="truncate">{data.publishers[0]?.name}</p>
        <div>-</div>
        <div className="font-medium text-gray-500 flex items-center gap-1 sm:gap-2">
          <Calendar className="h-4 w-4 shrink-0" />
          <p className="whitespace-nowrap">
            {data.released
              ? new Date(data.released).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "No release date"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
