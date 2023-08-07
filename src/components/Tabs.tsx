import React from "react";

interface IProps {}

const Tabs: React.FC<IProps> = (props) => {
  return (
    <div className="grid w-full grid-cols-2 border-b border-gray-300">
      <div className="text-center h-full py-4 hover:bg-gray-300 cursor-pointer transition-colors duration-300 font-bold">
        For you
      </div>
      <div className="text-center h-full py-4 hover:bg-gray-300 cursor-pointer transition-colors duration-300 font-bold">
        Following
      </div>
    </div>
  );
};

export default Tabs;
