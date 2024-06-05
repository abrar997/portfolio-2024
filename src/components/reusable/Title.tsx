import React from "react";
import { GiButterflyFlower } from "react-icons/gi";

interface TextProps {
  subtitle?: string;
  title?: string;
}

export default function Title({ title, subtitle }: TextProps) {
  return (
    <div className="grid items-center justify-center text-center">
      <h3 className="text-gray-300">{subtitle}</h3>
      <h1 className="lg:text-4xl text-2xl flex text-primary font-primary gap-1 justify-center">
        {title}
        <GiButterflyFlower className="lg:text-xl lg:-ml-0.5" />
      </h1>
    </div>
  );
}
