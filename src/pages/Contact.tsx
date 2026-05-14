import Section from "../components/Sections";

export default function Contact() {
  return (
    <div className="text-white text-sm ml-2 mb-10">
      <Section title="Get in Touch" subTitle="/ / CONNECT">
        <div className="mt-8 mb-4 gap-4 grid sm:flex">
          <a
            href="mailto:udayamca@gmail.com"
            className="bg-slate-800 p-3 rounded text-white hover:text-blue-500 text-sm hover:text-base border border-slate-700 hover:border-blue-500 pointer-events-auto hover:scale-105 transition-all duration-500  "
          >
            <span className="pr-2 text-blue-500 dark:text-blue-400 ">@</span>
            udayamca@gmail.com
          </a>
          <a
            href="tel:4087593414"
            className="bg-slate-800 p-3 rounded text-white hover:text-blue-500 text-sm hover:text-base border border-slate-700 hover:border-blue-500 pointer-events-auto hover:scale-105 transition-all duration-500  "
          >
            <span className="pr-2 text-blue-500 dark:text-blue-400 ">#</span>
            408-759-3414
          </a>
          <a
            href="https://www.linkedin.com/in/udayamca/"
            target="_blank"
            className="bg-slate-800 p-3 rounded text-white hover:text-blue-500 text-sm hover:text-base border border-slate-700 hover:border-blue-500 pointer-events-auto hover:scale-105 transition-all duration-500  "
          >
            <span className="pr-2 text-blue-500 dark:text-blue-400 ">in</span>
            LinkedIn Profile
          </a>
          <a
            href="https://github.com/udayamca/"
            target="_blank"
            className="mb-4 bg-slate-800 p-3 rounded text-white hover:text-blue-500 text-sm hover:text-base border border-slate-700 hover:border-blue-500 pointer-events-auto hover:scale-105 transition-all duration-500  "
          >
            <span className="pr-2 text-blue-500 dark:text-blue-400 ">git</span>
            Git Link
          </a>
        </div>
      </Section>
    </div>
  );
}
