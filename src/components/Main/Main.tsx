"use client";

import Stack from "@/components/ui/Stack";
import { useState } from "react";
import { Input } from "../ui/input";

const Main = () => {
  const [gameData, setGameData] = useState(null);

  return (
    <Stack>
      <div className="p-4 w-full flex-grow flex flex-col ">
        {/* Toolbar */}
        <div className="w-full">
          <Input className="placeholder:text-gray-500" placeholder="Buscar" />
        </div>
      </div>
    </Stack>
  );
};

export default Main;
