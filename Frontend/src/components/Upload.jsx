import React from 'react'
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { VscListSelection } from "react-icons/vsc";
import { GrEmoji } from "react-icons/gr";





const Upload = () => {
  return (
    <>
      <div className="flex bg-white mb-3 flex-col w-full h-auto px-4 py-5 justify-between">
        <div className="flex items-center gap-3 w-full h-full">
          <img
            className="w-16 h-16 object-cover rounded-full"
            src="https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?cs=srgb&dl=pexels-myca-1553783.jpg&fm=jpg"
            alt=""
          />
          <input
            type="text"
            placeholder="What's happening?"
            className="text-lg font-semibold outline-none border-none w-full p-3 h-8"
          />
        </div>
        <div className="flex justify-between">
          <div className="icons flex items-center gap-4 ml-20">
            <CiImageOn
              cursor="pointer"
              strokeWidth={0.9}
              size={25}
              className="text-blue-500"
            />
            <MdOutlineGifBox
              cursor="pointer"
              size={25}
              className="text-blue-500"
            />
            <VscListSelection
              strokeWidth={0.9}
              cursor="pointer"
              size={25}
              className="text-blue-500"
            />
            <GrEmoji
              strokeWidth={0.9}
              cursor="pointer"
              size={25}
              className="text-blue-500"
            />
          </div>
          <button className="px-9 py-4 rounded-full bg-blue-500 text-white font-semibold">
            Tweet
          </button>
        </div>
      </div>
    </>
  );
}

export default Upload
