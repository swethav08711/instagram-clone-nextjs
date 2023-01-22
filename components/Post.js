import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import React from "react";

export default function Post({ post }) {
  return (
    <div className=" bg-white my-7 border rounded-md">
      {/* post header */}
      <div className=" flex items-center p-5 ">
        <img
          className=" h-12 rounded-full object-cover border p-1  mr-3"
          src={post.userImg}
          alt={post.username}
        />
        <p className="font-bold flex-1">{post.username}</p>
        <DotsHorizontalIcon className=" h-5" />
      </div>
      {/* post image */}
      <img
        className=" object-cover w-full"
        src={post.img}
        alt={post.username}
      />

      {/* post buttons */}

      <div className=" flex justify-between px-4 pt-4 ">
        <div className=" flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
        </div>
        <div>
          <BookmarkIcon className="btn" />
        </div>
      </div>
      {/* post comments */}
      <p className=" p-5 truncate"><span className=" font-bold mr-2">{post.username}</span>{post.caption}</p>
      {/* post input box */}
      <form className=" flex items-center p-4">
        
      <EmojiHappyIcon className=" h-7"/>
      <input className=" border-none flex-1 focus:ring-0" type="text" placeholder="Enter Your Comments"/>
      <button className=" text-blue-400 font-bold">Post</button>
      </form>
    </div>
  );
}
