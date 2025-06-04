import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";

const Header = ({ data }) => {
  console.log(data);
  console.log(data.background_image);

  return (
    <div className="w-full lg:w-3/5 flex flex-col gap-4 mt-auto mb-4">
      <div className="w-full flex gap-2 text-gray-500 items-center cursor-pointer hover:text-gray-300">
        <ArrowBigLeft className="h-5 w-5" />
        <Link href={"/"}>
          <span>Back to homepage</span>
        </Link>
      </div>
      <h1 className="text-white text-2xl font-bold">{data.name}</h1>
    </div>
  );
};

export default Header;
