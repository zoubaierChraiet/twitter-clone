import React from "react";
import FeedHeader from "./FeedHeader";
import Post from "./Post";

interface IProps {}

const Feed: React.FC<IProps> = (props) => {
  return (
    <div className="border-x border-gray-200 border-opacity-70 h-full">
      <FeedHeader />
      <div className="my-4" />
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
