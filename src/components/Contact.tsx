import React from "react";
import Title from "./reusable/Title";

const social = [
  { id: 1, title: "", url: "", text: "" },
  { id: 1, title: "", url: "", text: "" },
  { id: 1, title: "", url: "", text: "" },
  { id: 1, title: "", url: "", text: "" },
];

export default function Contact() {
  return (
    <div className="grid gap-3 lg:gap-6">
      <Title subtitle="send us a message" title="Contact us" />
      <div className="grid grid-cols-2 lg:gap-12 gap-3">
        <h1></h1>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
