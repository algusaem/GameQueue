import { getDetails } from "@/api/games/getDetails";
import { useQuery } from "@tanstack/react-query";

const useFetchDetails = (slug: string) => {
  return useQuery({
    queryKey: ["details", slug],
    queryFn: () => getDetails(slug),
  });
};

export default useFetchDetails;
