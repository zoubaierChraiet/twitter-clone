import React from "react";
import FeedHeader from "./FeedHeader";
import Post from "./Post";

const Feed: React.FC = () => {
  return (
    <div className="border-x border-gray-200 border-opacity-70 h-full">
      <FeedHeader />
      <div className="my-4" />
      <div>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
