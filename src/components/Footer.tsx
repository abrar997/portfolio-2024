import React from "react";
import { BsGithub, BsHeartFill, BsTelephone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="bg-[#222222] lg:p-12 grid lg:items-center p-4 lg:justify-center gap-2">
      <h1 className="flex gap-2 items-center font-primary">
        This Portfolio made with
        <BsHeartFill className="text-primary" />
      </h1>
      <div className="flex gap-4 text-gray-200 lg:items-center lg:justify-center">
        <a href="" className="border rounded-full p-1 hover:border-primary">
          <MdEmail size={18} />
        </a>
        <a href="" className="border rounded-full p-1 hover:border-primary">
          <BsGithub />
        </a>
        <a href="" className="border rounded-full p-1 hover:border-primary">
          <BsTelephone />
        </a>
      </div>
    </div>
  );
}
