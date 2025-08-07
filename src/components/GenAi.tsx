import { useState, useEffect, useRef } from "react";
import { SiBehance } from "react-icons/si";

export default function Genai() {
  const [isVisible, setIsVisible] = useState(false);
  const genaiRef = useRef(null);

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

    if (genaiRef.current) {
      observer.observe(genaiRef.current);
    }

    return () => {
      if (genaiRef.current) {
        observer.unobserve(genaiRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={genaiRef}
      className="py-16 px-6 md:px-12 lg:px-16 bg-black font-inter overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Left div with text content */}
          <div className="flex-1 text-center lg:text-left">
            <h1
              className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-[#ed3411] leading-tight tracking-tight mb-6 transition-all duration-1200 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-16 scale-90"
              }`}
              style={{
                textShadow: isVisible
                  ? "0 0 50px rgba(237, 52, 17, 0.5)"
                  : "none",
                animation: isVisible
                  ? "ai-pulse 3s ease-in-out infinite"
                  : "none",
              }}
            >
              Gen Ai
            </h1>
            <p
              className={`text-lg md:text-xl lg:text-2xl text-white font-normal max-w-2xl tracking-tight transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? "400ms" : "0ms",
              }}
            >
              Craft with Generative AI not just to automate—but to imagine,
              design, and amplify human creativity into forms the future hasn't
              dreamed yet
            </p>
          </div>

          {/* Right div with Behance icon */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-6 md:gap-8">
              {/* Behance Circle with enhanced animations */}
              <a href="https://www.behance.net/chmuhammadumar1">
                <div className="flex flex-col items-center group relative">
                  <div
                    className={`w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-transparent border-2 border-[#ed3411] rounded-full flex items-center justify-center transition-all duration-700 cursor-pointer relative overflow-hidden ${
                      isVisible
                        ? "opacity-100 translate-x-0 rotate-0 scale-100"
                        : "opacity-0 translate-x-12 rotate-180 scale-75"
                    }
                  hover:bg-[#ed3411] hover:border-[#ff4d2a] hover:scale-125 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#ed3411]/60
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:-translate-x-full before:transition-transform before:duration-1000 hover:before:translate-x-full
                  after:absolute after:inset-0 after:rounded-full after:border-2 after:border-[#ed3411] after:scale-110 after:opacity-0 hover:after:scale-150 hover:after:opacity-20 after:transition-all after:duration-500
                  `}
                    style={{
                      transitionDelay: isVisible ? "600ms" : "0ms",
                      animation: isVisible
                        ? "orbit-bounce 1s ease-out 600ms both"
                        : "none",
                    }}
                  >
                    {/* Rotating background effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ed3411]/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity duration-500"></div>

                    <SiBehance className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#ed3411] group-hover:text-white transition-all duration-300 group-hover:scale-110 relative z-10 group-hover:drop-shadow-lg" />
                  </div>

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div
                      className="absolute w-1 h-1 bg-[#ed3411] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"
                      style={{ top: "10%", left: "20%", animationDelay: "0s" }}
                    ></div>
                    <div
                      className="absolute w-1 h-1 bg-[#ed3411] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"
                      style={{
                        top: "80%",
                        right: "15%",
                        animationDelay: "0.2s",
                      }}
                    ></div>
                    <div
                      className="absolute w-1 h-1 bg-[#ed3411] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"
                      style={{
                        bottom: "20%",
                        left: "10%",
                        animationDelay: "0.4s",
                      }}
                    ></div>
                  </div>

                  {/* Enhanced tooltip */}
                  <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#ed3411] to-[#ff4d2a] text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-20 shadow-xl">
                    Visit Behance Portfolio
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-[#ed3411] to-[#ff4d2a] rotate-45"></div>
                  </div>

                  {/* Pulsing ring effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#ed3411] opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-1000 pointer-events-none"></div>
                </div>
              </a>
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
            className={`w-[300px] transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-12 scale-95"
            }`}
            style={{
              transitionDelay: isVisible ? "800ms" : "0ms",
            }}
          >
            <p className="text-base text-right md:text-lg text-gray-300 font-light tracking-tight hover:text-white hover:scale-105 transition-all duration-300 cursor-default">
              The world outside to me is like an ocean & I Can't swim, I'm
              losin' my grip <br /> Caught up in the current,
              <br /> won't drown in this ship
              <br /> I can't swim, I'm startin' to slip <br /> I'm runnin' out
              of breath, <br /> I'm scared to death <br /> I gotta keep my head
              up, up, up, up!
            </p>
          </div>
        </div>
      </div>

      {/* Custom animations and styles */}
      <style>{`
        @keyframes ai-pulse {
          0%,
          100% {
            text-shadow: 0 0 50px rgba(237, 52, 17, 0.5);
          }
          25% {
            text-shadow: 0 0 60px rgba(237, 52, 17, 0.7),
              0 0 80px rgba(237, 52, 17, 0.4), 0 0 100px rgba(237, 52, 17, 0.2);
          }
          50% {
            text-shadow: 0 0 70px rgba(237, 52, 17, 0.8),
              0 0 90px rgba(237, 52, 17, 0.5), 0 0 120px rgba(237, 52, 17, 0.3),
              0 0 150px rgba(237, 52, 17, 0.1);
          }
          75% {
            text-shadow: 0 0 60px rgba(237, 52, 17, 0.7),
              0 0 80px rgba(237, 52, 17, 0.4), 0 0 100px rgba(237, 52, 17, 0.2);
          }
        }

        @keyframes orbit-bounce {
          0% {
            opacity: 0;
            transform: translateX(3rem) rotate(180deg) scale(0.3);
          }
          30% {
            transform: translateX(-0.5rem) rotate(30deg) scale(1.2);
          }
          50% {
            transform: translateX(0.3rem) rotate(-10deg) scale(0.9);
          }
          70% {
            transform: translateX(-0.1rem) rotate(5deg) scale(1.05);
          }
          90% {
            transform: translateX(0.05rem) rotate(-2deg) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotate(0deg) scale(1);
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

        .group:hover .animate-float {
          animation: float 2s ease-in-out infinite;
        }

        /* Gradient text effect for AI theme */
        .text-ai-gradient {
          background: linear-gradient(45deg, #ed3411, #ff6b4a, #ed3411);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease infinite;
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
