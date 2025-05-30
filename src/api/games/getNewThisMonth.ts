export interface RawgGame {
  id: number;
  name: string;
  released: string;
  background_image: string | null;
  rating: number;
  metacritic?: number;
  slug?: string;
  [key: string]: unknown;
}

interface RawgPage<T> {
  count: number;
  next: string | null;
  results: T[];
}

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
  base.searchParams.set("ordering", "-released");
  base.searchParams.set("page_size", pageSize.toString());

  const res1 = await fetch(base.toString());
  if (!res1.ok) throw new Error(`RAWG ${res1.status} ${res1.statusText}`);

  const p1 = (await res1.json()) as RawgPage<RawgGame>;
  const games: RawgGame[] = [...p1.results];

  const actualPageSize = p1.results.length; // 20 or 40
  const pages = Math.ceil(p1.count / actualPageSize);

  if (pages <= 1) return games; // nothing else to do

  const fetches = Array.from({ length: pages - 1 }, (_, i) => {
    const url = new URL(base);
    url.searchParams.set("page", (i + 2).toString());
    return fetch(url.toString())
      .then((r) => {
        if (!r.ok) throw new Error(`RAWG ${r.status} ${r.statusText}`);
        return r.json() as Promise<RawgPage<RawgGame>>;
      })
      .then((p) => p.results);
  });

  const rest = await Promise.all(fetches);
  rest.map((list) => games.push(...list));

  return games;
}
