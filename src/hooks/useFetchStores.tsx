import getStores from "@/api/games/getStores";
import { useQuery } from "@tanstack/react-query";

const useFetchStores = (slug: string) => {
  return useQuery({ queryKey: ["stores"], queryFn: () => getStores(slug) });
};

export default useFetchStores;
