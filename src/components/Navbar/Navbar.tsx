import Stack from "@/components/ui/Stack";
import { Trophy } from "lucide-react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700", "900"], // Adjust as needed
  display: "swap",
});

const Navbar = () => {
  return (
    <Stack>
      <div className="w-full border-b border-gray-400 p-4 lg:px-0 flex flex-col gap-1.5">
        {/* Logo and title */}
        <div className="w-full flex gap-4 items-center justify-center sm:justify-start">
          <div
            className={`${orbitron.className} font-black text-2xl sm:text-4xl tracking-normal`}
          >
            <span className="text-slate-300">G</span>
            <span className="text-red-700">ame</span>
            <span className="thin text-slate-300">|</span>
            <span className="text-slate-300">Q</span>
            <span className="text-red-700">ueue</span>
          </div>
        </div>

        {/* Subtitle and Date*/}
        <div className="w-full flex justify-between flex-col gap-2 lg:flex-row">
          <p className="hidden sm:block text-gray-400 text-md lg:text-lg ">
            Find out what you are playing this month!
          </p>
          <div className="flex items-center gap-3 text-gray-400 font-medium text-md justify-center sm:justify-start">
            <Trophy className="h-5 w-5 text-amber-400" />
            <span>
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
              })}
            </span>
          </div>
        </div>
      </div>
    </Stack>
  );
};

export default Navbar;
