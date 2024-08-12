import React from "react";
import { IoHomeOutline, IoMailOutline } from "react-icons/io5";
import { FaHashtag } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { PiBookmarkSimple, PiUserCircle } from "react-icons/pi";
import { RiFileList2Line } from "react-icons/ri";
import { CgMoreO } from "react-icons/cg";

const sidebarLeft = [
  {
    id: 1,
    title: "Home",
    icon: <IoHomeOutline />,
  },
  {
    id: 2,
    title: "Explore",
    icon: <FaHashtag />,
  },
  {
    id: 3,
    title: "Notifications",
    icon: <FaRegBell />,
  },
  {
    id: 4,
    title: "Messages",
    icon: <IoMailOutline />,
  },
  {
    id: 5,
    title: "Bookmarks",
    icon: <PiBookmarkSimple />,
  },
  {
    id: 6,
    title: "Lists",
    icon: <RiFileList2Line />,
  },
  {
    id: 7,
    title: "Profile",
    icon: <PiUserCircle />,
  },
  {
    id: 8,
    title: "More",
    icon: <CgMoreO />,
  },
];

const SideLeft = () => {
  return (
    <>
      <div className="w-full h-full flex gap-14 px-12 pt-12 flex-col">
        {sidebarLeft.map((item, index) => {
          return (
            <>
              <div
                key={item.id}
                className="text-2xl font-semibold cursor-pointer flex gap-3 items-center"
                >
                {item.icon}
                {item.title}
              </div>
            </>
          );
        })}
        <button className="shadow-md px-4 py-5 rounded-full bg-blue-500 text-white text-xl font-semibold">
          Tweet
        </button>
      </div>
    </>
  );
};

export default SideLeft;
