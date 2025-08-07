import { useState, useEffect, useRef } from "react";
import { ExternalLink, Linkedin } from "lucide-react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const contactIcons = [
    {
      Component: Linkedin,
      delay: "100ms",
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammadumarriaz981817",
    },
    {
      Component: FaWhatsapp,
      delay: "200ms",
      name: "WhatsApp",
      href: " https://wa.me/923707353730",
    },
    {
      Component: FaEnvelope,
      delay: "300ms",
      name: "Email",
      href: " mailto:m.umarriaz1@outlook.com?subject=Let's%20Create%20Something%20Epic&body=Hey%20Zargonaut%2C%20I%20want%20to%20collaborate%20with%20Birclix!",
    },
    {
      Component: ExternalLink,
      delay: "400ms",
      name: "External Link",
      href: "https://linktr.ee/uncodedumar",
    },
  ];

  return (
    <section
      id="Contact"
      ref={contactRef}
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
                  : "opacity-0 -translate-x-12 scale-95"
              }`}
              style={{
                textShadow: isVisible
                  ? "0 0 40px rgba(237, 52, 17, 0.4)"
                  : "none",
                animation: isVisible
                  ? "text-glow 4s ease-in-out infinite"
                  : "none",
              }}
            >
              Contact
            </h1>
            <p
              className={`text-lg md:text-xl lg:text-2xl text-white font-normal max-w-2xl tracking-tight transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{
                transitionDelay: isVisible ? "300ms" : "0ms",
              }}
            >
              I’m not looking for followers—I’m looking for firestarters. If you
              think, build, and dream like a rebel, let’s connect and create
              something the world isn’t ready for
            </p>
          </div>

          {/* Right div with contact icons */}
          {/* Right div with contact icons */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-6 md:gap-8">
              {contactIcons.map(({ Component, delay, name, href }, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative"
                  >
                    <div
                      className={`w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-transparent border-2 border-[#ed3411] rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer relative overflow-hidden ${
                        isVisible
                          ? "opacity-100 translate-y-0 rotate-0"
                          : "opacity-0 translate-y-12 rotate-45"
                      }
            hover:bg-[#ed3411] hover:border-[#ff4d2a] hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#ed3411]/50
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full before:transition-transform before:duration-700 hover:before:translate-x-full
            `}
                      style={{
                        transitionDelay: isVisible ? delay : "0ms",
                        animation: isVisible
                          ? `bounce-in-contact 0.8s ease-out ${delay} both`
                          : "none",
                      }}
                    >
                      <Component className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#ed3411] group-hover:text-white transition-all duration-300 group-hover:scale-110 relative z-10" />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-[#ed3411] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-20">
                      {name}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#ed3411] rotate-45"></div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      {/* Bottom paragraph with animation */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end">
          <div
            className={`w-[300px] transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{
              transitionDelay: isVisible ? "600ms" : "0ms",
            }}
          >
            <p className="text-base text-right md:text-lg text-gray-300 font-light tracking-tight hover:text-white transition-colors duration-300">
              Have an idea, a vision, or just good energy? I’m always open to
              collaborate, connect, or spark the next big thing.
            </p>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes text-glow {
          0%,
          100% {
            text-shadow: 0 0 40px rgba(237, 52, 17, 0.4);
          }
          50% {
            text-shadow: 0 0 60px rgba(237, 52, 17, 0.6),
              0 0 80px rgba(237, 52, 17, 0.3), 0 0 100px rgba(237, 52, 17, 0.1);
          }
        }

        @keyframes bounce-in-contact {
          0% {
            opacity: 0;
            transform: translateY(3rem) rotate(45deg) scale(0.3);
          }
          40% {
            transform: translateY(-0.5rem) rotate(-5deg) scale(1.1);
          }
          60% {
            transform: translateY(0.2rem) rotate(2deg) scale(0.95);
          }
          80% {
            transform: translateY(-0.1rem) rotate(-1deg) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotate(0deg) scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .group:hover .before\\:animate-shimmer::before {
          animation: shimmer 0.7s ease-out;
        }
      `}</style>
    </section>
  );
}
