import React from "react";
import Title from "./reusable/Title";

const social = [
  { id: 1, title: "Email", url: "", text: "abraralrawi997@gmail.com" },
  { id: 2, title: "Phone", url: "", text: "+9647831190254" },
  { id: 3, title: "Github", url: "", text: "Abrar Muthana" },
];

export default function Contact() {
  return (
    <div className="grid gap-3 lg:gap-12">
      <Title subtitle="send us a message" title="Contact us" />
      <div className="grid lg:grid-cols-2 lg:gap-12 gap-3">
        <div className="grid lg:gap-8">
          <h1 className="text-text">
            Thank you for visiting my portfolio! If you have any questions,
            project inquiries, or just want to say hello, feel free to reach
            out. I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </h1>
          <div className="grid gap-2 text-sm">
            {social.map((item) => (
              <li key={item.id} className="grid">
                <a href={item.url} className="flex gap-1">
                  <span className="text-primary">{item.title}</span>
                  <span>:</span>
                  <span>{item.text}</span>
                </a>
              </li>
            ))}
          </div>
        </div>
        <form
          action=""
          className="border p-4 bg-main shadow rounded border-gray-500"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              className="bg-transparent p-1 placeholder:text-gray-600 text-sm rounded border-b border-gray-600 focus-within:outline-none"
              placeholder="Abrar Muthana"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
