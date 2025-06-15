const getStores = async (slug: string) => {
  const key = process.env.NEXT_PUBLIC_API_KEY;
  if (!key) throw new Error("Missing NEXT_PUBLIC_API_KEY");

  const res = await fetch(
    `https://api.rawg.io/api/games/${slug}/stores?key=${key}`
  );
  if (!res.ok) throw new Error(`RAWG ${res.status} ${res.statusText}`);

  return res.json();
};

export default getStores;
