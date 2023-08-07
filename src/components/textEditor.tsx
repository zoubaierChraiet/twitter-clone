import React from "react";
import {
  FaceSmileIcon,
  PhotoIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

interface IProps {}

const TextEditor: React.FC<IProps> = (props) => {
  return (
    <div className="px-4 py-2 border-b border-gray-300">
      <div className="flex gap-4 items-start">
        <UserCircleIcon width={50} height={50} />
        <div className="w-full">
          <textarea
            placeholder="What is happening?"
            className="outline-none w-full min-h-[100px] resize border-b border-gray-300"
          />
          <div className="flex gap-4">
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <FaceSmileIcon width={20} height={20} color="rgb(29, 155, 240)" />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <PhotoIcon width={20} height={20} color="rgb(29, 155, 240)" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
