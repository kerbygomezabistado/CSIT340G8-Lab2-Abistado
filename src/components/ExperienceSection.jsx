import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";

function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2024 – Present"
          title="Bachelor of Science in Information Technology"
          place="CIT-U"
          description="Studying information technology with a focus on software development and systems analysis."
        />
        <TimelineItem
          period="2022 – 2024"
          title="Senior High School"
          place="ACT - Bulacao Campus"
          description="Completed senior high school with a focus on TVL-ICT subjects."
        />
        <TimelineItem
          period="2018 – 2022"
          title="Junior High School"
          place="Pardo National High School"
          description="Completed junior high school with a focus on general education."
        />
      </ol>
    </section>
  );
}

export default ExperienceSection;
