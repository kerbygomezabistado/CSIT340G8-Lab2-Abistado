import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2025"
          title="The Next Step"
          description="A puzzled game that challenges players to navigate through a series of obstacles and reach the next level."
          tech="JavaScript"
          link="https://github.com/kerbygomezabistado/The-Next-Step"
        />
        <ProjectCard
          year="2026"
          title="CSIT340G8-Lab3-Abistado"
          description="A web application that showcases my skills and projects, built using React and Tailwind CSS."
          tech="JavaScript · CSS · HTML"
          link="https://github.com/kerbygomezabistado/CSIT340G8-Lab3-Abistado/commits/main/"
        />
        <ProjectCard
          year="2026"
          title="CSIT340-Lab1-Abistado"
          description="A simple web application that demonstrates basic HTML, CSS, and JavaScript concepts."
          tech="JavaScript · CSS · HTML"
          link="https://github.com/kerbygomezabistado/CSIT340-Lab1-Abistado"
        />
        <ProjectCard
          year="2025"
          title="Array Quiz 1"
          description="A simple quiz application to test knowledge of array operations in JavaScript."
          tech="C++"
          link="https://github.com/kerbygomezabistado/Array_Quiz_1"
        />
      </div>
    </section>
  );
}

export default ProjectsSection;
