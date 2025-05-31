import { RawgGame, RawgPage } from "@/interfaces/Content/interface";

const getMonthRange = (): { first: string; last: string } => {
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth(); // 0-based
  return {
    first: new Date(y, m, 1).toISOString().split("T")[0],
    last: new Date(y, m + 1, 0).toISOString().split("T")[0],
  };
};

export async function getNewThisMonth(pageSize = 40): Promise<RawgGame[]> {
  const key = process.env.NEXT_PUBLIC_API_KEY;
  if (!key) throw new Error("Missing NEXT_PUBLIC_API_KEY");

  const { first, last } = getMonthRange();

  const base = new URL("https://api.rawg.io/api/games");
  base.searchParams.set("key", key);
  base.searchParams.set("dates", `${first},${last}`);
  base.searchParams.set("page_size", pageSize.toString());
  base.searchParams.set("ordering", "-added"); // Most popular first
  base.searchParams.set("platforms", "4,18,187,1,186,7");

  const res = await fetch(base.toString());
  if (!res.ok) throw new Error(`RAWG ${res.status} ${res.statusText}`);

  const data = (await res.json()) as RawgPage<RawgGame>;
  return data.results;
}
