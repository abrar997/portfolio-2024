"use client";
import React from "react";
import Title from "./reusable/Title";
import { BsDot } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { LiaAmericanSignLanguageInterpretingSolid } from "react-icons/lia";
import { TbToolsOff } from "react-icons/tb";
import { motion } from "framer-motion";

interface SkillsProps {
  frontend: { id: number; name: string }[];
  language: { id: number; name: string }[];
  tools: { id: number; name: string }[];
}
export default function Skills({ frontend, language, tools }: SkillsProps) {
  const ulProps = "gap-1 grid";
  const liProps = "flex gap-1 items-center";

  return (
    <div className="lg:bg-[#222222] lg:mx-2 grid gap-3 lg:gap-12 rounded lg:shadow-lg lg:py-12 lg:px-40 overflow-hidden">
      <Title subtitle="what skills i have" title="Skills" />
      <div className="grid lg:grid-cols-3 gap-4 lg:gap-12 lg:items-start overflow-hidden text-text">
        <motion.div
          initial={{ x: 30 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid text-center"
        >
          <TitleSkill
            icon={<CgWebsite className="text-primary text-sm lg:text-lg" />}
            text="Frontend Development"
          />
          <div className="border py-2 rounded-tl-none border-t-0 rounded-xl border-gray-500">
            <ul className={ulProps}>
              {frontend.map((item) => (
                <li key={item.id} className={liProps}>
                  <BsDot /> {item.name}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-2"
        >
          <TitleSkill
            icon={
              <LiaAmericanSignLanguageInterpretingSolid className="text-primary text-2xl" />
            }
            text="Programming Languages"
          />
          <div className="border rounded-tl-none py-2 lg:min-h-[230px] border-t-0 rounded-xl border-gray-500">
            <ul className={ulProps}>
              {language.map((item) => (
                <li key={item.id} className={liProps}>
                  <BsDot /> {item.name}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-2"
        >
          <TitleSkill
            icon={<TbToolsOff className="text-primary text-sm lg:text-lg" />}
            text="Tools"
          />
          <div className="border rounded-tl-none py-2 lg:min-h-[230px] border-t-0 rounded-xl border-gray-500">
            <ul className={ulProps}>
              {tools.map((item) => (
                <li key={item.id} className={liProps}>
                  <BsDot /> {item.name}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const TitleSkill = ({ text, icon }: { text: string; icon: any }) => {
  return (
    <div>
      <h1 className="text-xl flex gap-2 items-center border-gray-600 font-primary">
        {icon}
        {text}
      </h1>
    </div>
  );
};
