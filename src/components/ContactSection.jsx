import SectionHeading from "./SectionHeading";
import ContactLink from "./ContactLink";

function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink label="Email" href="kerbygomezabistado@gmail.com" text="kerbygomezabistado@gmail.com" />
        <ContactLink label="GitHub" href="https://github.com/kerbygomezabistado" text="github.com/kerbygomezabistado" />
        <ContactLink label="LinkedIn" href="https://linkedin.com/in/kerbygomezabistado" text="linkedin.com/in/kerbygomezabistado" />
      </ul>
    </section>
  );
}

export default ContactSection;
