import React, { useEffect, useState } from "react";
import {
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  ChartBarIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { IPostProps } from "./Post";

const PostInteract: React.FC<IPostProps> = ({ id: postId }) => {
  const { data, status } = useSession();
  const [likes, setLikes] = useState<any[]>([]);
  const userHasLiked = likes.includes(data?.user?.email);

  const likePost = async () => {
    if (status === "unauthenticated") return;
    if (userHasLiked) {
      await deleteDoc(doc(db, "posts", postId, "likes", data?.user?.email!));
      return;
    }
    await setDoc(doc(db, "posts", postId, "likes", data?.user?.email!), {
      username: data?.user?.name,
    });
  };

  useEffect(() => {
    onSnapshot(query(collection(db, "posts", postId, "likes")), (snapshot) =>
      setLikes(snapshot.docs.map((each) => each.id))
    );
  }, []);

  return (
    <div className="flex justify-between">
      <button className="flex gap-2 items-center text-gray-400 hover:text-blue-400">
        <ChatBubbleOvalLeftIcon width={18} height={18} />
        96.2k
      </button>
      <button className="flex gap-2 items-center text-gray-400 hover:text-green-400">
        <ArrowPathRoundedSquareIcon width={18} height={18} />
        45.5k
      </button>
      <button
        className="flex gap-2 items-center text-gray-400 hover:text-pink-400"
        onClick={likePost}
      >
        {userHasLiked ? (
          <HeartIconFilled width={18} height={18} color="red" />
        ) : (
          <HeartIcon width={18} height={18} />
        )}
        {likes?.length}
      </button>
      <button className="flex gap-2 items-center text-gray-400 hover:text-blue-400">
        <ChartBarIcon width={18} height={18} />
        32k
      </button>
      <button className="flex gap-2 items-center text-gray-400 hover:text-blue-400">
        <ArrowUpTrayIcon width={18} height={18} />
        27.5k
      </button>
    </div>
  );
};

export default PostInteract;
