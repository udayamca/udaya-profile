import Section from "../components/Sections";

export default function Experience() {
  return (
    <div className="text-back dark:text-white text-sm ml-2 mb-10">
      <Section title="Professional Experience" subTitle="/ / CAREER">
        <div className="grid gap-4 sm:gap-8">
          <div className="grid border-l-2 border-blue-400 p-4 mt-8 sm:w-3/4">
            <div className="text-xs text-gray-400 mb-4">
              2014 – Present · San Jose, CA
            </div>
            <div className="text-xl">Member of Technical Staff (Frontend)</div>
            <div className="text-sm text-blue-500 dark:text-blue-400  mb-4">
              eBay Inc.
            </div>
            <ul className="list-disc pl-4 x-1/2">
              <li className="mb-4">
                Led Transaction Modernization by migrating Place Bid and Review
                Bid flows from Marko to React + TypeScript, improving
                maintainability and reducing technical debt.
              </li>
              <li className="mb-4">
                Modernized legacy Raptor architecture to Node.js + Marko under
                View Item Modernization (VIM), significantly improving
                scalability and performance.
              </li>
              <li className="mb-4">
                Implemented Jira automation using Claude (via Obsidian) to
                generate React components directly from Git issues, improving
                development eﬃciency and task-to-code traceability
              </li>
              <li className="mb-4">
                Integrated Lighthouse performance audits into the PR pipeline,
                enabling automated page performance reports during pull requests
                to monitor and optimize web performance.
              </li>
              <li className="mb-4">
                Delivered Price Transparency and Digital Services Act (DSA)
                Compliance features for EU markets, driving $54M GMV uplin.
              </li>
              <li className="mb-4">
                Implemented advanced performance optimization techniques
                including lazy loading and caching to improve page load times,
                responsiveness, and Core Web Vitals across major product
                surfaces.
              </li>
              <li className="mb-4">
                Designed and standardized reusable UI component libraries
                adopted across multiple engineering teams, accelerating feature
                delivery.
              </li>
              <li className="mb-4">
                Refactored Global Header and Footer frameworks into scalable,
                high-performance components supporting millions of daily users.
              </li>
              <li className="mb-4">
                Developed revenue-impacting features including Loyalty, Coupons,
                Volume Pricing, Urgency Banner, Sales Tax, and Fraud Integrity
                systems.
              </li>
              <li className="mb-4">
                Improved CI/CD pipelines using Jenkins and Git, reducing
                deployment friction and increasing release stability.
              </li>
              <li className="mb-4">
                Implemented Oﬀer Prominence and mobile engagement features
                (Recently Viewed, Deals Masonry Layout), improving conversion
                and retention.
              </li>
              <li className="mb-4">
                Led HTTPS migration and AMP implementation initiatives to
                enhance performance and SEO.
              </li>
              <li className="mb-4">
                Designed and optimized mobile Home Page and View Item
                experiences, improving performance, user retention, and
                conversion rates.
              </li>
              <li className="mb-4">
                Built internal StubHub agent tools improving ticket search
                workflows and operational eﬃciency.
              </li>
              <li className="mb-4">
                Contributed to eBay Russia Classifieds plaLorm using V4/V3
                frontend frameworks with HTML, CSS, and JavaScript.
              </li>
              <li className="mb-4">
                Mentored engineers and led frontend initiatives within Agile
                Scrum teams.
              </li>
              <li className="">
                Collaborated with Product, Design, Backend, and QA teams across
                onsite and oﬀshore delivery models.
              </li>
            </ul>
          </div>
          <div className="grid border-l-2 border-blue-400 p-4 mt-0 sm:w-3/4">
            <div className="text-xs text-gray-400 mb-4">
              Dec 2012 – Mar 2014 · San Jose, CA
            </div>
            <div className="text-xl mb-2">Associate</div>
            <div className="text-sm text-blue-500 dark:text-blue-400 ">
              Cognizant Technology SoluEons
            </div>
            <div className="text-xs text-gray-400 mb-4">
              (As a consultant at eBay Inc.)
            </div>
            <ul className="list-disc pl-4 x-1/2">
              <li className="mb-4">
                Delivered frontend development for eBay UPE Mobile Web
                initiatives, building scalable and responsive user experiences.
              </li>
              <li className="mb-4">
                Implemented mobile-optimized features improving usability and
                engagement.
              </li>
              <li className="mb-4">
                Collaborated across distributed engineering teams to deliver
                production-grade releases.
              </li>
            </ul>
          </div>
          <div className="mb-4 grid border-l-2 border-blue-400 p-4 mt-0 sm:w-3/4">
            <div className="text-xs text-gray-400 mb-4">
              Jun 2010 – Nov 2012 · Chennai
            </div>
            <div className="text-xl mb-2">Associate</div>
            <div className="text-sm text-blue-500 dark:text-blue-400 ">
              Cognizant Technology SoluEons
            </div>
            <div className="text-xs text-gray-400 mb-4">
              (As a consultant at eBay Inc.)
            </div>
            <ul className="list-disc pl-4 x-1/2">
              <li className="mb-4">
                Contributed to frontend engineering initiatives supporting
                global eCommerce plaLorms.
              </li>
              <li className="mb-4">
                Developed scalable UI features using HTML, CSS, and JavaScript
                frameworks.
              </li>
              <li className="mb-4">
                Participated in Agile development cycles and cross-functional
                delivery.
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
