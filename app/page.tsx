import Sidebar from "@/components/sidebar";
import About from "@/components/about";
import Projects from "@/components/projects";
import Stories from "@/components/stories";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Sidebar />
      <main className="md:ml-[280px] pt-14 md:pt-0">
        <About />
        <div className="h-px bg-a1" />
        <Projects />
        <div className="h-px bg-a2" />
        <Stories />
      </main>
    </div>
  );
}
