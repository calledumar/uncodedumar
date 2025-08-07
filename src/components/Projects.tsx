import { useState, useEffect, useRef } from "react";
import { Github } from "lucide-react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section
      id="Projects"
      ref={projectsRef}
      className="py-16 px-6 md:px-12 lg:px-16 bg-black font-inter overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Left div with text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Simple H1 with basic animation - no special styling */}
            <h1
              className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-[#ed3411] leading-tight tracking-tight mb-6 transition-all duration-1200 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
              style={{
                textShadow: isVisible
                  ? "0 0 40px rgba(237, 52, 17, 0.4)"
                  : "none",
                animation: isVisible
                  ? "simple-glow 3s ease-in-out infinite"
                  : "none",
              }}
            >
              Projects
            </h1>

            <div className="relative">
              <p
                className={`text-lg md:text-xl lg:text-2xl text-white font-normal max-w-2xl tracking-tight transition-all duration-1000 ease-out hover:text-gray-100 hover:scale-105 cursor-default ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? "400ms" : "0ms",
                }}
              >
                I thrive on building things that blur the line between art and
                intelligence. From experimental UI/UX concepts to AI-powered
                tools and immersive digital spaces, my personal projects are a
                reflection of my curiosity, creativity, and code-fueled
                ambition. Among them, Birclix stands at the core—my most
                intense, purpose-driven creation yet. It’s more than a project;
                it’s my vision for a next-gen creative agency where design,
                artificial intelligence, and emotion collide to shape powerful
                digital realities. Every line of code, every pixel, every idea—I
                pour it all into Birclix.
              </p>

              {/* Floating project symbols */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                  className={`absolute text-[#ed3411]/15 text-5xl font-bold transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    top: "5%",
                    right: "-5%",
                    transitionDelay: "600ms",
                    animation: isVisible
                      ? "float-project 8s ease-in-out infinite"
                      : "none",
                  }}
                >
                  ⚡
                </div>
                <div
                  className={`absolute text-[#ed3411]/10 text-4xl font-bold transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    bottom: "15%",
                    right: "15%",
                    transitionDelay: "800ms",
                    animation: isVisible
                      ? "float-project 10s ease-in-out infinite reverse"
                      : "none",
                  }}
                >
                  🚀
                </div>
                <div
                  className={`absolute text-[#ed3411]/15 text-5xl font-bold transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    top: "5%",
                    right: "-5%",
                    transitionDelay: "600ms",
                    animation: isVisible
                      ? "float-project 8s ease-in-out infinite"
                      : "none",
                  }}
                >
                  ⚡
                </div>

                <div
                  className={`absolute text-[#ed3411]/20 text-3xl font-bold transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    top: "50%",
                    right: "5%",
                    transitionDelay: "1000ms",
                    animation: isVisible
                      ? "float-project 12s ease-in-out infinite"
                      : "none",
                  }}
                >
                  ⭐
                </div>
              </div>
            </div>
          </div>

          {/* Right div with GitHub icon */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-6 md:gap-8">
              {/* GitHub Circle with enhanced animations */}
              <div className="flex flex-col items-center group relative">
                <div
                  className={`w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-transparent border-2 border-[#ed3411] rounded-full flex items-center justify-center transition-all duration-700 cursor-pointer relative overflow-hidden ${
                    isVisible
                      ? "opacity-100 translate-x-0 rotate-0 scale-100"
                      : "opacity-0 translate-x-12 rotate-90 scale-75"
                  }
                  hover:bg-[#ed3411] hover:border-[#ff4d2a] hover:scale-125 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#ed3411]/60
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full before:transition-transform before:duration-1000 hover:before:translate-x-full
                  after:absolute after:inset-0 after:rounded-full after:border-2 after:border-[#ed3411] after:scale-110 after:opacity-0 hover:after:scale-150 hover:after:opacity-30 after:transition-all after:duration-700
                  `}
                  style={{
                    transitionDelay: isVisible ? "600ms" : "0ms",
                    animation: isVisible
                      ? "github-bounce 1s ease-out 600ms both"
                      : "none",
                  }}
                >
                  {/* Rotating code pattern background */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="absolute inset-2 rounded-full bg-gradient-to-r from-[#ed3411]/10 via-transparent to-[#ed3411]/10 animate-spin"
                      style={{ animationDuration: "6s" }}
                    ></div>
                  </div>

                  <a href="https://github.com/calledumar">
                    {" "}
                    <Github className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#ed3411] group-hover:text-white transition-all duration-300 group-hover:scale-110 relative z-10 group-hover:drop-shadow-lg" />
                  </a>
                </div>

                {/* Code-themed floating elements */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute w-1 h-1 bg-[#ed3411] rounded-full animate-ping"
                    style={{ top: "10%", left: "20%", animationDelay: "0s" }}
                  ></div>
                  <div
                    className="absolute w-1 h-1 bg-[#ed3411] rounded-full animate-ping"
                    style={{ top: "80%", right: "15%", animationDelay: "0.3s" }}
                  ></div>
                  <div
                    className="absolute w-1 h-1 bg-[#ed3411] rounded-full animate-ping"
                    style={{
                      bottom: "15%",
                      left: "10%",
                      animationDelay: "0.6s",
                    }}
                  ></div>
                </div>
                <a href=" https://github.com/calledumar">
                  {/* Enhanced tooltip */}
                  <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#ed3411] to-[#ff4d2a] text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-20 shadow-xl">
                    View GitHub
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-[#ed3411] to-[#ff4d2a] rotate-45"></div>
                  </div>
                </a>
                {/* Expanding code ring */}
                <div className="absolute inset-0 rounded-full border border-[#ed3411] opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-1000 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      {/* Bottom paragraph with enhanced animation */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end">
          <div
            className={`w-[300px] transition-all duration-1000 ease-out group ${
              isVisible
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-16 scale-95"
            }`}
            style={{
              transitionDelay: isVisible ? "800ms" : "0ms",
            }}
          >
            <div className="relative">
              <p className="text-base text-right md:text-lg text-gray-300 font-light tracking-tight group-hover:text-white group-hover:scale-105 transition-all duration-500 cursor-default relative z-10">
                Stronger, Stronger, Everlasting.
                <br />
                Now you see me never-losing.
              </p>

              {/* Animated background on hover */}
              <div className="absolute inset-0 bg-gradient-to-l from-[#ed3411]/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>

              {/* Project-themed decorative elements */}
              <div className="absolute -right-6 top-1/4 opacity-0 group-hover:opacity-30 transition-all duration-500">
                <div className="w-2 h-2 bg-[#ed3411] rounded-full"></div>
                <div className="w-1 h-8 bg-gradient-to-b from-[#ed3411] to-transparent mt-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle project grid */}
        <div
          className={`absolute inset-0 opacity-0 transition-opacity duration-2000 ${
            isVisible ? "opacity-5" : "opacity-0"
          }`}
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(237, 52, 17, 0.1) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(237, 52, 17, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            transitionDelay: "1200ms",
          }}
        ></div>

        {/* Floating project particles */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1.5 h-1.5 bg-[#ed3411] rounded-full opacity-0 transition-all duration-1000 ${
              isVisible ? "opacity-30" : "opacity-0"
            }`}
            style={{
              top: `${15 + i * 18}%`,
              left: `${8 + i * 15}%`,
              transitionDelay: `${1000 + i * 150}ms`,
              animation: isVisible
                ? `project-particle ${5 + i}s ease-in-out infinite`
                : "none",
              animationDelay: `${i * 0.4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes simple-glow {
          0%,
          100% {
            text-shadow: 0 0 40px rgba(237, 52, 17, 0.4);
          }
          50% {
            text-shadow: 0 0 60px rgba(237, 52, 17, 0.6),
              0 0 80px rgba(237, 52, 17, 0.3), 0 0 100px rgba(237, 52, 17, 0.1);
          }
        }

        @keyframes github-bounce {
          0% {
            opacity: 0;
            transform: translateX(3rem) rotate(90deg) scale(0.3);
          }
          40% {
            transform: translateX(-0.5rem) rotate(-10deg) scale(1.2);
          }
          60% {
            transform: translateX(0.3rem) rotate(5deg) scale(0.9);
          }
          80% {
            transform: translateX(-0.1rem) rotate(-2deg) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotate(0deg) scale(1);
          }
        }

        @keyframes float-project {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) rotate(5deg);
          }
          66% {
            transform: translateY(-8px) rotate(-3deg);
          }
        }

        @keyframes project-particle {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.3;
          }
          33% {
            transform: translateY(-25px) scale(1.3);
            opacity: 0.6;
          }
          66% {
            transform: translateY(-12px) scale(0.8);
            opacity: 0.4;
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
