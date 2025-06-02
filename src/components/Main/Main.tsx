"use client";

import Filterbar from "./Filterbar";
import Content from "./Content";
import { FilterProvider } from "@/hooks/FilterProvider";
import { NewThisMonthProvider } from "@/hooks/NewThisMonthProvider";

const Main = () => {
  return (
    <div className="w-full h-full lg:w-3/5 mx-auto flex flex-col ">
      <FilterProvider>
        <NewThisMonthProvider>
          <Filterbar />
          <Content />
        </NewThisMonthProvider>
      </FilterProvider>
    </div>
  );
};
export default Main;
