import Link from "next/link";
import React from "react";

interface IProps {
  Icon: JSX.ElementType;
  text: string;
  href: string;
}

const MenuItem: React.FC<IProps> = ({ Icon, text, href }) => {
  return (
    <li>
      <Link href={href} className="list-link">
        <Icon width={30} height={30} />
        <span className="hidden lg:block">{text}</span>
      </Link>
    </li>
  );
};

export default MenuItem;
