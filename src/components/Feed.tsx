import React from "react";
import FeedHeader from "./FeedHeader";

interface IProps {}

const Feed: React.FC<IProps> = (props) => {
  return (
    <div className="border-x border-gray-300 h-full">
      <FeedHeader />
    </div>
  );
};

export default Feed;
