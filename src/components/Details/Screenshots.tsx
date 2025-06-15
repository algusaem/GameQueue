import useFetchScreenshots from "@/hooks/useFetchScreenshots";
import Image from "next/image";

const Screenshots = ({ slug }: { slug: string }) => {
  const { data: screenshots } = useFetchScreenshots(slug);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {screenshots?.results.map((screenshot: { id: number; image: string }) => (
        <div key={screenshot.id} className="relative w-full h-64">
          <Image
            src={screenshot.image}
            alt={`Screenshot ${screenshot.id}`}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
};

export default Screenshots;
