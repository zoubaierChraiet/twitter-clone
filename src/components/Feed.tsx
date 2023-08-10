"use client";

import React, { Fragment, useEffect, useState } from "react";
import FeedHeader from "./FeedHeader";
import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import { Transition } from "@headlessui/react";

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
        setShow(true);
      }
    );
  }, []);

  return (
    <div className="border-x border-gray-200 border-opacity-70 h-full">
      <FeedHeader />
      <div className="my-4" />
      <Transition
        show={show}
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div>
          {posts.map((post, i) => (
            <Post
              key={i}
              date={post?.data()?.timestamp?.toDate()}
              postText={post.data()?.text}
              imageLink={post.data()?.imageLink}
              userImage={post.data()?.userImg}
              userName={post?.data()?.username}
              postUserId={post?.data()?.id}
              id={post.id}
            />
          ))}
        </div>
      </Transition>
    </div>
  );
};

export default Feed;
