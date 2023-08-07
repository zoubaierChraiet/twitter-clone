import {
  UserCircleIcon,
  Bars3Icon,
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  ChartBarIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";
import React from "react";

interface IProps {}

const Post: React.FC<IProps> = (props) => {
  return (
    <div className="py-2 px-4 border-b border-b-gray-300 border-opacity-70 flex gap-2">
      <UserCircleIcon width={50} height={50} />
      <div className="flex flex-grow flex-col">
        <div className="flex w-full justify-between items-center">
          <div>elon zouba</div>
          <Bars3Icon width={30} height={30} />
        </div>
        <div className="mb-4">content</div>
        <div className="flex justify-between">
          <button className="flex gap-2 items-center text-gray-200">
            <ChatBubbleOvalLeftIcon width={18} height={18} color="lightgray" />
            96.2k
          </button>
          <button className="flex gap-2 items-center text-gray-200">
            <ArrowPathRoundedSquareIcon
              width={18}
              height={18}
              color="lightgray"
            />
            45.5k
          </button>
          <button className="flex gap-2 items-center text-gray-200">
            <HeartIcon width={18} height={18} color="lightgray" />
            72k
          </button>
          <button className="flex gap-2 items-center text-gray-200">
            <ChartBarIcon width={18} height={18} color="lightgray" />
            32k
          </button>
          <button className="flex gap-2 items-center text-gray-200">
            <ArrowUpTrayIcon width={18} height={18} color="lightgray" />
            27.5k
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
