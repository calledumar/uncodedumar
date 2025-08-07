import { useState, useEffect, useRef } from "react";

export default function Technologies() {
  const [isVisible, setIsVisible] = useState(false);
  const techRef = useRef(null);

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

    if (techRef.current) {
      observer.observe(techRef.current);
    }

    return () => {
      if (techRef.current) {
        observer.unobserve(techRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={techRef}
      className="py-16 px-6 md:px-12 lg:px-16 bg-black font-inter overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Left div with text content */}
          <div className="flex-1 text-center lg:text-left">
            <h1
              className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-[#ed3411] leading-tight tracking-tight mb-6 transition-all duration-1200 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 -translate-x-16 scale-90"
              }`}
              style={{
                textShadow: isVisible
                  ? "0 0 60px rgba(237, 52, 17, 0.6)"
                  : "none",
                animation: isVisible
                  ? "tech-glow 4s ease-in-out infinite"
                  : "none",
              }}
            >
              <span className="inline-block hover:scale-110 hover:-rotate-2 transition-all duration-300 cursor-default">
                T
              </span>
              <span
                className="inline-block hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-default"
                style={{ transitionDelay: "50ms" }}
              >
                e
              </span>
              <span
                className="inline-block hover:scale-110 hover:-rotate-1 transition-all duration-300 cursor-default"
                style={{ transitionDelay: "100ms" }}
              >
                c
              </span>
              <span
                className="inline-block hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-default"
                style={{ transitionDelay: "150ms" }}
              >
                h
              </span>
              <span
                className="inline-block hover:scale-110 hover:-rotate-2 transition-all duration-300 cursor-default"
                style={{ transitionDelay: "200ms" }}
              >
                n
              </span>
              <span
                className="inline-block hover:scale-110 hover:rotate-1 transition-all duration-300 cursor-default"
                style={{ transitionDelay: "250ms" }}
              >
                o
              </span>
              <span
                className="inline-block hover:scale-110 hover:-rotate-3 transition-all duration-300 cursor-default"
                style={{ transitionDelay: "300ms" }}
              >
                l
              </span>
              <span
                className="inline-block hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-default"
                style={{ transitionDelay: "350ms" }}
              >
                o
              </span>
              <span
                className="inline-block hover:scale-110 hover:-rotate-1 transition-all duration-300 cursor-default"
                style={{ transitionDelay: "400ms" }}
              >
                g
              </span>
              <span
                className="inline-block hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-default"
                style={{ transitionDelay: "450ms" }}
              >
                i
              </span>
              <span
                className="inline-block hover:scale-110 hover:-rotate-2 transition-all duration-300 cursor-default"
                style={{ transitionDelay: "500ms" }}
              >
                e
              </span>
              <span
                className="inline-block hover:scale-110 hover:rotate-1 transition-all duration-300 cursor-default"
                style={{ transitionDelay: "550ms" }}
              >
                s
              </span>
            </h1>

            <div className="relative">
              <p
                className={`text-lg md:text-xl lg:text-2xl text-white font-normal max-w-2xl tracking-tight transition-all duration-1000 ease-out hover:text-gray-100 hover:scale-105 cursor-default ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-12"
                }`}
                style={{
                  transitionDelay: isVisible ? "400ms" : "0ms",
                }}
              >
                Engineer digital experiences through the fusion of intelligent
                systems, immersive interfaces, adaptive design, and
                human-centered innovation—where every interaction feels
                intuitive, responsive, and alive
              </p>

              {/* Floating tech symbols */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                  className={`absolute text-[#ed3411]/20 text-6xl font-bold transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    top: "10%",
                    right: "-10%",
                    transitionDelay: "600ms",
                    animation: isVisible
                      ? "float-symbol 6s ease-in-out infinite"
                      : "none",
                  }}
                >
                  &lt;/&gt;
                </div>
                <div
                  className={`absolute text-[#ed3411]/15 text-4xl font-bold transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    bottom: "20%",
                    right: "10%",
                    transitionDelay: "800ms",
                    animation: isVisible
                      ? "float-symbol 8s ease-in-out infinite reverse"
                      : "none",
                  }}
                >
                  {}
                </div>
                <div
                  className={`absolute text-[#ed3411]/10 text-5xl font-bold transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    top: "60%",
                    right: "5%",
                    transitionDelay: "1000ms",
                    animation: isVisible
                      ? "float-symbol 10s ease-in-out infinite"
                      : "none",
                  }}
                >
                  #
                </div>
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
                I gonna make my Move. <br /> I gonna make it soon.
                <br />& I'll do 'cause i want to do.
              </p>

              {/* Animated background on hover */}
              <div className="absolute inset-0 bg-gradient-to-l from-[#ed3411]/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>

              {/* Decorative line */}
              <div
                className="absolute -right-4 top-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent to-[#ed3411] opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  transform: "translateY(-50%)",
                  animation: "slide-in-right 0.5s ease-out",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid pattern */}
        <div
          className={`absolute inset-0 opacity-0 transition-opacity duration-2000 ${
            isVisible ? "opacity-5" : "opacity-0"
          }`}
          style={{
            backgroundImage: `
              linear-gradient(rgba(237, 52, 17, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(237, 52, 17, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            transitionDelay: "1200ms",
          }}
        ></div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-[#ed3411] rounded-full opacity-0 transition-all duration-1000 ${
              isVisible ? "opacity-20" : "opacity-0"
            }`}
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 12}%`,
              transitionDelay: `${1000 + i * 200}ms`,
              animation: isVisible
                ? `particle-float ${4 + i}s ease-in-out infinite`
                : "none",
              animationDelay: `${i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes tech-glow {
          0%,
          100% {
            text-shadow: 0 0 60px rgba(237, 52, 17, 0.6);
          }
          25% {
            text-shadow: 0 0 80px rgba(237, 52, 17, 0.8),
              0 0 100px rgba(237, 52, 17, 0.4), 0 0 120px rgba(237, 52, 17, 0.2);
          }
          50% {
            text-shadow: 0 0 100px rgba(237, 52, 17, 1),
              0 0 130px rgba(237, 52, 17, 0.6), 0 0 160px rgba(237, 52, 17, 0.3),
              0 0 200px rgba(237, 52, 17, 0.1);
          }
          75% {
            text-shadow: 0 0 80px rgba(237, 52, 17, 0.8),
              0 0 100px rgba(237, 52, 17, 0.4), 0 0 120px rgba(237, 52, 17, 0.2);
          }
        }

        @keyframes float-symbol {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateY(-10px) rotate(-3deg);
          }
          75% {
            transform: translateY(-30px) rotate(8deg);
          }
        }

        @keyframes particle-float {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          33% {
            transform: translateY(-20px) scale(1.2);
          }
          66% {
            transform: translateY(-10px) scale(0.8);
          }
        }

        @keyframes slide-in-right {
          0% {
            transform: translateX(-100%) translateY(-50%);
            opacity: 0;
          }
          100% {
            transform: translateX(0) translateY(-50%);
            opacity: 1;
          }
        }

        @keyframes letter-bounce {
          0%,
          100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
          50% {
            transform: translateY(-5px) rotate(2deg) scale(1.05);
          }
        }

        /* Individual letter hover effects */
        h1 span:hover {
          animation: letter-bounce 0.6s ease-in-out;
        }
      `}</style>
    </section>
  );
}
