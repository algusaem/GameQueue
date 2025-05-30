import { useQuery } from "@tanstack/react-query";
import { getAll } from "@/api/games/getAll";

const useFetchAllGames = () => {
  return useQuery({
    queryKey: ["videogames"],
    queryFn: getAll,
  });
};

export default useFetchAllGames;
