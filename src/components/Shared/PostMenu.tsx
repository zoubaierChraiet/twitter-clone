import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Bars3Icon, TrashIcon } from "@heroicons/react/24/outline";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useSession } from "next-auth/react";

interface IProps {
  postId: string;
  postUserId: string;
}

const PostMenu: React.FC<IProps> = ({ postId, postUserId }) => {
  const { data, status } = useSession();
  const handleDeletePost = async () => {
    await deleteDoc(doc(db, "posts", postId));
  };
  const canUserDelete =
    data?.user?.email !== postUserId || status === "unauthenticated";

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            disabled={canUserDelete}
            className="inline-flex w-full text-sm font-mediu"
          >
            <Bars3Icon width={30} height={30} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 mb-2 -mr-6 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-300 text-white" : "text-gray-900"
                    } group flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm`}
                    onClick={handleDeletePost}
                  >
                    <TrashIcon width={15} height={15} />
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default PostMenu;
