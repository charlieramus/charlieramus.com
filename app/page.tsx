import Sidebar from "@/components/sidebar";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Stories from "@/components/stories";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Sidebar />
      <main className="md:ml-70 xl:ml-[35%] pt-14 md:pt-0">
        <About />
        <div className="h-px bg-rule mx-10 md:mx-16" />
        <Experience />
        <div className="h-px bg-rule mx-10 md:mx-16" />
        <Projects />
        <div className="h-px bg-rule mx-10 md:mx-16" />
        <Stories />
      </main>
    </div>
  );
}
