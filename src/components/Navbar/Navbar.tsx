import Stack from "@/components/ui/Stack";
import { Gamepad2, Trophy } from "lucide-react";

const Navbar = () => {
  return (
    <Stack>
      <div className="w-full border-b border-gray-800 p-4 flex flex-col gap-1.5">
        {/* Logo and title */}
        <div className="flex gap-4 items-center w-full">
          <Gamepad2 className="h-8 w-8 text-blue-400" />
          <h1 className="text-4xl font-bold tracking-tight text-white">
            GameQueue
          </h1>
        </div>

        {/* Subtitle and Date*/}
        <div className="w-full flex justify-between">
          <p className="text-gray-400 text-lg">
            Prepare your party. The next quest is coming!
          </p>
          <div className="flex items-center gap-3 text-sm text-gray-400">
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
