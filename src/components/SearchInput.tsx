import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

interface IProps {}

const SearchInput: React.FC<IProps> = (props) => {
  return (
    <div className="relative">
      <MagnifyingGlassIcon
        width={15}
        height={15}
        className="absolute top-3 left-3 peer-only:"
      />
      <input
        type="search"
        placeholder="Search"
        className="bg-gray-100 outline-none px-4 pl-10 py-2 rounded-full focus:outline-1 focus:outline-blue-500"
      />
    </div>
  );
};

export default SearchInput;
