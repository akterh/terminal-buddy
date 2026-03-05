import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Expertise } from "@/components/Expertise";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";








/// The main page of the portfolio, which includes all the sections: Hero, Expertise, Tech Stack, Projects, Experience, and Contact.
var index = 0;

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <section id="expertise">
        <Expertise />
      </section>
      <section id="tech">
        <TechStack />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Index;
