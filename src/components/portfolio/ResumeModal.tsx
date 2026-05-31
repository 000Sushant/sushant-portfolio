import { X, ArrowLeft, Printer, Download } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { CelloTape } from "./CelloTape";

// Import authentic PDF resumes as Vite static asset URLs
import backendPdf from "@/assets/resume_backend.pdf";
import fullstackPdf from "@/assets/resume_fullstack.pdf";
import javaPdf from "@/assets/resume.pdf";

type ResumeType = "backend" | "fullstack" | "java";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [selectedRole, setSelectedRole] = useState<ResumeType | null>(null);
  const printAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    setSelectedRole(null);
  };

  const rolesList: { type: ResumeType; title: string; desc: string; color: string; hoverColor: string; tags: string[] }[] = [
    {
      type: "backend",
      title: "Backend Engineer",
      desc: "Focusing on high-performance REST APIs, scalable backend services, automation tools, database optimizations, and cloud-native systems.",
      color: "bg-pastel-blue/30",
      hoverColor: "hover:bg-pastel-blue/70",
      tags: ["Node.js", "TypeScript", "SQL/NoSQL", "Redis", "AWS", "Docker", "Agile"],
    },
    {
      type: "fullstack",
      title: "Full Stack Engineer",
      desc: "Focusing on end-to-end applications, merging premium front-end components (Angular, HTML5, CSS3) with secure backend microservices.",
      color: "bg-pastel-green/30",
      hoverColor: "hover:bg-pastel-green/70",
      tags: ["Angular", "Node.js", "TypeScript", "SQL", "Redis", "AWS", "System Design"],
    },
    {
      type: "java",
      title: "Software Engineer (Java / Multi-skill)",
      desc: "Focusing on robust application logic, full-stack systems, automation frameworks, cost optimization, cybersecurity, and algorithms.",
      color: "bg-pastel-yellow/30",
      hoverColor: "hover:bg-pastel-yellow/70",
      tags: ["Java", "Python", "SQL", "TypeScript", "AWS", "Testing & Automation"],
    },
  ];

  return (
    <>
      {/* Outer Modal Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs select-none">
        <div className="relative w-full max-w-2xl bg-card border border-pencil/30 sketch-border shadow-2xl p-6 md:p-8 animate-wobble duration-1000">
          
          {/* Cello Tape styling at top */}
          <CelloTape
            className="-top-2 left-1/2 -translate-x-1/2 w-20 h-5"
            rotate="rotate-1"
            color="var(--pastel-yellow)"
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 border border-pencil/10 hover:border-pencil/50 hover:bg-pastel-coral/20 rounded-full transition-colors cursor-pointer text-pencil/80 hover:text-pencil"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!selectedRole ? (
            /* --- STEP 1: ROLE SELECTOR --- */
            <div>
              <div className="text-center mb-8 mt-2">
                <h3 className="font-sketch text-2xl md:text-3xl text-pencil leading-tight">
                  "Good thing I excel in various skills!"
                </h3>
                <p className="font-sketch text-md text-graphite/80 mt-2">
                  Which type of engineer are you looking for?
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {rolesList.map((role) => (
                  <button
                    key={role.type}
                    onClick={() => setSelectedRole(role.type)}
                    className={cn(
                      "w-full text-left p-5 border border-pencil/20 rounded-sm cursor-pointer transition-all duration-300 transform hover:scale-[1.01] flex flex-col gap-2 relative overflow-hidden group",
                      role.color,
                      role.hoverColor
                    )}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-sketch text-lg font-bold text-pencil">
                        {role.title}
                      </span>
                      <span className="text-xs font-sketch px-2.5 py-0.5 border border-pencil/15 bg-card/60 rounded-full">
                        View Resume
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-pencil/75 leading-relaxed font-sans pr-4">
                      {role.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {role.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase font-sans tracking-wider border border-pencil/10 bg-card/45 px-1.5 py-0.5 rounded-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>

              <p className="font-sketch text-center text-xs text-graphite/60 mt-6 italic">
                * Select a version to preview, print, or download authentic PDF
              </p>
            </div>
          ) : (
            /* --- STEP 2: RESUME PREVIEW & ACTIONS --- */
            <div className="flex flex-col h-[75vh] md:h-[80vh]">
              {/* Header Navigation for Preview */}
              <div className="flex flex-wrap justify-between items-center gap-3 border-b border-pencil/15 pb-4 mb-4 mt-2">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-1.5 text-sm font-sketch font-bold border border-pencil/20 px-3 py-1.5 rounded-sm hover:bg-pencil/5 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <div className="font-sketch text-sm text-graphite hidden md:block">
                  Previewing <span className="underline decoration-wavy">{selectedRole === "backend" ? "Backend" : selectedRole === "fullstack" ? "Full Stack" : "Software"}</span> Resume
                </div>
                <div className="flex gap-2">
                  <a
                    href={selectedRole === "backend" ? backendPdf : selectedRole === "fullstack" ? fullstackPdf : javaPdf}
                    download={
                      selectedRole === "backend"
                        ? "Sushant_Kumar_Backend_Resume.pdf"
                        : selectedRole === "fullstack"
                        ? "Sushant_Kumar_FullStack_Resume.pdf"
                        : "Sushant_Kumar_Software_Engineer_Resume.pdf"
                    }
                    className="flex items-center gap-1.5 text-xs md:text-sm font-sketch font-bold border border-pencil px-3 py-1.5 rounded-sm hover:bg-pencil/5 transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-1.5 text-xs md:text-sm font-sketch font-bold bg-pencil text-paper border border-pencil px-4 py-1.5 rounded-sm hover:bg-graphite transition-colors cursor-pointer shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-none translate-y-[-2px] active:translate-y-0 active:shadow-none"
                  >
                    <Printer className="w-4 h-4" />
                    Print / Save PDF
                  </button>
                </div>
              </div>

              {/* Scrollable Printable Paper Preview */}
              <div className="flex-1 overflow-y-auto pr-1 md:pr-3 select-text bg-paper p-4 md:p-8 rounded-xs border border-pencil/15 shadow-inner">
                {/* Print wrapper to hook window.print selection */}
                <div ref={printAreaRef} className="print-resume-container font-sans text-pencil leading-snug">
                  
                  {/* CV Header */}
                  <div className="text-center border-b-2 border-pencil/40 pb-4 mb-4">
                    <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-pencil font-sans">
                      Sushant Kumar
                    </h1>
                    <p className="text-sm font-semibold tracking-wider text-graphite/90 mt-1 uppercase font-sans">
                      {selectedRole === "backend"
                        ? "Backend Engineer"
                        : selectedRole === "fullstack"
                        ? "Full Stack Engineer"
                        : "Software Engineer"}
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-pencil/75 mt-2 font-mono">
                      <span>Bengaluru, India</span>
                      <span>|</span>
                      <span>+91-9064005890</span>
                      <span>|</span>
                      <span>000sushantkumar@gmail.com</span>
                      <span>|</span>
                      <span>LinkedIn</span>
                      <span>|</span>
                      <span>Portfolio</span>
                    </div>
                  </div>

                  {/* Profile Summary */}
                  <div className="mb-4">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-pencil border-b border-pencil/30 pb-1 mb-2">
                      Summary
                    </h2>
                    <p className="text-xs text-pencil/80 leading-relaxed">
                      {selectedRole === "backend" && (
                        "Backend-focused engineer with 2+ years of experience building scalable REST APIs, backend services, automation tools, and cloud-native applications using Node.js, TypeScript, SQL, Redis, and AWS. Proven experience optimizing infrastructure, reducing operational costs, improving real-time processing, and developing production grade systems with strong foundations in OOPs, DSA and distributed systems."
                      )}
                      {selectedRole === "fullstack" && (
                        "Full Stack Engineer with 2+ years of experience building scalable web applications, REST APIs, automation tools, and cloud-native systems using Angular, Node.js, TypeScript, SQL, Redis, and AWS. Experienced in frontend development, backend architecture, API integration, infrastructure optimization, and production-grade application development with strong foundations in OOPs, DSA, distributed systems, and system design."
                      )}
                      {selectedRole === "java" && (
                        "Software Engineer with 2+ years of experience developing scalable web applications, RESTful APIs, backend services, automation frameworks, and cloud-native systems. Experienced in full-stack development, infrastructure optimization, legacy modernization, and performance engineering with strong foundations in Object Oriented Programming and Data Structure and Algorithms."
                      )}
                    </p>
                  </div>

                  {/* Skills Grid */}
                  <div className="mb-4">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-pencil border-b border-pencil/30 pb-1 mb-2">
                      Skills
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5 text-xs font-sans leading-relaxed">
                      <div>
                        <strong>Languages:</strong> TypeScript, JavaScript, Java, Python, SQL, NoSQL
                      </div>
                      
                      {selectedRole === "backend" && (
                        <>
                          <div>
                            <strong>Backend:</strong> Node.js, Express.js, REST APIs, API Design
                          </div>
                          <div>
                            <strong>Databases:</strong> PostgreSQL, MongoDB, Redis, Firebase
                          </div>
                          <div>
                            <strong>Cloud & DevOps:</strong> AWS, Docker, Terraform, Jenkins, CI/CD, Linux, Git
                          </div>
                          <div>
                            <strong>Testing:</strong> Selenium, Appium, API Automation, TDD/BDD
                          </div>
                          <div>
                            <strong>Concepts:</strong> JWT, OAuth 2.0, Legacy Modernization, Event Driven
                          </div>
                        </>
                      )}

                      {selectedRole === "fullstack" && (
                        <>
                          <div>
                            <strong>Frontend:</strong> Angular, HTML5, CSS3, SCSS, Bootstrap, Responsive Design, RxJS, Angular Material
                          </div>
                          <div>
                            <strong>Backend:</strong> Node.js, Express.js, REST APIs, API Design, Microservices
                          </div>
                          <div>
                            <strong>Databases:</strong> PostgreSQL, MongoDB, Redis, Firebase
                          </div>
                          <div>
                            <strong>Cloud & DevOps:</strong> AWS, Docker, Terraform, Jenkins, CI/CD, Linux, Git
                          </div>
                          <div>
                            <strong>Testing:</strong> Selenium, Appium, API Automation, TDD/BDD
                          </div>
                          <div>
                            <strong>Concepts:</strong> JWT, OAuth 2.0, Legacy Modernization, Event Driven, State Management
                          </div>
                        </>
                      )}

                      {selectedRole === "java" && (
                        <>
                          <div>
                            <strong>Backend:</strong> Node.js, Express.js, RESTful APIs, API Design
                          </div>
                          <div>
                            <strong>Frontend:</strong> Angular, HTML5, SCSS/CSS, Bootstrap
                          </div>
                          <div>
                            <strong>Databases:</strong> PostgreSQL, MySQL, MongoDB, Redis, Firebase, Data Lake
                          </div>
                          <div>
                            <strong>Cloud & DevOps:</strong> AWS, ECS, S3, Docker, Git, CI/CD, Jenkins, Linux, Terraform
                          </div>
                          <div>
                            <strong>Testing & Automation:</strong> API Automation, Selenium, Appium (Android/iOS), TDD
                          </div>
                          <div>
                            <strong>Concepts:</strong> JWT, OAuth 2.0, Event-Driven Architecture
                          </div>
                          <div>
                            <strong>Specialized Expertise:</strong> Cybersecurity, Legacy System Modernization, Cost and Performance Optimization.
                          </div>
                        </>
                      )}
                      
                      <div className="md:col-span-2">
                        <strong>AI Skills:</strong> Prompt Engineering, MCP Automation, Copilot, Gemini, Claude, ChatGPT
                      </div>
                    </div>
                  </div>

                  {/* Work History */}
                  <div className="mb-4">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-pencil border-b border-pencil/30 pb-1 mb-2">
                      Experience
                    </h2>

                    {/* Job 1 */}
                    <div className="mb-3">
                      <div className="flex justify-between items-start text-xs font-bold">
                        <span>Application Development Engineer</span>
                        <span className="font-mono text-[10px] text-graphite">Jul 2024 – Present</span>
                      </div>
                      <div className="text-[10px] text-graphite/90 font-semibold italic">Signify, Bengaluru</div>
                      <ul className="list-disc pl-4 mt-1 text-[11px] text-pencil/85 space-y-1">
                        {selectedRole === "backend" && (
                          <>
                            <li>Designed and scaled REST APIs using Node.js and TypeScript for cloud-native applications</li>
                            <li>Modernized legacy backend architecture, reducing operational costs by 30% while enabling real-time processing</li>
                            <li>Built 5+ internal automation tools improving workflow efficiency and engineering productivity</li>
                          </>
                        )}
                        {selectedRole === "fullstack" && (
                          <>
                            <li>Designed and scaled REST APIs using Node.js and TypeScript for cloud-native applications</li>
                            <li>Developed frontend modules and integrated backend APIs for enterprise platforms using Angular</li>
                            <li>Modernized legacy application architecture, reducing operational costs by 30% while enabling real-time processing</li>
                            <li>Built 5+ internal automation tools improving workflow efficiency and engineering productivity</li>
                          </>
                        )}
                        {selectedRole === "java" && (
                          <>
                            <li>Built and scaled high-performance RESTful APIs using Node.js and TypeScript for cloud-native systems</li>
                            <li>Modernized legacy architecture, reducing operational costs by 30% while enabling real-time data processing</li>
                            <li>Proposed and developed 5+ internal tools to improve engineering productivity and streamline data flow</li>
                          </>
                        )}
                        <li>Led Agile delivery as Scrum Master, improving sprint execution through planning, stand-ups, and retrospectives</li>
                      </ul>
                    </div>

                    {/* Job 2 */}
                    <div>
                      <div className="flex justify-between items-start text-xs font-bold">
                        <span>R&D Intern</span>
                        <span className="font-mono text-[10px] text-graphite">Jul 2023 – Jul 2024</span>
                      </div>
                      <div className="text-[10px] text-graphite/90 font-semibold italic">Signify, Bengaluru</div>
                      <ul className="list-disc pl-4 mt-1 text-[11px] text-pencil/85 space-y-1">
                        {selectedRole === "backend" && (
                          <>
                            <li>Automated Android and iOS testing using Selenium and Appium, increasing coverage by 100% and reducing manual effort by 50%</li>
                            <li>Developed and optimized backend services for scalable data lake systems, improving performance and reliability</li>
                          </>
                        )}
                        {selectedRole === "fullstack" && (
                          <>
                            <li>Automated Android and iOS testing using Selenium and Appium, increasing coverage by 100% and reducing manual effort by 50%</li>
                            <li>Developed and optimized frontend and backend services for scalable data lake systems</li>
                          </>
                        )}
                        {selectedRole === "java" && (
                          <>
                            <li>Automated Android and iOS UI testing using Appium and Selenium, increasing test coverage by 100% and reducing manual testing effort by 50%</li>
                            <li>Developed and optimized backend services for scalable data lake systems, improving performance and reliability</li>
                          </>
                        )}
                        <li>Managed frontend, backend, and infrastructure for a production-grade data lake platform independently</li>
                      </ul>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="mb-4">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-pencil border-b border-pencil/30 pb-1 mb-2">
                      Projects
                    </h2>

                    {/* Project 1 */}
                    <div className="mb-2.5">
                      <div className="flex justify-between items-start text-xs font-bold">
                        <span>Factory Tool</span>
                        <span className="font-mono text-[10px] text-graphite">Node.js, Angular, REST APIs, AWS Lambda</span>
                      </div>
                      <ul className="list-disc pl-4 mt-0.5 text-[11px] text-pencil/85 space-y-0.5">
                        {selectedRole === "fullstack" ? (
                          <li>Developed responsive Angular dashboards and backend APIs improving operational efficiency and data consistency</li>
                        ) : (
                          <li>Reduced manual workflow delays by 90% while improving operational efficiency and data consistency</li>
                        )}
                        <li>Built a secure full-stack platform enabling real-time production data uploads from external factories</li>
                      </ul>
                    </div>

                    {/* Project 2 */}
                    <div className="mb-2.5">
                      <div className="flex justify-between items-start text-xs font-bold">
                        <span>OSS Approval Tool</span>
                        <span className="font-mono text-[10px] text-graphite">Java, Swing, Maven</span>
                      </div>
                      <ul className="list-disc pl-4 mt-0.5 text-[11px] text-pencil/85 space-y-0.5">
                        <li>Developed a dependency license comparison tool reducing OSS approval time from 1–2 days to 10–15 minutes</li>
                        <li>Improved compliance accuracy through automated dependency extraction and release comparison</li>
                      </ul>
                    </div>

                    {/* Project 3 */}
                    <div className="mb-2.5">
                      <div className="flex justify-between items-start text-xs font-bold">
                        <span>Data Lake</span>
                        <span className="font-mono text-[10px] text-graphite">AWS, Terraform, Node.js, JavaScript</span>
                      </div>
                      <ul className="list-disc pl-4 mt-0.5 text-[11px] text-pencil/85 space-y-0.5">
                        <li>Optimized infrastructure and backend services, reducing operational costs by 60% and improving reliability by 80%</li>
                        {selectedRole === "fullstack" ? (
                          <li>Implemented API-level security controls and developed frontend integrations for secure data access</li>
                        ) : (
                          <li>Implemented API-level security controls and handled system ownership, maintenance, and continuous enhancements</li>
                        )}
                      </ul>
                    </div>

                    {/* Project 4 */}
                    <div>
                      <div className="flex justify-between items-start text-xs font-bold">
                        <span>Sr. Architect</span>
                        <span className="font-mono text-[10px] text-graphite">Angular, Node.js, Docker, Vercel</span>
                      </div>
                      <ul className="list-disc pl-4 mt-0.5 text-[11px] text-pencil/85 space-y-0.5">
                        {selectedRole === "fullstack" ? (
                          <>
                            <li>Built a full-stack system design simulator to analyze AWS service behavior and scalability bottlenecks</li>
                            <li>Developed frontend visualizations to model traffic flow and architectural weaknesses under varying load conditions</li>
                          </>
                        ) : (
                          <>
                            <li>Built a system design simulator to analyze AWS service behavior, scalability bottlenecks, and infrastructure costs</li>
                            <li>Modeled traffic flow and architectural weaknesses under varying load conditions</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="mb-4">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-pencil border-b border-pencil/30 pb-1 mb-1.5">
                      Certifications
                    </h2>
                    <ul className="list-disc pl-4 text-[11px] text-pencil/85 space-y-0.5">
                      <li>Docker Foundations Professional Certificate – Docker</li>
                      <li>Generative AI Mastermind – Outskill</li>
                      <li>Build AI Agents with Enterprise Databases – Google</li>
                      <li>AI Agents Fundamentals – Hugging Face</li>
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-pencil border-b border-pencil/30 pb-1 mb-1.5">
                      Achievements
                    </h2>
                    <ul className="list-disc pl-4 text-[11px] text-pencil/85 space-y-0.5">
                      <li>Employee of the Quarter (Passion for Results) – Q2 2025</li>
                      <li>Employee of the Quarter (Customer First) – Q1 2026</li>
                      <li>Top 1% Rank in Google PromptWar for building an AI-powered electoral assistance platform</li>
                      <li>Holds 4 research publications including IEEE and SSRN journals on cybersecurity and machine learning</li>
                    </ul>
                  </div>

                  {/* Education */}
                  <div>
                    <h2 className="text-xs font-bold uppercase tracking-wider text-pencil border-b border-pencil/30 pb-1 mb-1.5">
                      Education
                    </h2>
                    <div className="flex justify-between items-start text-xs font-bold">
                      <span>Integrated M.Tech & B.Tech in Computer Science and Engineering</span>
                      <span className="font-mono text-[10px] text-graphite">2019 – 2024</span>
                    </div>
                    <div className="text-[10px] text-graphite/90 font-semibold italic">Lovely Professional University, Punjab</div>
                  </div>

                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
