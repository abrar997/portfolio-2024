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
  const DivProps =
    "border rounded p-4 lg:bg-transparent bg-main flex flex-col gap-1 h-full gap-3 border-gray-500 hover:shadow-xl transition-all duration-300";
  const ulProps = "gap-1 grid";
  const liProps = "flex gap-1 items-center";

  return (
    <div className="lg:bg-main grid gap-3 lg:gap-6 rounded lg:shadow-lg lg:p-4 py-8 lg:px-40 overflow-hidden">
      <Title subtitle="what skills i have" title="Skills" />
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 lg:items-start overflow-hidden text-text">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className={DivProps}
        >
          <TitleSkill
            icon={<CgWebsite className="text-primary text-sm lg:text-lg" />}
            text="Frontend Development"
          />
          <ul className={ulProps}>
            {frontend.map((item) => (
              <li key={item.id} className={liProps}>
                <BsDot /> {item.name}
              </li>
            ))}
          </ul>
        </motion.div>
        <div className="grid grid-rows-2 gap-4">
          <motion.div
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className={DivProps}
          >
            <TitleSkill
              icon={
                <LiaAmericanSignLanguageInterpretingSolid className="text-primary text-2xl" />
              }
              text="Programming Languages"
            />
            <ul className={ulProps}>
              {language.map((item) => (
                <li key={item.id} className={liProps}>
                  <BsDot /> {item.name}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className={DivProps}
          >
            <TitleSkill
              icon={<TbToolsOff className="text-primary text-sm lg:text-lg" />}
              text="Tools"
            />
            <ul className={ulProps}>
              {tools.map((item) => (
                <li key={item.id} className={liProps}>
                  <BsDot /> {item.name}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const TitleSkill = ({ text, icon }: { text: string; icon: any }) => {
  return (
    <div>
      <h1 className="text-xl border-b flex lg:pb-2 pb-1 gap-2 items-center border-gray-600 font-primary">
        {icon}
        {text}
      </h1>
    </div>
  );
};
