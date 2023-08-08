import Feed from "@/components/Feed";
import SideBar from "@/components/SideBar";
import Widgets from "@/components/Widgets";

export default function Home() {
  return (
    <div className="h-full">
      <div>
        <div className="w-full h-full flex md:grid md:grid-cols-6 lg:grid-cols-3">
          {/* SideBar */}
          <SideBar />

          {/* Feed */}
          <div className="flex-grow md:col-span-3 lg:col-span-1">
            <Feed />
          </div>

          {/* Widgets */}
          <div className="hidden md:flex p-2 pl-4">
            <Widgets />
          </div>
        </div>
      </div>
    </div>
  );
}
