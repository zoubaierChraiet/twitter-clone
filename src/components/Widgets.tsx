import React from "react";

import SearchInput from "./SearchInput";
import Trends from "./Trends";
import News from "./News";
import ToFollow from "./ToFollow";

interface IProps {}

const Widgets: React.FC<IProps> = (props) => {
  return (
    <div>
      <SearchInput />
      <div className="mb-4" />
      <ToFollow />
      <Trends />
      <News />
    </div>
  );
};

export default Widgets;
