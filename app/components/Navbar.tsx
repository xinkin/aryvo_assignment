import React from "react";
import { IoMdSettings } from "react-icons/io";
import { ImDrawer2 } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import logo from "../../public/logo.png";

const Navbar = () => {
  return (
    <div className="bg-[#F3F5F9] flex items-center w-screen justify-between py-3 md:text-xs">
      <div className="flex items-center px-6 gap-6">
        <div className="font-semibold 2xl:text-2xl text-xl">
          {/* aryvo */}
          <Image src={logo} alt="logo" width={70} className="mt-1" />
        </div>
        <div className="flex gap-3 text-xs 2xl:text-sm">
          <div>Home</div>
          <div>Trips</div>
          <div>Drivers</div>
          <div>Customers</div>
          <div>Finance</div>
          <div>Reports</div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="rounded-full pl-3 w-60 2xl:w-[400px] h-5 2xl:h-7 2xl:mt-1 text-xs 2xl:text-sm mb-1.5"
          />
        </div>
      </div>
      <div className="flex items-center 2xl:text-sm text-xs gap-6 px-6">
        <div>Thu 18/08/2023</div>
        <div>15:000</div>
        <div className="border border-spacing-2 flex items-center gap-2 rounded-full py-0.5 px-2 border-[#2A56FE] text-[#2A56FE]">
          Create <IoIosArrowDown />
        </div>
        <div>Operator Name</div>
        <div className="flex gap-5 2xl:text-lg items-center">
          <ImDrawer2 />
          <IoMdSettings />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
