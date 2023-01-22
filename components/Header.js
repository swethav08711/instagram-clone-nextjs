import Image from "next/image";
import React from "react";
import { PlusCircleIcon, SearchIcon } from "@heroicons/react/outline";
import {HomeIcon} from "@heroicons/react/solid"
 export default function Header() {
  return (
    <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
      {/* left */}
      <div className=" cursor-pointer h-24 w-24 relative hidden lg:inline-grid ">
        <Image
          layout="fill"
          className=" object-contain"
          alt="ista-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
        />
      </div>
      <div className="cursor-pointer h-24 w-10 relative  lg:hidden ">
        <Image
          layout="fill"
          className=" object-contain"
          alt="ista-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
        />
      </div>

      {/* middle */}
      <div className=" relative mt-1">
        <div className="absolute top-2 left-2">
         <SearchIcon className=" h-5 text-gray-500"/>
        </div>
        <input type="text"  placeholder="Search" className=" bg-gray-50 pl-10 border-gray-500 text-sm focus:border-black rounded-md"/>
      </div>
      {/* right */}
     <div className="flex space-x-4 items-center">
       
     <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"/>
        <PlusCircleIcon className=" h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"/>
        <img src="https://media.licdn.com/dms/image/C5603AQHiMXhE7rjG3w/profile-displayphoto-shrink_800_800/0/1639831458203?e=2147483647&v=beta&t=K0NdNkIl3YXikzvTJjSamcFoaT-aAaZD06As5EXspo4"  alt="user-img" className="h-10 rounded-full cursor-pointer"/>
     </div>
    </div>
  );
}
