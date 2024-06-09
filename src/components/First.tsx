"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiDownload } from "react-icons/bi";

export default function First() {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowFirst(false), 3000);
    const returnTimer = setTimeout(() => setShowFirst(true), 9000);
    return () => {
      clearTimeout(timer);
      clearTimeout(returnTimer);
    };
  }, []);

  const texts = [
    { id: 1, text: "Abrar Muthana Rakea" },
    { id: 2, text: "Frontend Web Developer" },
  ];

  const SplitText = (text: string) =>
    text
      .split(" ")
      .flatMap((word, index, array) =>
        index < array.length - 1 ? [...word.split(""), " "] : word.split("")
      );

  return (
    <div className="flex flex-col lg:items-center lg:text-center lg:gap-1 gap-1 justify-center text-main lg:h-[400px] pt-6 lg:py-0">
      <h2 className="lg:text-2xl text-lg font-main font-title">
        Hello I&#39;m,
      </h2>
      <div className="font-main font-title text-primary overflow-hidden">
        <AnimatePresence mode="wait">
          {showFirst ? (
            <motion.p
              key={texts[0].id}
              initial={{ y: "-200px" }}
              animate={{ y: 0 }}
              exit={{ y: "200px" }}
              className="text-3xl lg:text-6xl font-bold font-main font-secondary text-primary flex overflow-hidden col-span-5"
            >
              {SplitText(texts[0].text).map((item, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "-200px" }}
                  animate={{ y: 0 }}
                  exit={{ y: "200px" }}
                  transition={{ duration: 0.5, delay: i / 10 }}
                >
                  {item === " " ? "\u00A0" : item}
                </motion.span>
              ))}
            </motion.p>
          ) : (
            <motion.p
              key={texts[1].id}
              initial={{ y: "-200px" }}
              animate={{ y: 0 }}
              exit={{ y: "200px" }}
              className="text-3xl lg:text-6xl font-bold font-main font-secondary text-primary flex overflow-hidden col-span-5"
            >
              {SplitText(texts[1].text).map((item, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "-200px" }}
                  animate={{ y: 0 }}
                  exit={{ y: "200px" }}
                  transition={{ duration: 0.5, delay: i / 10 }}
                >
                  {item === " " ? "\u00A0" : item}
                </motion.span>
              ))}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <p className="text-text lg:text-[16px] text-sm lg:w-[60%]">
        I have experience over 2 years and i specialize in HTML, CSS, and
        JavaScript, I&#39;m proficient with frameworks like React with
        typescript and JavaScript. My focus is on building user-friendly,
        accessible, and visually appealing websites.
      </p>
      <div className="flex gap-2 mt-4 lg:text-lg">
        <button className="border hover:bg-opacity-75 text-[16px] transition-all duration-300 hover:bg-primary hover:text-black text-text bg-main border-primary rounded px-3 py-1">
          Let&#39;s talk
        </button>

        <button className="border flex items-center gap-1 text-[16px] hover:bg-opacity-75 transition-all duration-300 hover:bg-primary hover:text-black text-text bg-main border-primary rounded px-3 py-1">
          Resume <BiDownload />
        </button>
      </div>
    </div>
  );
}
