import Image from "next/image";
import React from "react";

interface IProps {}

const ToFollow: React.FC<IProps> = async (props) => {
  const res = await fetch(
    "https://randomuser.me/api?results=10&inc=name,login,picture",
    {
      cache: "no-cache",
      next: {
        revalidate: 10000,
      },
    }
  );

  if (!res?.ok) throw new Error("Failed to fetch data");

  const data = await res?.json();

  return (
    <div className="widget-container">
      <h2 className="text-xl font-bold mb-2">Who to follow?</h2>
      {data.results.map((each: any) => (
        <Profile
          key={each?.login?.uuid}
          imgLink={each?.picture?.thumbnail}
          userName={each?.login?.username}
          firstName={each?.name?.first}
          lastName={each?.name?.last}
        />
      ))}
      <div></div>
    </div>
  );
};

interface IProfile {
  imgLink: string;
  userName: string;
  firstName: string;
  lastName: string;
}

const Profile: React.FC<IProfile> = ({
  firstName,
  imgLink,
  lastName,
  userName,
}) => {
  return (
    <div className="flex items-center gap-2 justify-between mb-2">
      <div className="flex gap-2 items-center">
        <Image
          src={imgLink}
          alt="link"
          width={50}
          height={50}
          className="object-cover rounded-full"
        />
        <div>
          <h2 className="text-sm font-bold">{userName}</h2>
          <h2 className="text-xs">{`${firstName} ${lastName}`}</h2>
        </div>
      </div>
      <button className="p-2 bg-blue-500 hover:bg-blue-700 rounded-full text-white text-sm">
        Follow
      </button>
    </div>
  );
};

export default ToFollow;
