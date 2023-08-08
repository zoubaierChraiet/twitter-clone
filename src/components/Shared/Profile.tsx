import Image from "next/image";

interface IProfile extends React.HTMLAttributes<HTMLDivElement> {
  imgLink: string;
  userName: string;
  firstName: string;
  lastName: string;
  noFollow?: boolean;
}

const Profile: React.FC<IProfile> = ({
  firstName,
  imgLink,
  lastName,
  userName,
  className,
  noFollow,
}) => {
  return (
    <div
      className={`flex items-center gap-2 justify-between mb-2 ${className}`}
    >
      <div className="flex gap-2 items-center">
        <Image
          src={imgLink}
          alt="link"
          width={25}
          height={25}
          className="object-cover rounded-full"
        />
        <div>
          <h2 className="text-sm font-bold">{userName}</h2>
          <h2 className="text-xs">{`${firstName} ${lastName}`}</h2>
        </div>
      </div>
      {!noFollow ? (
        <button className="p-1 bg-blue-500 hover:bg-blue-700 rounded-full text-white text-xs">
          Follow
        </button>
      ) : null}
    </div>
  );
};

export default Profile;
