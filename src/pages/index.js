import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const socials = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/guillermo-dietrich-a654711b5/" },
    { name: "GitHub", url: "https://github.com/gdietrich01" },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background starry image */}
      <div className="absolute inset-0 z-0 bg-[url('/Planetearth.jpg')] bg-cover opacity-40" />

      {/* Persistent Header with Photo, Name & Email */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-20 bg-gray-800 bg-opacity-70 text-white p-4 rounded-full flex items-center gap-4 shadow-lg">
        <img
          src="/profile2.jpg"
          alt="Guillermo Dietrich"
          className="w-14 h-14 rounded-full grayscale hover:grayscale-0 transition"
        />
        <div className="text-center">
          <h1 className="text-xl font-semibold">Guillermo Dietrich</h1>
          <a href="mailto:guillermodietrich10@gmail.com" className="underline text-sm hover:text-gray-300">
            Email me
          </a>
        </div>
      </div>
      {/* Sidebar with section buttons */}
      <div className="fixed top-6 right-6 z-20 flex flex-col items-end gap-2">
        {["about", "career", "education", "interests"].map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`px-3 py-1 rounded ${
              activeSection === section ? "bg-white text-black font-semibold" : "bg-gray-800 text-white"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, " $1")}
          </button>
        ))}
        <div className="group relative">
          <button className="px-3 py-1 rounded bg-gray-800 text-white group-hover:bg-white group-hover:text-black">
            Socials
          </button>
          <div className="absolute right-full top-0 hidden group-hover:flex flex-col bg-white text-black rounded shadow-lg">
            {socials.map(({ name, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 hover:bg-gray-100"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
      {activeSection === "about" && (
        <div className="relative z-10 max-w-3xl mx-auto mt-40 bg-white text-black p-6 rounded-2xl shadow-lg backdrop-blur-sm border border-blue-200/30">
          <h2 className="text-2xl font-bold mb-4">Hi</h2>
          <p className="mb-4">
            I&apos;m from Buenos Aires, bachelor in Business and Economics from Universidad Torcuato Di Tella.
          </p>
          <p className="mb-4">
            For the past three years, I&apos;ve worked at Globant, most recently as a Senior Business Hacking Analyst in New York. There, I supported companies across the U.S. and Latin America through digital transformation projects, optimizing operations, enhancing customer experience, conducting financial analysis, and developing strategic roadmaps to identify growth opportunities.
          </p>
          <p>
            I&apos;m now looking to join dynamic, high-performing teams dedicated to using technology for meaningful impact.
          </p>
        </div>
      )}

      {activeSection === "career" && (
        <div className="relative z-10 max-w-3xl mx-auto mt-40 bg-white text-black p-6 rounded-2xl shadow-lg backdrop-blur-sm border border-blue-200/30 h-[600px] overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Professional Career</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Business Hacking Sr Analyst — Globant, New York, US (Apr 2025 – Present)</strong><br />
              Collaborated with financial services clients as part of the AI Studio, contributing to pre-sales activities by designing tailored proposals and showcasing AI-driven solutions to improve operational efficiency and customer engagement.<br />
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
        <div className="relative z-10 max-w-3xl mx-auto mt-40 bg-white text-black p-6 rounded-2xl shadow-lg backdrop-blur-sm border border-blue-200/30">
          <h2 className="text-2xl font-bold mb-4">Education & More</h2>
          <ul className="list-disc pl-6 space-y-4">
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
        <div className="relative z-10 max-w-3xl mx-auto mt-40 bg-white text-black p-6 rounded-2xl shadow-lg backdrop-blur-sm border border-blue-200/30">
          <h2 className="text-2xl font-bold mb-4">Interests</h2>
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
      )}

      {/* Future sidebar or buttons for navigation */}
      {/* For example: 
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-20 flex flex-col gap-2">
        <button className="bg-white text-black px-3 py-1 rounded">Career</button>
        <button className="bg-white text-black px-3 py-1 rounded">Education</button>
        <button className="bg-white text-black px-3 py-1 rounded">Interests</button>
        <button className="bg-white text-black px-3 py-1 rounded">Socials</button>
      </div> 
      */}
    </div>
  );
}
