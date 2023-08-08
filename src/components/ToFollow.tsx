import React from "react";
import Profile from "./Shared/Profile";

const ToFollow: React.FC = async (props) => {
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
    </div>
  );
};

export default ToFollow;
