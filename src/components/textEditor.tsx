"use client";

import React, { useRef, useState } from "react";
import {
  FaceSmileIcon,
  PhotoIcon,
  UserCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import Image from "next/image";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getFileBase64 } from "@/utils/helpers";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

interface IProps {}

const TextEditor: React.FC<IProps> = (props) => {
  const { data, status } = useSession();
  const [formState, setFormState] = useState(() => ({
    text: "",
    img: "",
  }));
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, text: e.target.value }));
  };

  const post = async () => {
    if (!formState.text) return;
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        id: data?.user?.email,
        text: formState.text,
        timestamp: serverTimestamp(),
        userImg: data?.user?.image,
        username: data?.user?.name,
      });

      if (formState.img) {
        const imageRef = ref(storage, `posts/${docRef.id}/image`);
        await uploadString(imageRef, formState.img, "data_url").then(
          async () => {
            const downloadUrl = await getDownloadURL(imageRef);
            await updateDoc(docRef, {
              imageLink: downloadUrl,
            });
          }
        );
      }

      setFormState((prev) => ({ ...prev, text: "", img: "" }));
    } catch (err: any) {
      throw new Error(err);
    }
  };

  const addImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files?.[0]) {
      const res = await getFileBase64(e?.target?.files?.[0]);
      setFormState((prev) => ({ ...prev, img: res as string }));
    }
  };

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
            value={formState.text}
            onChange={handleChange}
          />
          {formState.img ? (
            <div className="relative">
              <XCircleIcon
                width={40}
                height={40}
                className="absolute cursor-pointer"
                color="red"
                onClick={() => setFormState((prev) => ({ ...prev, img: "" }))}
              />
              <Image
                src={formState.img}
                alt="Preview mage"
                width={1000}
                height={1000}
                className="w-full h-[200px] mb-4 rounded-md"
              />
            </div>
          ) : null}
          <div className="flex gap-4">
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <FaceSmileIcon width={20} height={20} color="rgb(29, 155, 240)" />
            </button>
            <button
              className="p-2 hover:bg-gray-200 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef?.current?.click();
              }}
            >
              <PhotoIcon width={20} height={20} color="rgb(29, 155, 240)" />
              <input
                type="file"
                hidden
                ref={fileInputRef}
                onChange={addImage}
              />
            </button>
            <span className="flex-grow" />
            <button
              disabled={!formState.text}
              className="bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600 transition-colors duration-300 font-semibold"
              onClick={post}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
