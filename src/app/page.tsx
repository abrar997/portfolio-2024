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

export default function Home() {
  return (
    <div className="bg-main text-main font-sans">
      <Header />
      <div
        style={{
          backgroundImage: "url('/assets/bg.png')",
          backgroundSize: "6px",
        }}
        className="lg:p-12 grid lg:gap-20 gap-12 p-4"
      >
        <First />
        <Skills
          frontend={SkillsData.FrontEnd}
          tools={SkillsData.Tools}
          language={SkillsData.language}
        />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
