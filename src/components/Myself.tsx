import { Linkedin, Instagram, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Myself() {
  const [hoveredIcon, setHoveredIcon] = useState<
    "linkedin" | "instagram" | "external" | null
  >(null);

  return (
    <section
      id="Myself"
      className="py-16 px-6 md:px-12 lg:px-16 bg-black font-inter overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Left div with text content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-[#ed3411] leading-tight tracking-tight mb-6 animate-fade-in">
              <span className="inline-block hover:animate-pulse hover:text-red-400 transition-all duration-500 cursor-default">
                Myself
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white font-normal max-w-2xl tracking-tight transform hover:scale-105 transition-all duration-700 ease-out hover:text-gray-100 cursor-default animate-slide-up">
              Visionary. Designer. AI Maverick. As the driving soul behind
              Birclix, I blend the sparks of creativity with the logic of
              machine intelligence to build digital experiences that breathe.
              Whether it's next-gen interfaces, AI-driven systems, or immersive
              design—I'm here to fuse art and code into something unforgettable.
            </p>
          </div>

          {/* Right div with three circles */}
          <div className="flex-shrink-0 animate-float">
            <div className="flex items-center gap-6 md:gap-8">
              {/* LinkedIn Circle */}
              <a href="https://www.linkedin.com/in/muhammadumarriaz981817">
                <div className="flex flex-col items-center group">
                  <div
                    className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-transparent border-2 border-[#ed3411] rounded-full flex items-center justify-center hover:bg-[#ed3411] transition-all duration-500 hover:scale-110 cursor-pointer hover:shadow-lg hover:shadow-[#ed3411]/30 hover:rotate-12 hover:border-red-500 relative overflow-hidden group"
                    onMouseEnter={() => setHoveredIcon("linkedin")}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <Linkedin
                      className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 transition-all duration-500 z-10 ${
                        hoveredIcon === "linkedin"
                          ? "text-white scale-110 rotate-6"
                          : "text-[#ed3411]"
                      }`}
                    />
                  </div>
                  <span className="mt-2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    LinkedIn
                  </span>
                </div>{" "}
              </a>

              {/* Instagram Circle */}
              <a href="https://www.instagram.com/uncodedumar/">
                <div className="flex flex-col items-center group">
                  <div
                    className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-transparent border-2 border-[#ed3411] rounded-full flex items-center justify-center hover:bg-[#ed3411] transition-all duration-500 hover:scale-110 cursor-pointer hover:shadow-lg hover:shadow-[#ed3411]/30 hover:rotate-12 hover:border-red-500 relative overflow-hidden group"
                    onMouseEnter={() => setHoveredIcon("instagram")}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <Instagram
                      className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 transition-all duration-500 z-10 ${
                        hoveredIcon === "instagram"
                          ? "text-white scale-110 rotate-6"
                          : "text-[#ed3411]"
                      }`}
                    />
                  </div>
                  <span className="mt-2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Instagram
                  </span>
                </div>
              </a>

              <a href="https://linktr.ee/uncodedumar">
                {/* External Link Circle */}
                <div className="flex flex-col items-center group">
                  <div
                    className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-transparent border-2 border-[#ed3411] rounded-full flex items-center justify-center hover:bg-[#ed3411] transition-all duration-500 hover:scale-110 cursor-pointer hover:shadow-lg hover:shadow-[#ed3411]/30 hover:rotate-12 hover:border-red-500 relative overflow-hidden group"
                    onMouseEnter={() => setHoveredIcon("external")}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <ExternalLink
                      className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 transition-all duration-500 z-10 ${
                        hoveredIcon === "external"
                          ? "text-white scale-110 rotate-6"
                          : "text-[#ed3411]"
                      }`}
                    />
                  </div>
                  <span className="mt-2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Links
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end">
          <div className="w-[300px] group">
            <p className="text-base text-right md:text-lg text-gray-300 font-light tracking-tight hover:text-white transition-all duration-700 hover:scale-105 transform hover:tracking-wide cursor-default animate-fade-in-delayed">
              I don't do this for the riches, I'm infected. My condition is
              always in my head. These words are my religion, I'm obsessed. I'ts
              by decision, i'll do till I am DEAD.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 1.2s ease-out 0.3s both;
        }

        .animate-fade-in-delayed {
          animation: fade-in 1.5s ease-out 0.8s both;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
