"use client";

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
import MenuItem from "./MenuItem";
import { useSession } from "next-auth/react";
import Profile from "./Shared/Profile";

const SideBar: React.FC = () => {
  const { data, status } = useSession();

  return (
    <div className="flex h-[100vh] md:w-full justify-end lg:pr-16 pr-4 pt-4 min-w-[75px]">
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
        <ul className="mb-6">
          <MenuItem href="" Icon={HomeIcon} text="Home" />
          <MenuItem href="" Icon={MagnifyingGlassIcon} text="Explore" />
          <MenuItem href="" Icon={BellAlertIcon} text="Notifications" />
          <MenuItem href="" Icon={EnvelopeIcon} text="Messages" />
          <MenuItem href="" Icon={UserCircleIcon} text="Profile" />
        </ul>
        {/* Button */}
        <button className="rounded-full bg-blue-500 text-white p-4">
          <span className="hidden lg:block">Post</span>
          <BoltIcon className="lg:hidden" width={20} height={20} />
        </button>
        {/* Mini profile */}
        <span className="flex-grow" />
        {data && status === "authenticated" ? (
          <Profile
            firstName={data?.user?.name!}
            imgLink={data?.user?.image!}
            lastName=""
            className="hidden mb-8 lg:block p-4 hover:bg-gray-300 transition-all duration-300 bg-opacity-50 rounded-full cursor-pointer"
            userName={data?.user?.name!}
            noFollow
          />
        ) : null}
      </div>
    </div>
  );
};

export default SideBar;
