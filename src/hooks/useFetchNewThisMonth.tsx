import { useQuery } from "@tanstack/react-query";
import { getNewThisMonth } from "@/api/games/getNewThisMonth";

const useFetchNewThisMonth = () => {
  return useQuery({
    queryKey: ["newThisMonth"],
    queryFn: () => getNewThisMonth(),
  });
};

export default useFetchNewThisMonth;
