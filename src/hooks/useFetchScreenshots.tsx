import getScreenshots from "@/api/games/getScreenshots";
import { useQuery } from "@tanstack/react-query";

const useFetchScreenshots = (slug: string) => {
  return useQuery({
    queryKey: ["screenshots", slug],
    queryFn: () => getScreenshots(slug),
  });
};

export default useFetchScreenshots;
