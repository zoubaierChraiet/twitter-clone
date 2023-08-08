import { Bars3Icon } from "@heroicons/react/24/solid";
import React from "react";

interface IProps {}

const Trends: React.FC<IProps> = (props) => {
  return (
    <div className="widget-container">
      <h2 className="text-xl font-bold mb-2">Trends for you</h2>
      <Trend trend="Zouba" />
      <Trend trend="Batman" />
      <Trend trend="Evolutiv" />
      <Trend trend="Barbie" />
      <Trend trend="Celaneo" />
    </div>
  );
};

const Trend: React.FC<{ trend: string }> = ({ trend }) => {
  return (
    <div className="mb-2">
      <div className="flex justify-between items-center">
        <small className="text-gray-500">trending in France</small>
        <Bars3Icon width={15} height={15} />
      </div>
      <h2 className="font-bold text-lg">{trend}</h2>
      <small className="text-gray-500">13.5 posts</small>
    </div>
  );
};

export default Trends;
