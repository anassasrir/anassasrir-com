import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { ExperienceSkills } from "@/components/ExperienceSkills";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <Projects />
        <ExperienceSkills />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
