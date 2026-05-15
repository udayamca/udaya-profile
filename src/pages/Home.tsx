import Section from "../components/Sections";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-black dark:text-white text-sm ml-2 mb-10">
      <Section title="" subTitle="">
        <div className="text-white text-xs sm:text-sm bg-slate-200 bg-slate-800 border-l-2 border-blue-400 p-2 mt-1 inline-block">
          Available for opportunities · Fremont, CA
        </div>
        <div className="flex pt-4 items-center">
          <div className="mt-2 mr-4">
            <img
              className="rounded-full border-blue-400 border-1 w-30 sm:w-40"
              src="/src/assets/udaya.jpg"
            />
          </div>
          <div className="item-center">
            <h1 className="text-2xl sm:text-5xl text-blue-500 dark:text-blue-400  ">
              Udaya Chandar
            </h1>
            <p className="text-lg sm:text-2xl mt-1 sm:mt-2 ">
              Staff Frontend Engineer
            </p>
          </div>
        </div>
        <p className="mt-2 sm:mt-4 sm:w-2/3 ">
          15+ years of experience designing, scaling, and modernizing high-traﬃc
          eCommerce plaforms. Deep expertise in React, TypeScript, JavaScript,
          Node.js, REST API, GraphQL and component-driven architecture, with a
          strong track record of leading UI modernization initiatives, improving
          Core Web Vitals, and delivering revenue-impacting features in global
          production environments. Experienced in CI/CD, performance
          optimization, accessibility (WCAG), and scalable system design. Proven
          ability to improve engineering productivity by implementation
          AI-assisted development workflows, including Jira automation with
          Claude (via Obsidian) to generate React components from Git issues,
          and integrating Lighthouse performance audits into PR pipelines to
          automatically monitor and optimize web performance before deployment.
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
            <span className="text-2xl sm:text-4xl text-blue-500 dark:text-blue-400 ">
              15+
            </span>
            <span className="text-xs sm:text-sm">Years Experience</span>
          </div>
          <div className="grid">
            <span className="text-2xl sm:text-4xl text-blue-500 dark:text-blue-400 ">
              $54M
            </span>
            <span className="text-xs sm:text-sm">GMV Uplift</span>
          </div>
          <div className="grid">
            <span className="text-2xl sm:text-4xl text-blue-500 dark:text-blue-400 ">
              12
            </span>
            <span className="text-xs sm:text-sm">Years at eBay</span>
          </div>
        </div>
      </Section>
    </div>
  );
}
