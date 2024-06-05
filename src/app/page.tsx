import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import First from "@/components/First";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <div className="bg-main h-screen text-main font-sans">
      <Header />
      <div
        style={{
          backgroundImage: "url('/assets/bg.png')",
          backgroundSize: "6px",
        }}
        className="lg:p-12 p-4"
      >
        <First />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
