import Link from "next/link";
import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import { navItems } from "./DATA";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  return (
    <nav className="bg-white py-6 px-6 lg:px-24 flex justify-between items-center ">
      {/* <div className="flex items-center bg-red-400 justify-center"> */}
      <img src="/images/logo.png" alt="Logo" className="h-[100px]" />
      {/* </div> */}
      <div className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.url}
            className="text-gray-600 hover:text-gray-900 font-bold"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <button className="hidden md:block bg-[#4FB8B5] text-white px-6 py-2 rounded-full text-sm">
        Contact
      </button>
      <div className="md:hidden">
        <MobileNavbar />
      </div>
    </nav>
  );
}

export default Navbar;
