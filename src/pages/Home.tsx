import Section from "../components/Sections";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-white text-sm ml-2 mb-16">
      <Section title="" subTitle="">
        <div className="text-xs sm:text-sm bg-slate-800 border-l-2 border-blue-400 p-2 mt-1 inline-block">
          Available for opportunities · Fremont, CA
        </div>
        <h1 className="text-2xl sm:text-5xl mt-3 sm:mt-6 text-blue-400 ">
          Udaya Chandar
        </h1>
        <p className="text-lg sm:text-2xl mt-1 sm:mt-2 ">
          Staff Frontend Engineer
        </p>
        <p className="mt-2 sm:mt-4 sm:w-2/3 ">
          15+ years building scaling and high-traffic web applications for
          global platforms. Leading frontend modernization at eBay for millions
          of users worldwide. My core expertise is in React and TypeScript,
          along with strong fundamentals in JavaScript, Node.js, REST
          api,GraphQL, HTML, and CSS.
        </p>
        <div className="mt-4 mb-4 gap-4 grid sm:flex">
          <Link
            to="/experience"
            className="bg-slate-800 p-3 rounded text-white hover:text-blue-500 text-sm hover:text-base border border-slate-700 hover:border-blue-500 pointer-events-auto hover:scale-105 transition-all duration-500  "
          >
            View Experience
          </Link>
          <Link
            to="/contact"
            className="bg-slate-800 p-3 rounded text-white hover:text-blue-500 text-sm hover:text-base border border-slate-700 hover:border-blue-500 pointer-events-auto hover:scale-105 transition-all duration-500 "
          >
            Get in Touch
          </Link>
        </div>
        <div className="grid sm:flex gap-4 sm:gap-8">
          <div className="grid">
            <span className="text-2xl sm:text-4xl text-blue-400">15+</span>
            <span className="text-xs sm:text-sm">Years Experience</span>
          </div>
          <div className="grid">
            <span className="text-2xl sm:text-4xl text-blue-400">$54M</span>
            <span className="text-xs sm:text-sm">GMV Uplift</span>
          </div>
          <div className="grid">
            <span className="text-2xl sm:text-4xl text-blue-400">12</span>
            <span className="text-xs sm:text-sm">Years at eBay</span>
          </div>
        </div>
      </Section>
    </div>
  );
}
