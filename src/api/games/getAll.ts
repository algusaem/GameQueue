const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getAll = async () => {
  const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`);

  if (!response.ok) throw new Error(`Failed to fetch RAWG data`);

  return await response.json();
};
