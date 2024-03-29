import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { TiHomeOutline } from "react-icons/ti";
import { LuFlag } from "react-icons/lu";
import { MdOutlineExpandMore, MdOutlineVideocam } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { AiFillMessage, AiFillBell, AiOutlineShop } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16">
      {/*Left*/}
      <div className="flex min-w-fit">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
          height={40}
          width={40}
        />
        <div className="flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500">
          <FaSearch size={20} />
          <input
            className="hidden lg:inline-flex bg-transparent focus:outline-none"
            type="text"
            placeholder="Search Facebook"
          ></input>
        </div>
      </div>
      {/*Center*/}
      <div className="flex flex-grow justify-center mx-2">
        <div className="flex items-center">
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <TiHomeOutline className="mx-auto" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <LuFlag className="mx-auto" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <MdOutlineVideocam className="mx-auto" size={30} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <MdShoppingCart className="mx-auto" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <IoGameController className="mx-auto" size={25} />
          </div>
        </div>
      </div>

      {/*Right*/}
      <div className="flex items-center justify-end min-w-fit space-x-2">
        <Image
          src={session?.user.image}
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
          onClick={signOut}
        />
        <p className="hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs ">
          {session?.user.name.split(" ")[0]}
        </p>
        <CgMenuGridO
          size={20}
          className=" hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <AiFillMessage
          size={20}
          className=" hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <AiFillBell
          size={20}
          className=" hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <MdOutlineExpandMore
          size={20}
          className=" hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
      </div>
    </div>
  );
};

export default Header;
