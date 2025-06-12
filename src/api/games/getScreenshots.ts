const getScreenshots = async (slug: string) => {
  const key = process.env.NEXT_PUBLIC_API_KEY;
  if (!key) throw new Error("Missing NEXT_PUBLIC_API_KEY");

  const url = `https://api.rawg.io/api/games/${slug}/screenshots?key=${key}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`RAWG ${res.status} ${res.statusText}`);

  return res.json();
};

export default getScreenshots;
