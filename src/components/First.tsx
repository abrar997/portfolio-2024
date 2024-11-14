import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiDownload } from "react-icons/bi";

export default function First() {
  const [showFirst, setShowFirst] = useState(true);
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

  useEffect(() => {
    const timer = setTimeout(() => setShowFirst(false), 4000);
    const returnTimer = setTimeout(() => setShowFirst(true), 10000);
    return () => {
      clearTimeout(timer);
      clearTimeout(returnTimer);
    };
  }, []);

  return (
    <div
      id="/"
      className="flex flex-col lg:items-center lg:text-center lg:gap-4 gap-1 justify-center text-main lg:h-[450px] pt-6 lg:py-0"
    >
      <h2 className="lg:text-2xl text-lg font-main font-primary">
        Hello I&#39;m,
      </h2>
      <div className="font-main font-primary text-primary overflow-hidden">
        <AnimatePresence mode="wait">
          {showFirst ? (
            <motion.p
              key={texts[0].id}
              initial={{ y: "-200px" }}
              animate={{ y: 0 }}
              // exit={{ y: "200px" }}
              className="text-[28px] lg:text-6xl font-bold font-main font-secondary text-primary flex overflow-hidden col-span-5"
            >
              {SplitText(texts[0].text).map((item, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "-200px" }}
                  animate={{ y: 0 }}
                  exit={{ y: "200px" }}
                  transition={{ duration: 0.7, delay: i / 10.5 }}
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
              className="text-[28px] lg:text-6xl font-bold font-main font-secondary text-primary flex overflow-hidden col-span-5"
            >
              {SplitText(texts[1].text).map((item, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "-200px" }}
                  animate={{ y: 0 }}
                  exit={{ y: "200px" }}
                  transition={{ duration: 0.7, delay: i / 10.5 }}
                >
                  {item === " " ? "\u00A0" : item}
                </motion.span>
              ))}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <p className="text-gray-400 leading-6 lg:text-[16px] text-sm lg:w-[60%]">
        I am a passionate and detail-oriented Frontend Developer with a strong
        foundation in web technologies like HTML, CSS, and JavaScript. With 1
        year and 6 months of experience at Techboom and over three years as a
        self-taught developer and freelancer, I specialize in building
        responsive, user-centered websites and applications using modern
        frameworks such as React.js and Next.js. My focus is on creating
        seamless, intuitive user experiences that meet the needs of both clients
        and end users.
      </p>
      <div className="flex gap-2 mt-4 lg:text-lg">
        <a
          href="mailto:abraralrawi997@gmail.com"
          className="border hover:bg-opacity-75 text-[16px] hover:bg-primary hover:text-black text-text bg-main border-primary rounded px-3 py-1 hover:border-none"
        >
          Let&#39;s talk
        </a>

        <a
          href="/files/resume.pdf"
          download="Abrar Muthana Resume"
          className="border flex items-center gap-1 text-[16px] hover:bg-opacity-75 hover:bg-primary hover:text-black text-text bg-main border-primary rounded px-3 py-1 hover:border-none"
        >
          Resume <BiDownload />
        </a>
      </div>
    </div>
  );
}
