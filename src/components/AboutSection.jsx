import SectionHeading from "./SectionHeading";
import Fact from "./Fact";

function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="About" subtitle="A little about who I am." />
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I grew up in Cebu City, Philippines, and I am currently a third-year student pursuing a Bachelor of Science in Information Technology at the Cebu Institute of Technology. I have a strong passion for technology and enjoy exploring new tools and frameworks to enhance my skills. In my free time, I like to work on personal projects and contribute to open-source communities.
      </p>
      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <Fact label="Course" value="Bachelor of Science in Information Technology" />
        <Fact label="Year level" value="Third Year" />
        <Fact label="School" value="Cebu Institute of Technology" />
        <Fact label="Based in" value="Cebu City" />
      </dl>
    </section>
  );
}

export default AboutSection;
