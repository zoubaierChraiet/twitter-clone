import React from "react";
import Tabs from "./Tabs";

interface IProps {}

const FeedHeader: React.FC<IProps> = (props) => {
  return (
    <>
      <h2 className="text-lg font-bold pt-4 pl-4 mb-6">Home</h2>
      <Tabs />
    </>
  );
};

export default FeedHeader;
