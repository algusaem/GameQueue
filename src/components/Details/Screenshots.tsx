"use client";

import useFetchScreenshots from "@/hooks/useFetchScreenshots";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Screenshots = ({ slug }: { slug: string }) => {
  const { data: screenshots } = useFetchScreenshots(slug);

  return (
    <PhotoProvider>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {screenshots?.results.map(
          (screenshot: { id: number; image: string }) => (
            <PhotoView key={screenshot.id} src={screenshot.image}>
              <div className="relative w-full h-64 cursor-pointer">
                <Image
                  src={screenshot.image}
                  alt={`Screenshot ${screenshot.id}`}
                  fill
                  className="object-cover rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </PhotoView>
          )
        )}
      </div>
    </PhotoProvider>
  );
};

export default Screenshots;
