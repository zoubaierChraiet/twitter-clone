"use client";

import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

interface IProps {}

const Signin: React.FC<IProps> = (props) => {
  return (
    <div className="w-full h-full pt-24 flex flex-col items-center">
      <Image
        src="/twitter-logo.png"
        alt="twitter-logo"
        width={150}
        height={150}
        className="object-cover"
      />
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="p-4 text-lg font-semibold bg-blue-500 text-white rounded-full flex gap-2"
      >
        <Image
          src="/google-logo.png"
          width={40}
          height={50}
          alt="google-logo"
          className="rounded-full"
        />
        Sign in with google
      </button>
    </div>
  );
};

export default Signin;
