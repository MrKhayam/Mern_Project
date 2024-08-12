import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import { TbMessageCircle } from "react-icons/tb";
import { AiOutlineRetweet } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { GoShare } from "react-icons/go";





const Post = () => {
  return (
    <>
      <div className="bg-white border-b-2 w-full h-auto gap-3 px-4 py-5 flex">
        <img
          className="w-16 h-16 object-cover rounded-full"
          src="https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?cs=srgb&dl=pexels-myca-1553783.jpg&fm=jpg"
          alt=""
        />
        <div className="postData w-full">
          <div className="flex userData justify-between items-center">
            <div className="userData gap-1 flex">
              <h1 className="text-md font-semibold">Khayam</h1>
              <h3 className="text-gray-400 font-semibold">@khayamIjaz123</h3>
              <h3 className="text-gray-400 font-semibold">- 3m</h3>
            </div>
            <FaChevronDown cursor="pointer" />
          </div>
          <div className="post w-full">
            <h3 className="text-md font-semibold mt-1">
              My name is Khayam Ijaz and I am 19 years old. I am a fullstack web
              developer and a speed programmer. I know all the stuff related to
              Javascript and I have a keen interest in programming. I am also a
              MERN developer and I have build mind blowing using these all
              technologies.{" "}
              <span className="text-blue-500 font-bold text-lg">
                #khayamIjaz
              </span>
            </h3>
          </div>
          <div className="icons flex gap-56 mt-6 text-gray-400 items-center">
            <div className="flex gap-2">
              <TbMessageCircle size={25} cursor="pointer" />
              <h2>4</h2>
            </div>
            <AiOutlineRetweet size={25} cursor="pointer" />
            <div className="flex gap-2">
              <CiHeart size={25} cursor="pointer" />
              <h2>8</h2>
            </div>
            <GoShare size={25} cursor="pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
