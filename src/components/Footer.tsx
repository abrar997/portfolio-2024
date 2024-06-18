import React from "react";
import { BsGithub, BsTelephone } from "react-icons/bs";
import { HiHeart } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="bg-[#222222] lg:p-12 p-4 py- lg:gap-5 gap-3 grid">
      <div className="text-sm lg:text-lg lg:text-center lg:justify-center grid lg:items-center">
        <p className="lg:text-center font-primary -ml-1 lg:ml-0">
          @ 2024 Abrar Muthana R.
        </p>
        <p className="flex gap-1 lg:items-center lg:justify-center lg:text-center font-primary text-gray-400">
          made with
          <HiHeart size={20} className="text-primary" />
        </p>
      </div>
      <div className="flex gap-4 text-gray-200 items-center lg:justify-center">
        <a
          href="mailto:abraralrawi997@gmail.com"
          className="border rounded-full p-1 hover:border-primary"
        >
          <MdEmail size={18} />
        </a>
        <a
          href={`https://api.whatsapp.com/send?phone=9647831190254`}
          className="border rounded-full p-1 hover:border-primary"
        >
          <BsTelephone size={16} />
        </a>
        <a
          href="https://github.com/abrar997"
          className="border rounded-full p-1 hover:border-primary"
        >
          <BsGithub size={18} />
        </a>
      </div>
    </div>
  );
}
