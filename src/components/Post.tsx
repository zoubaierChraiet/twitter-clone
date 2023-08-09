import {
  UserCircleIcon,
  Bars3Icon,
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  ChartBarIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { formatDistanceToNow } from "date-fns";

interface IProps {
  postText: string;
  userImage: string;
  imageLink: string;
  userName: string;
  date: Date;
}

const Post: React.FC<IProps> = ({
  imageLink,
  userImage,
  userName,
  postText,
  date,
}) => {
  return (
    <div className="py-2 px-4 border-b border-b-gray-300 border-opacity-70 flex gap-2">
      {userImage ? (
        <Image
          src={userImage}
          alt="aquarelle"
          width={50}
          height={50}
          className="h-[50px] rounded-full"
        />
      ) : (
        <UserCircleIcon width={50} height={50} />
      )}
      <div className="flex flex-grow flex-col">
        <div className="flex w-full justify-between items-center">
          <div className="flex gap-2 items-center">
            <h2 className="font-bold">{userName}</h2>
            <h2 className="text-gray-400 text-sm">
              @{userName} . {formatDistanceToNow(date)}
            </h2>
          </div>
          <Bars3Icon width={30} height={30} />
        </div>
        <div className="mb-4 p-4">
          <p className="mb-4"> {postText} </p>
          {imageLink ? (
            <Image
              src={imageLink}
              alt="aquarelle"
              objectFit="cover"
              width={1000}
              height={1000}
              className="object-cover w-full h-[200px] rounded-md"
            />
          ) : null}
        </div>
        <div className="flex justify-between">
          <button className="flex gap-2 items-center text-gray-400 hover:text-blue-400">
            <ChatBubbleOvalLeftIcon width={18} height={18} />
            96.2k
          </button>
          <button className="flex gap-2 items-center text-gray-400 hover:text-green-400">
            <ArrowPathRoundedSquareIcon width={18} height={18} />
            45.5k
          </button>
          <button className="flex gap-2 items-center text-gray-400 hover:text-pink-400">
            <HeartIcon width={18} height={18} />
            72k
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
      </div>
    </div>
  );
};

export default Post;
