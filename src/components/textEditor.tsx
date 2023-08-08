"use client";

import React from "react";
import {
  FaceSmileIcon,
  PhotoIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import Image from "next/image";

interface IProps {}

const TextEditor: React.FC<IProps> = (props) => {
  const { data, status } = useSession();

  return (
    <div className="px-4 py-2 border-b border-gray-300">
      <div className="flex gap-4 items-start">
        {data?.user?.image && status === "authenticated" ? (
          <Image
            src={data?.user?.image!}
            alt="profile image"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
        ) : (
          <UserCircleIcon width={50} height={50} />
        )}
        <div className="w-full">
          <textarea
            placeholder="What is happening?"
            className="outline-none w-full min-h-[100px] placeholder:text-xl text-slate-700 resize border-b border-gray-300"
          />
          <div className="flex gap-4">
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <FaceSmileIcon width={20} height={20} color="rgb(29, 155, 240)" />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <PhotoIcon width={20} height={20} color="rgb(29, 155, 240)" />
            </button>
            <span className="flex-grow" />
            <button className="bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600 transition-colors duration-300 font-semibold">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
