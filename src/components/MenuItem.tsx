import Link from "next/link";
import React from "react";

interface IProps {
  Icon: JSX.ElementType;
  text: string;
  href: string;
}

const MenuItem: React.FC<IProps> = ({ Icon, text, href }) => {
  return (
    <li data-testid="menu-item">
      <Link href={href} className="list-link">
        {Icon ? <Icon data-testid="icon" width={30} height={30} /> : null}
        <span data-testid="menue-iem-text" className="hidden lg:block">
          {text}
        </span>
      </Link>
    </li>
  );
};

export default MenuItem;
