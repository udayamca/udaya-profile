import Section from "../components/Sections";

export default function About() {
  return (
    <div className="text-white text-sm ml-2 mb-10">
      <Section title="About Me" subTitle="/ / BACKGROUND">
        <div className="grid gap-8">
          <div className="grid  border-l-2 border-blue-400 p-4 mt-8 sm:w-3/4">
            <div className="text-md text-blue-400">BIO</div>
            <div className="text-sm mt-4">
              <div className="mb-4">
                I’m a Frontend Developer with over 15 years of experience
                building scalable and high-performance web applications. My core
                expertise is in React and TypeScript, along with strong
                fundamentals in JavaScript, Node.js, REST api, GraphQL, HTML,
                and CSS.
              </div>
              <div className="mb-4">
                In the past two years, I have been working on a large-scale
                modernization project, migrating critical transaction pages—such
                as bid and offer flows—from Marko, eBay’s server-side rendering
                framework, to React with TypeScript. This work focused on
                improving performance, maintainability, and developer
                experience.
              </div>
              <div className="mb-4">
                One of my key contributions was delivering a price transparency
                feature for the EU market, which resulted in a $54M GMV uplift.
                I also introduced Lighthouse CI into the PR pipeline, enabling
                performance checks at the pull request level and helping prevent
                performance regressions before they reach production.
              </div>
              <div className="mb-4">
                I also implemented AI-assisted development workflows, including
                Jira automation with Claude, to generate React components
                directly from Git issues. This significantly streamlined the
                development process and reduced manual effort for engineers. I’m
                particularly proud of driving initiatives that improved both
                platform scalability and engineering efficiency.
              </div>
              <div className="mb-4">
                I'm particularly passionate about building efficient,
                maintainable frontend systems and understanding how frameworks
                work under the hood. I focus on writing clean, simple, and
                readable code so that other engineers can easily collaborate and
                build on top of it.
              </div>
              <div className="mb-4">
                I’d describe my biggest strengths as my deep technical
                understanding and my collaborative, approachable nature. I enjoy
                working in teams that value high performance, ownership, and
                continuous improvement.
              </div>
              <div className="">
                Currently, I am looking for an opportunity where I can
                contribute to impactful products, add value to the development
                process, and be part of a strong engineering culture.
              </div>
            </div>
          </div>
          <div className="grid  border-l-2 border-blue-400 p-4 ">
            <div className="text-md text-blue-400">
              COURSES & CERTIFICATIONS (GeneraEve AI)
            </div>
            <div className="text-sm ">
              <div className="mt-4">
                <div className="text-md">
                  ChatGPT Prompt Engineering for Developers
                  <a
                    href="https://learn.deeplearning.ai/accomplishments/e7a3e91a-d442-4515-8f65-5f48680e0fbd"
                    className="bg-slate-800 p-2 ml-4 rounded text-white hover:text-blue-500 text-sm hover:text-base border border-slate-700 hover:border-blue-500 pointer-events-auto hover:scale-105 transition-all duration-500 "
                  >
                    Credential
                  </a>
                </div>
                <div className="text-sm text-gray-400">DeepLearning.AI</div>
              </div>
              <div className="mt-4 ">
                <div className="text-md">
                  {" "}
                  Claude Code in Action
                  <a
                    href="https://verify.skilljar.com/c/cadnmdxp67st"
                    className="bg-slate-800 p-2 ml-4 rounded text-white hover:text-blue-500 text-sm hover:text-base border border-slate-700 hover:border-blue-500 pointer-events-auto hover:scale-105 transition-all duration-500 "
                  >
                    Credential
                  </a>
                </div>
                <div className="text-sm text-gray-400">ANTHROPIC</div>
              </div>
            </div>
          </div>
          <div className="grid  border-l-2 border-blue-400 p-4">
            <div className="text-md text-blue-400">EDUCATION</div>
            <div className="text-sm ">
              <div className="mt-4">
                <div className="text-md">Master of Computer Applications</div>
                <div className="text-sm text-gray-400">
                  University of Madras - 2005
                </div>
              </div>
              <div className="mt-4 ">
                <div className="text-md">Bachelor of Science — Mathematics</div>
                <div className="text-sm text-gray-400">
                  New College, Chennai - 2001
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
