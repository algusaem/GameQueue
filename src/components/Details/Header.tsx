import { ArrowBigLeft, Calendar } from "lucide-react";
import Link from "next/link";

const Header = ({ data }) => {
  console.log(data);
  console.log(data.background_image);

  return (
    <div className="w-full lg:w-3/5 flex flex-col gap-1 mt-auto mb-4">
      <div className="w-full flex gap-2 text-gray-500 items-center cursor-pointer hover:text-gray-300">
        <ArrowBigLeft className="h-5 w-5" />
        <Link href={"/"}>
          <span>Back to homepage</span>
        </Link>
      </div>
      <h1 className="text-white text-4xl font-bold">{data.name}</h1>
      <div className="w-full flex text-lg font-semibold text-gray-400 gap-4">
        <p>{data.developers[0]?.name}</p>
        <div>-</div>
        <p>{data.publishers[0]?.name}</p>
        <div>-</div>
        <div className="font-medium text-gray-500 flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <p>
            {data.released
              ? new Date(data.released).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "No release date"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
