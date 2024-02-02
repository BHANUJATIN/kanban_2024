import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  InformationCircleIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

import Trello from "../icons/Logo.png";
import Boards from "../icons/trello-mark-blue.png";

const rightIconClass = `w-6 text-gray-200 hover:text-gray-400`;

const Navbar = () => {
  return (
    <div className="flex w-full border-b px-2 py-2 bg-white ">
      <div className="flex w-1/2 items-center gap-x-2">
        <span className="border-r px-2 hidden md:block">
          <img src={Trello} className="w-16"/>
        </span>

        <div className="flex items-center pl-2 md:px-2 border-r ">
            <img src={Boards} className="w-6"/>
            <span className=" hidden md:block font-semibold">Boards</span>
        </div>

        <div className=" md:bg-[#F4F4F4] flex items-center border-white rounded-full md:px-4  w-fit md:w-3/4">
          <input
            type="text"
            className="hidden md:block rounded-full bg-[#F4F4F4] p-1 w-full outline-none"
            placeholder=""
          />
          <span className="md:px-2">
            <MagnifyingGlassIcon className="w-6 text-gray-300 md:text-black" />
          </span>
        </div>
      </div>
      <div className="flex justify-end items-center w-1/2 gap-x-1">
        <div className="flex items-center gap-x-1 md:gap-x-3">
          <PlusCircleIcon className={rightIconClass} />
          <InformationCircleIcon className={rightIconClass} />
          <BellIcon className={rightIconClass} />
        </div>
        <div><img
          className="rounded-full h-10 w-10 "
          src="https://randomuser.me/api/portraits/women/32.jpg"
          alt=""
        /></div>
      </div>
    </div>
  );
};

export default Navbar;
