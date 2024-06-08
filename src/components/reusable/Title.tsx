"use client";
import React from "react";
import { GiButterflyFlower } from "react-icons/gi";
import { motion } from "framer-motion";

interface TextProps {
  subtitle?: string;
  title?: string;
}

export default function Title({ title, subtitle }: TextProps) {
  return (
    <motion.div
      initial={{ y: -40 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      className="grid lg:items-center lg:justify-center lg:text-center gap-1"
    >
      <h1 className="lg:text-4xl text-3xl flex text-primary font-semibold font-primary gap-1 lg:justify-center">
        {title}
        <GiButterflyFlower className="lg:text-xl lg:-ml-0.5" />
      </h1>
      <h3 className="text-text text-sm">{subtitle} .</h3>
    </motion.div>
  );
}
