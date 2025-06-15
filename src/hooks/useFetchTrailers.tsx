import getTrailers from "@/api/games/getTrailers";
import { useQuery } from "@tanstack/react-query";

const useFetchTrailers = (slug: string) => {
  return useQuery({
    queryKey: ["trailers", slug],
    queryFn: () => getTrailers(slug),
  });
};

export default useFetchTrailers;
