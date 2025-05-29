"use client";

import Filterbar from "./Filterbar";
import Content from "./Content";

const Main = () => {
  return (
    <div className="w-full h-full lg:w-3/5 mx-auto flex flex-col ">
      <Filterbar />
      <Content />
    </div>
  );
};
export default Main;
