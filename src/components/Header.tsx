"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GiButterflyFlower } from "react-icons/gi";
import { BiMenu } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { CgClose } from "react-icons/cg";

const menu = [
  { id: 1, title: "home", ref: "/" },
  { id: 2, title: "about", ref: "/" },
  { id: 3, title: "skills", ref: "/" },
  { id: 4, title: "experience", ref: "/" },
  { id: 5, title: "gallery", ref: "/" },
  { id: 6, title: "contact", ref: "/" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div className="font-title border-b border-[#8080804e]">
      <div className="font-secondary  text-main lg:px-12 lg:py-6 p-4 pb-1 flex justify-between items-center">
        <Link href="/" className="flex text-2xl lg:text-4xl items-start">
          A
          <GiButterflyFlower className="text-primary lg:text-3xl lg:-ml-0.5" />
        </Link>
        <div className="lg:flex gap-3 hidden lg:text-lg">
          {menu.map((item) => (
            <div key={item.id}>
              <Link
                href={item.ref}
                className="capitalize tracking-wide p-1.5 nav-item"
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-main text-2xl"
        >
          {!isOpen ? <BiMenu /> : <CgClose className="text-xl" />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid gap-3 lg:hidden lg:text-lg px-2 items-center justify-center text-center pb-4"
          >
            {menu.map((item) => (
              <div key={item.id}>
                <Link
                  href={item.ref}
                  className="capitalize tracking-wide p-1.5 nav-item"
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
