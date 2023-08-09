import React from "react";
import { UserCircleIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import PostInteract from "./PostInteract";

export interface IPostProps {
  postText: string;
  userImage: string;
  imageLink: string;
  userName: string;
  date: Date;
  id: string;
}

const Post: React.FC<IPostProps> = (props) => {
  const { imageLink, userImage, userName, postText, date, id } = props;
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
              @{userName} . {date ? formatDistanceToNow(date) : null}
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
        <PostInteract {...props} />
      </div>
    </div>
  );
};

export default Post;
