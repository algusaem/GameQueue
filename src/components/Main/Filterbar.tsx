import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFilter } from "@/hooks/FilterProvider";
import { useNewThisMonth } from "@/hooks/NewThisMonthProvider";
import { Search } from "lucide-react";

const Filterbar = () => {
  const { genres, platforms } = useNewThisMonth();

  const {
    searchValue,
    setSearchValue,
    platformFilter,
    setPlatformFilter,
    genreFilter,
    setGenreFilter,
  } = useFilter();

  return (
    <div className="w-full py-8 px-4 lg:px-0 flex flex-col">
      {/* Toolbar */}
      <div className="w-full flex gap-2 flex-col lg:flex-row">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
          <Input
            className="pl-9 placeholder:text-gray-500 text-white border-gray-400 rounded-xs text-xs lg:text-md"
            placeholder="Search for games to add to your library"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
        </div>

        {/* Filter platforms */}
        <Select value={platformFilter} onValueChange={setPlatformFilter}>
          <SelectTrigger className="w-full lg:w-56 rounded-xs !text-white border-gray-400">
            <SelectValue placeholder="All Platforms" />
          </SelectTrigger>
          <SelectContent className="bg-gray-950 border-gray-400 text-white">
            {platforms.map((platform, index) => (
              <SelectItem value={platform} key={index}>
                {platform}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Filter genres */}
        <Select value={genreFilter} onValueChange={setGenreFilter}>
          <SelectTrigger className="w-full lg:w-56 rounded-xs !text-white border-gray-400">
            <SelectValue placeholder="All Genres" />
          </SelectTrigger>
          <SelectContent className="bg-gray-950 border-gray-400 text-white">
            {genres.map((genre, index) => (
              <SelectItem value={genre} key={index}>
                {genre}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Filterbar;
