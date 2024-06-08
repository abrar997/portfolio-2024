import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import First from "@/components/First";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const SkillsData = {
  FrontEnd: [
    { id: 1, name: "React JS" },
    { id: 4, name: "Tailwind css" },
    { id: 5, name: "Bootstrap" },
    { id: 6, name: "Framer motion" },
    { id: 7, name: "Headless UI" },
    { id: 8, name: "Swiper JS" },
    { id: 9, name: "React Hook Form" },
    { id: 10, name: "clsx" },
  ],
  language: [
    { id: 1, name: "Typescript" },
    { id: 2, name: "Java script" },
    { id: 3, name: "HTML" },
    { id: 4, name: "CSS" },
  ],
  Tools: [
    { id: 1, name: "Github" },
    { id: 2, name: "Bitbucket" },
    { id: 3, name: "Jira" },
    { id: 4, name: "Netlify" },
    { id: 5, name: "Vercel" },
  ],
};

const experienceData = [
  {
    id: 1,
    for: "Plly",
    city: "Manila",
    job: "Frontend",
    type: "remotely",
    date: "2022-Aug / 2023-Nov",
    responsibilities: [
      {
        id: 1,
        item: "Developed a dynamic website builder's front-end using React.js, focusing on responsiveness and user-friendliness.",
      },
      {
        id: 2,
        item: "Create components to different categories.",
      },
      { id: 3, item: "Design templates by using components." },
      {
        id: 4,
        item: "Design 3d components by using 3d models and fix it by blinder app then develop it.",
      },
    ],
    skillsUsed:
      "React js , tailwind css , framer motion , headless UI , Babylon js , Next js, Figma ,Swiper JS, clsx , react-hook-form , css , Blind",
  },
  {
    id: 2,
    for: "Techboom",
    city: "Manila",
    job: "Frontend",
    type: "remotely",
    date: "2022-Aug / 2023-Nov",
    responsibilities: [
      {
        id: 1,
        item: "Developed a dynamic website builder's front-end using React.js, focusing on responsiveness and user-friendliness.",
      },
      {
        id: 2,
        item: "Update editor page , components and develop templates as websites",
      },
    ],
    skillsUsed:
      "React js , tailwind css , framer motion , headless UI , react-hook-form , css",
  },
  {
    id: 3,
    for: "Accommodation Network",
    city: "New York",
    job: "Frontend",
    type: "remotely",
    date: "2022-Aug / 2023-Nov",
    link: "https://www.accommodation.network/",
    responsibilities: [
      {
        id: 1,
        item: "Frontend developer for this website  ",
      },
      {
        id: 2,
        item: "update UI design and check it with customer",
      },
    ],
    skillsUsed:
      "Next JS , framer motion ,react icons , react scroll , react-spinners",
  },
];

export default function Home() {
  return (
    <div className="bg-main text-main font-sans">
      <Header />
      <div
        style={{
          backgroundImage: "url('/assets/bg.png')",
          backgroundSize: "6px",
        }}
        className="lg:p-12 grid lg:gap-20 gap-6 p-4"
      >
        <First />
        <Skills
          frontend={SkillsData.FrontEnd}
          tools={SkillsData.Tools}
          language={SkillsData.language}
        />
        <Experience data={experienceData} />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
