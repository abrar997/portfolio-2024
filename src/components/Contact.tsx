import React from "react";
import Title from "./reusable/Title";
import { GiButterflyFlower } from "react-icons/gi";
import { BiRightArrow } from "react-icons/bi";

const social = [
  { id: 1, title: "Email", url: "", text: "abraralrawi997@gmail.com" },
  { id: 2, title: "Phone", url: "", text: "+9647831190254" },
  { id: 3, title: "Github", url: "", text: "Abrar Muthana" },
];

const inputs = [
  {
    id: 1,
    label: "first name",
    placeholder: "Abrar",
    type: "text",
    for: "first",
  },
  {
    id: 2,
    label: "last name",
    placeholder: "Muthana",
    type: "text",
    for: "last",
  },
  {
    id: 3,
    label: "Email",
    placeholder: "abraralrawi997@gmail.com",
    type: "email",
    for: "email",
  },
  {
    id: 4,
    label: "message",
    placeholder: "Hello Abrar '-' , ",
    type: "textarea",
    for: "message",
  },
];

export default function Contact() {
  return (
    <div id="contact" className="grid gap-3 lg:gap-12 lg:pb-16 pb-6">
      <Title subtitle="send us a message" title="Contact us" />
      <div className="grid lg:grid-cols-2 lg:gap-12 gap-3">
        <div className="grid lg:gap-8 lg:py-16">
          <h1 className="text-text flex gap-3">
            <span className="hidden lg:flex">
              <GiButterflyFlower className="lg:text-5xl text-primary" />
            </span>
            Thank you for visiting my portfolio! If you have any questions,
            project inquiries, or just want to say hello, feel free to reach
            out.I&#39;m always open to discussing new projects, creative ideas,
            or opportunities to be part of your vision.
          </h1>
          <div className="flex gap-3">
            <span className="hidden lg:flex">
              <GiButterflyFlower className="lg:text-5xl text-primary" />
            </span>
            <ul className="grid gap-2 text-sm">
              {social.map((item) => (
                <li key={item.id} className="grid">
                  <a href={item.url} className="flex gap-1">
                    <span className="text-text">{item.title}</span>
                    <span>:</span>
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {inputs && (
          <form
            action=""
            className="border lg:p-4 px-2 py-4 bg-main grid grid-cols-2 gap-5 shadow rounded border-gray-500"
          >
            {inputs.map((input) => (
              <div
                key={input.id}
                className={`flex flex-col gap-1 ${
                  input.type === "textarea" || input.type === "email"
                    ? "col-span-2"
                    : "lg:col-span-1 col-span-2"
                }`}
              >
                <label htmlFor={input.for} className="capitalize">
                  {input.label}
                </label>
                {input.type === "textarea" ? (
                  <textarea
                    placeholder={input.placeholder}
                    rows={3}
                    className="bg-transparent placeholder:text-[12px] p-2 placeholder:text-gray-600 text-sm rounded border border-gray-600 focus-within:outline-none"
                  />
                ) : (
                  <input
                    type={input.type}
                    className="bg-transparent placeholder:text-[12px] p-2 placeholder:text-gray-600 text-sm rounded border border-gray-600 focus-within:outline-none"
                    placeholder={input.placeholder}
                  />
                )}
              </div>
            ))}
            <button className="text-black bg-primary col-span-2 rounded px-4 py-2 ml-auto hover:bg-opacity-75 transition-all duration-300 flex items-center justify-center">
              <BiRightArrow />
              <span>
                <GiButterflyFlower className="lg:text-xl" />
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
