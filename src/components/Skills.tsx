import React from "react";
import Title from "./reusable/Title";
import { GiButterflyFlower } from "react-icons/gi";
import { BsDot } from "react-icons/bs";
interface SkillsProps {
  frontend: { id: number; name: string }[];
  language: { id: number; name: string }[];
  tools: { id: number; name: string }[];
}
export default function Skills({ frontend, language, tools }: SkillsProps) {
  return (
    <div className="bg-[#2d2d2d] grid gap-3 lg:gap-6 rounded p-4 lg:py-8 lg:px-40">
      <Title subtitle="what skills i have" title="Skills" />
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 lg:items-start">
        <div className="border rounded p-4 bg-main flex flex-col gap-1 h-full border-gray-500 hover:shadow-xl transition-all duration-300">
          <h1 className="text-xl border-b flex lg:pb-2 pb-1 gap-1 border-gray-600 font-primary">
            Frontend Development
            <GiButterflyFlower className="text-primary" />
          </h1>
          <ul>
            {frontend.map((item) => (
              <li key={item.id} className="flex gap-1 items-center">
                <BsDot /> {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="border rounded p-4 bg-main flex flex-col gap-1 h-full border-gray-500 hover:shadow-xl transition-all duration-300">
            <h1 className="text-xl border-b flex lg:pb-2 pb-1 gap-1 border-gray-600 font-primary">
              Programming Languages
              <GiButterflyFlower className="text-primary" />
            </h1>
            <ul>
              {language.map((item) => (
                <li key={item.id} className="flex gap-1 items-center">
                  <BsDot /> {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="border rounded p-4 bg-main flex flex-col gap-1 h-full border-gray-500 hover:shadow-xl transition-all duration-300">
            <h1 className="text-xl border-b flex lg:pb-2 pb-1 gap-1 border-gray-600 font-primary">
              Tools
              <GiButterflyFlower className="text-primary" />
            </h1>
            <ul>
              {tools.map((item) => (
                <li key={item.id} className="flex gap-1 items-center">
                  <BsDot /> {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
