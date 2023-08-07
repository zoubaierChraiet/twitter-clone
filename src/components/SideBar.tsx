import Image from "next/image";
import React from "react";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  BellAlertIcon,
  EnvelopeIcon,
  UserCircleIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import MenuItem from "./MenuItem";

interface IProps {}

const SideBar: React.FC<IProps> = (props) => {
  return (
    <div className="flex md:w-full justify-end lg:pr-24 pr-4 pt-4 min-w-[75px]">
      <div className="h-full flex flex-col">
        {/* LOGO */}
        <Image
          src="/twitter-logo.png"
          width={50}
          height={50}
          className="bg-cover mb-12"
          alt="twitter logo"
        />
        {/* Menu */}
        <ul className="mb-6 ">
          <MenuItem href="" Icon={HomeIcon} text="Home" />
          <MenuItem href="" Icon={MagnifyingGlassIcon} text="Explore" />
          <MenuItem href="" Icon={BellAlertIcon} text="Notifications" />
          <MenuItem href="" Icon={EnvelopeIcon} text="Messages" />
          <MenuItem href="" Icon={UserCircleIcon} text="Profile" />
        </ul>
        {/* Button */}
        <button className="rounded-full bg-blue-500 text-white p-4 ">
          <span className="hidden lg:block">Post</span>
          <BoltIcon className="lg:hidden" />
        </button>
        {/* Mini profile */}
      </div>
    </div>
  );
};

export default SideBar;
