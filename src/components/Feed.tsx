"use client";

import React, { useEffect, useState } from "react";
import FeedHeader from "./FeedHeader";
import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => setPosts(snapshot.docs)
    );
  }, []);

  return (
    <div className="border-x border-gray-200 border-opacity-70 h-full">
      <FeedHeader />
      <div className="my-4" />
      {posts.map((post, i) => (
        <Post
          key={i}
          postText={post.data()?.text}
          imageLink={post.data()?.imageLink}
          userImage={post.data()?.userImg}
          userName={post?.data()?.username}
        />
      ))}
    </div>
  );
};

export default Feed;
