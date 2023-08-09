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
import ProfileMenu from "./Shared/ProfileMenu";
import Link from "next/link";

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
          {status === "authenticated" ? (
            <>
              <MenuItem href="" Icon={BellAlertIcon} text="Notifications" />
              <MenuItem href="" Icon={EnvelopeIcon} text="Messages" />
              <MenuItem href="" Icon={UserCircleIcon} text="Profile" />
            </>
          ) : null}
        </ul>
        {/* Button */}
        {status === "authenticated" ? (
          <button className="rounded-full bg-blue-500 text-white p-4">
            <span className="hidden lg:block">Post</span>
            <BoltIcon className="lg:hidden" width={20} height={20} />
          </button>
        ) : null}
        {status === "unauthenticated" ? (
          <Link
            href="/auth/SignIn"
            className="rounded-full bg-blue-500 text-white p-4"
          >
            <span className="hidden lg:block text-center">Login</span>
            <UserCircleIcon className="lg:hidden" width={20} height={20} />
          </Link>
        ) : null}
        {/* Mini profile */}
        <span className="flex-grow" />
        {data && status === "authenticated" ? <ProfileMenu /> : null}
        <span className="mb-8" />
      </div>
    </div>
  );
};

export default SideBar;
