"use client";
import useFetchDetails from "@/hooks/useFetchDetails";

const Details = ({ slug }: { slug: string }) => {
  const { data, isLoading, error } = useFetchDetails(slug);

  if (isLoading)
    return <p className="w-full flex justify-center">Loading...</p>;
  if (error) return <p className="w-full flex justify-center">Error loading</p>;

  return (
    <div className="w-full h-full lg:w-3/5 mx-auto flex flex-col">
      {data.name}
    </div>
  );
};

export default Details;
