"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GiButterflyFlower } from "react-icons/gi";
const menu = [
  { id: 1, title: "home", ref: "/" },
  { id: 1, title: "about", ref: "/" },
  { id: 1, title: "skills", ref: "/" },
  { id: 1, title: "experience", ref: "/" },
  { id: 1, title: "gallery", ref: "/" },
  { id: 1, title: "contact", ref: "/" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-main font-[Playfair] text-main border-b border-[#8080801e] lg:px-12 lg:py-6 p-4 flex justify-between items-center">
      <Link href="/" className="flex lg:text-4xl items-start">
        A <GiButterflyFlower className="text-primary text-3xl -ml-0.5" />
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
    </div>
  );
}
