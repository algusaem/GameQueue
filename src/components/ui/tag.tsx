import React from "react";

const Tag = ({ children }: { children: string }) => {
  return (
    <span className="ring-2 ring-gray-500 p-2 px-4 rounded-xl font-medium ring-inset whitespace-nowrap text-gray-400">
      {children}
    </span>
  );
};
export default Tag;
