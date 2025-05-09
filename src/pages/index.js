import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [showSocials, setShowSocials] = useState(false);
  const socials = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/guillermo-dietrich-a654711b5/" },
    { name: "GitHub", url: "https://github.com/gdietrich01" },
  ];

  return (
    <div className={`min-h-screen bg-black text-white relative overflow-hidden ${geistSans.variable} ${geistMono.variable} font-mono`}>
      {/* Background starry image */}
      <div className="absolute inset-0 z-0 bg-[url('/Planetearth.jpg')] bg-cover opacity-40" />

      {/* Responsive Header - No background */}
      <div className="fixed top-0 left-0 right-0 md:top-6 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2 z-20 text-white p-3 md:p-4 flex flex-row items-center justify-center md:justify-start gap-3 md:gap-4">
        <div className="relative w-10 h-10 md:w-14 md:h-14 flex-shrink-0">
          <Image
            src="/profile2.jpg"
            alt="Guillermo Dietrich"
            fill
            className="rounded-full grayscale hover:grayscale-0 transition object-cover shadow-lg"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-base md:text-xl font-semibold [text-shadow:_0_1px_3px_rgb(0_0_0_/_40%)]">Guillermo Dietrich</h1>
          <a href="mailto:guillermodietrich01@gmail.com" className="text-xs md:text-sm hover:text-gray-300 inline-flex items-center gap-1 [text-shadow:_0_1px_3px_rgb(0_0_0_/_40%)]">
            <span role="img" aria-label="Email">📧</span> Email me
          </a>
        </div>
      </div>

      {/* Responsive Navigation - Active button border */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-auto md:top-6 md:right-6 md:left-auto z-20 bg-gray-800/80 md:bg-transparent p-2 md:p-0 rounded-t-lg md:rounded-none">
        <div className="flex md:flex-col items-center md:items-end justify-around md:gap-2">
          {["about", "career", "education", "interests"].map((section) => (
            <button
              key={section}
              onClick={() => {
                setActiveSection(section);
                setShowSocials(false);
              }}
              className={`px-2 py-1 md:px-3 md:py-1 text-sm md:text-base rounded-md md:rounded transition-colors duration-200 border-2 ${
                activeSection === section
                  ? "bg-white text-black font-semibold border-blue-400"
                  : "bg-gray-700 md:bg-gray-800 text-white border-transparent hover:bg-gray-600 md:hover:bg-gray-700"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          <div className="relative">
            <button
              onClick={() => setShowSocials(!showSocials)}
              className={`px-2 py-1 md:px-3 md:py-1 text-sm md:text-base rounded-md md:rounded border-2 border-transparent transition-colors duration-200 ${showSocials ? 'bg-white text-black' : 'bg-gray-700 md:bg-gray-800 text-white hover:bg-gray-600 md:hover:bg-gray-700'}`}
            >
              Socials
            </button>
            {showSocials && (
              <div className="absolute bottom-full mb-1 md:mb-0 md:bottom-auto md:right-full md:top-0 md:mr-1 flex flex-col bg-gray-800/90 text-gray-100 rounded shadow-lg border border-gray-500/50 -translate-x-1/2 md:translate-x-0 left-1/2 md:left-auto">
                {socials.map(({ name, url }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 hover:bg-gray-700/90 md:hover:text-blue-400 whitespace-nowrap text-sm transition-colors duration-150"
                    onClick={() => setShowSocials(false)}
                  >
                    {name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Responsive Content Sections - Sharp corners, Mobile narrower */}
      {activeSection === "about" && (
        <div className="relative z-10 max-w-sm md:max-w-3xl mx-auto mt-28 md:mt-40 mb-20 mx-4 md:mx-auto bg-white/90 md:bg-white text-black p-4 pt-8 md:p-6 rounded-none shadow-lg backdrop-blur-md md:backdrop-blur-sm border-2 border-blue-400">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Hi</h2>
          <p className="mb-4 text-sm md:text-base">
            I was born and raised in Buenos Aires, bachelor in Business and Economics from Universidad Torcuato Di Tella.
          </p>
          <p className="mb-4 text-sm md:text-base">
            For the past three years, I&apos;ve been working at Globant, most recently as a Senior Business Hacking Analyst based in New York. There, I support companies across the U.S. and Latin America through digital transformation projects, optimizing operations, enhancing customer experience, conducting financial analysis, and developing strategic roadmaps to identify growth opportunities.
          </p>
          <p className="text-sm md:text-base">
            I&apos;m now looking to join dynamic, high-performing teams dedicated to using technology for meaningful impact.
          </p>
        </div>
      )}

      {activeSection === "career" && (
        <div className="relative z-10 max-w-sm md:max-w-3xl mx-auto mt-28 md:mt-40 mb-20 mx-4 md:mx-auto bg-white/90 md:bg-white text-black p-4 pt-8 md:p-6 rounded-none shadow-lg backdrop-blur-md md:backdrop-blur-sm border-2 border-blue-400 max-h-[60vh] md:max-h-[70vh] overflow-y-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Professional Career</h2>
          <ul className="list-disc pl-4 md:pl-6 space-y-4 text-sm md:text-base">
            <li>
            <strong>Business Hacking SrAnalyst - Globant New York, US (Apr 2025 - Present)</strong><br />
              <strong>Business Hacking Analyst - Globant New York, US (Apr 2024 - Apr 2025)</strong><br />
            
          
              Collaborate with financial services clients as part of the AI Studio, contributing to pre-sales activities by designing tailored proposals and showcasing AI-driven solutions to improve operational efficiency and customer engagement.<br />
              Supported a project for a financial services client by enhancing ticket creation processes, improving efficiency, reducing bottlenecks, and identifying new opportunities.<br />
              Led a strategic project for a major insurance provider across nine LATAM countries to optimize customer service operations and drive business transformation:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Conducted 42 interviews and over 500 hours of analysis to map end-to-end processes, including CRM platforms, call centers, and multi-channel interactions.</li>
                <li>Designed a comprehensive roadmap outlining opportunities for process innovation, AI-based automation, IVR integration, unified CRM systems, and self-service platform improvements.</li>
                <li>Delivered financial analysis to showcase potential revenue growth, cost savings, and ROI for proposed solutions.</li>
                <li>Organized and facilitated a two-day in-person workshop with C-level executives, including the regional CEO, to align on strategic opportunities.</li>
                <li>Focused on farming additional opportunities within the account, leading to further engagements and project expansions.</li>
              </ul>
            </li>
            <li>
              <strong>Business Hacking Analyst — Globant, Buenos Aires, Argentina (Apr 2022 – Apr 2024)</strong><br />
              Contributed to developing business cases, discovery processes, and benchmarks for clients in pharmaceutical, automotive, financial, and sustainability sectors.<br />
              Secured a major deal for Mexico&apos;s second-largest bank, creating an automotive marketplace.<br />
              Led a sustainability project for the Inter-American Development Bank (IDB).<br />
              Oversaw project staffing and studio budget alignment.<br />
              Spearheaded a unified loyalty program across ten companies, piloted in Paraguay&apos;s premier stadiums.
            </li>
            <li>
              <strong>Co-Founder — Blitz, Buenos Aires, Argentina (Aug 2023 – Mar 2024)</strong><br />
              Developed a machine learning-based platform for predicting, detecting, and managing insurance fraud in collaboration with Banco Provincia ART under NDA.<br />
              Awarded second-best thesis accolade.
            </li>
            <li>
              <strong>Business Analyst — YopLabs, Buenos Aires, Argentina (Dec 2020 – Dec 2021)</strong><br />
              Created a virtual wallet for LabbiGo. Contributed to operations and marketing in B2C/B2B markets.<br />
              Launched Labbi in Bolivia. Led consulting for Debuses.com.
            </li>
            <li>
              <strong>Consulting Intern — Coupe, Buenos Aires, Argentina (Mar 2018 – Mar 2019)</strong><br />
              Developed data-driven marketing strategies and advised Instagram growth for brands like @historylatam and @canalaetv.
            </li>
            <li>
              <strong>Co-Founder — Ranch Pizza, Buenos Aires, Argentina (Mar 2018 – Mar 2020)</strong><br />
              Co-founded a frozen pizza delivery service across Pilar Country.
            </li>
          </ul>
        </div>
      )}

      {activeSection === "education" && (
        <div className="relative z-10 max-w-sm md:max-w-3xl mx-auto mt-28 md:mt-40 mb-20 mx-4 md:mx-auto bg-white/90 md:bg-white text-black p-4 pt-8 md:p-6 rounded-none shadow-lg backdrop-blur-md md:backdrop-blur-sm border-2 border-blue-400 max-h-[60vh] md:max-h-[70vh] overflow-y-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Education & More</h2>
          <ul className="list-disc pl-4 md:pl-6 space-y-4 text-sm md:text-base">
            <li>
              <strong>Torcuato Di Tella University (Mar 2019 – Dec 2023)</strong><br />
              Bachelor in Business and Economics.
            </li>
            <li>
              <strong>Los Molinos School (Mar 2006 – Dec 2018)</strong><br />
              Full primary and secondary education.
            </li>
            <li>
              <strong>Yale University (Summer 2017)</strong><br />
              Summer Student – EXPLO & Financial Markets Course.
            </li>
            <li>
              <strong>Digital House (Jul 2019 – Dec 2019)</strong><br />
              Data Analytics Course.
            </li>
            <li>
              <strong>Extracurricular & Leadership Experience</strong><br />
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  <strong>Hay equipo (Jul 2023 – Present)</strong><br />
                  Engaged in a leadership network with young leaders from public and private sectors, including former Mauricio Macri government officials. Contributed to political leadership initiatives and coordinated election oversight in La Matanza.
                </li>
                <li>
                  <strong>Young Presidents Organization (Dec 2017 – Present)</strong><br />
                  Member of a global executive mentoring committee. Co-founded a LatAm hackathon during lockdown to improve education. Organized events on crypto and emerging technologies.
                </li>
                <li>
                  <strong>Un Techo Para Mi País (Dec 2017 – Dec 2018)</strong><br />
                  Led a volunteer project that built 20 homes for families in vulnerable neighborhoods of Buenos Aires.
                </li>
              </ul>
            </li>
            <li>
              <strong>Languages</strong><br />
              Fluent in Spanish and English.
            </li>
          </ul>
        </div>
      )}

      {activeSection === "interests" && (
        <div className="relative z-10 max-w-sm md:max-w-3xl mx-auto mt-28 md:mt-40 mb-20 mx-4 md:mx-auto bg-white/90 md:bg-white text-black p-4 pt-8 md:p-6 rounded-none shadow-lg backdrop-blur-md md:backdrop-blur-sm border-2 border-blue-400">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Interests</h2>
          <div className="text-sm md:text-base">
            <p className="mb-4">
              I&apos;m deeply curious about how technology intersects with the real world. My interests range from self-driving systems and robotics to the future of payments and financial infrastructure.
            </p>
            <p className="mb-4">
              Outside of work, I enjoy competitive sports (especially skiing), exploring new countries and cultures, and following developments in macroeconomics, geopolitics, and AI.
            </p>
            <p>
              I&apos;m also passionate about long-term impact — projects that aim to reshape how people live, work, and move.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}