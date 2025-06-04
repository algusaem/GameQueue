"use client";
import useFetchDetails from "@/hooks/useFetchDetails";
import Header from "./Header";
import Image from "next/image";

const Details = ({ slug }: { slug: string }) => {
  const { data, isLoading, error } = useFetchDetails(slug);

  if (isLoading)
    return <p className="w-full flex justify-center">Loading...</p>;
  if (error) return <p className="w-full flex justify-center">Error loading</p>;

  return (
    <div className="w-full min-h-screen">
      <div className="relative w-full min-h-[60vh]">
        <Image
          src={data.background_image ?? "/assets/game_fallback.png"}
          alt={data.name}
          fill
          className="object-cover object-top opacity-90"
          priority
        />

        {/* Top gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-950 to-transparent" />

        {/* Bottom gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-950 to-transparent" />

        {/* Header content */}
        <div className="absolute inset-0 z-20 flex justify-center">
          <Header data={data} />
        </div>
      </div>

      <div className="w-full">Rest of the data</div>
    </div>
  );
};

export default Details;
