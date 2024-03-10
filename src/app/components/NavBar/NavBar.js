import Image from "next/image";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  return (
    <>
      <div className="nav bg-white w-full h-[60px] flex items-center justify-between px-6 text-sm font-semibold">
        <Image
          width={120}
          height={120}
          src="/logo.png"
          className="w-[120px]"
          alt=""
        />

        <div className="flex items-center gap-6 md:hidden">
          {["Crypto Taxes", "Free Tools", "Resource Center"].map((link, id) => (
            <a href="" key={id}>
              {link}
            </a>
          ))}
          <button className="p-2 text-white rounded-md px-4 bg-gradient-to-tr from-[#1c4bef] to-[#276cea]">
            Get Started
          </button>
        </div>

        <GiHamburgerMenu className="hidden md:block" size={20} />
      </div>
    </>
  );
}

export default NavBar;
