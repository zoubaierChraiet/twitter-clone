import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  ArrowRightOnRectangleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Profile from "./Profile";
import { useSession, signOut } from "next-auth/react";

const ProfileMenu: React.FC = () => {
  const { data } = useSession();

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-full bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <Profile
              firstName={data?.user?.name!}
              imgLink={data?.user?.image!}
              lastName=""
              className="hidden mb-0 lg:block"
              userName={data?.user?.name!}
              noFollow
            />
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
          <Menu.Items className="absolute right-0 mt-2 mb-2 -mr-6 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bottom-full">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-300 text-white" : "text-gray-900"
                    } group flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm`}
                    onClick={() => signOut()}
                  >
                    <ArrowRightOnRectangleIcon width={15} height={15} />
                    Logout
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

export default ProfileMenu;
