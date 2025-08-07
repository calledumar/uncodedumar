import { useState, useEffect, useRef } from "react";
import { Linkedin, Instagram, ExternalLink, Github } from "lucide-react";
import { SiBehance } from "react-icons/si";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const socialIcons = [
    {
      Component: Linkedin,
      delay: "delay-100",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammadumarriaz981817",
    },
    {
      Component: Instagram,
      delay: "delay-200",
      label: "Instagram",
      href: "https://www.instagram.com/uncodedumar/",
    },
    {
      Component: FaWhatsapp,
      delay: "delay-300",
      label: "WhatsApp",
      href: " https://wa.me/923707353730",
    },
    {
      Component: FaEnvelope,
      delay: "delay-400",
      label: "Email",
      href: " mailto:m.umarriaz1@outlook.com?subject=Let's%20Create%20Something%20Epic&body=Hey%20Zargonaut%2C%20I%20want%20to%20collaborate%20with%20Birclix!",
    },
    {
      Component: SiBehance,
      delay: "delay-500",
      label: "Behance",
      href: "https://www.behance.net/chmuhammadumar1",
    },
    {
      Component: Github,
      delay: "delay-600",
      label: "GitHub",
      href: "https://github.com/calledumar",
    },
    {
      Component: ExternalLink,
      delay: "delay-700",
      label: "Linktree",
      href: "https://linktr.ee/uncodedumar",
    },
  ];

  return (
    <section
      ref={footerRef}
      className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-black font-inter overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Content Container */}
        <div className="flex flex-col  space-y-8 sm:space-y-10 md:space-y-12">
          {/* "Bye" Title */}
          <div className="w-full">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-[#ed3411] leading-tight tracking-tight transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
              style={{
                textShadow: isVisible
                  ? "0 0 30px rgba(237, 52, 17, 0.3)"
                  : "none",
                animation: isVisible
                  ? "pulse-glow 3s ease-in-out infinite"
                  : "none",
              }}
            >
              Bye
            </h1>
          </div>

          {/* Social Icons Section */}
          <div className="w-full">
            {/* Logo and Social Icons Container */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
              {/* Logo */}
              <a href="https//:birclix.vercel.app"></a>
              <div
                className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 bg-transparent rounded-full flex items-center justify-center transition-all duration-1000 ease-out hover:scale-125 cursor-pointer ${
                  isVisible
                    ? "opacity-100 translate-y-0 rotate-0"
                    : "opacity-0 translate-y-8 -rotate-12"
                }`}
              >
                <img
                  src="./Images/BirclixLogo.png"
                  alt="Birclix Logo"
                  className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-15 lg:h-15 object-contain transition-all duration-500 ${
                    isVisible ? "filter-none" : "filter blur-sm"
                  }`}
                />
              </div>

              {/* Social Icons Grid - Responsive Layout */}
              <div className="flex justify-center">
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                  {socialIcons.map(
                    ({ Component, delay, label, href }, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center group"
                      >
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div
                            className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 bg-transparent border-2 border-[#ed3411] rounded-full flex items-center justify-center hover:bg-[#ed3411] hover:shadow-lg hover:shadow-[#ed3411]/50 transition-all duration-500 hover:scale-110 hover:-translate-y-1 cursor-pointer ${
                              isVisible
                                ? `opacity-100 translate-y-0 scale-100 ${delay}`
                                : "opacity-0 translate-y-12 scale-75"
                            }`}
                            style={{
                              transitionDelay: isVisible
                                ? `${(index + 1) * 100}ms`
                                : "0ms",
                              animation: isVisible
                                ? `bounce-in 0.6s ease-out ${
                                    (index + 1) * 100
                                  }ms both`
                                : "none",
                            }}
                            aria-label={label}
                          >
                            <Component className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-[#ed3411] group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                          </div>
                        </a>

                        <span className="hidden sm:block mt-2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          {label}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Labels Row - Only visible on small screens when space is limited */}
            <div className="sm:hidden w-full">
              <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500">
                {socialIcons.slice(0, 4).map(({ label }, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-800/30 rounded-md"
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500 mt-2">
                {socialIcons.slice(4).map(({ label }, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-800/30 rounded-md"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text Section */}
        <div className="w-full max-w-4xl mx-auto px-2 sm:px-4">
          <div className="flex flex-col items-center space-y-4 sm:space-y-6">
            {/* Main footer text */}
            <div className="text-center">
              <p
                className={`text-sm sm:text-base md:text-lg font-light text-gray-200 leading-relaxed transition-all duration-1000 ease-out px-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{
                  transitionDelay: isVisible ? "800ms" : "0ms",
                }}
              >
                Crafted with purpose, powered by creativity, and driven by
                innovation. Every pixel, every interaction, every idea here is
                built to inspire and ignite.
              </p>
            </div>

            {/* Copyright text */}
            <div className="text-center">
              <p
                className={`text-xs sm:text-sm text-gray-400 transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isVisible ? "1000ms" : "0ms",
                }}
              >
                © 2025 Muhammad Umar Riaz. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Custom styles for animations */}
      <style>{`
        @keyframes pulse-glow {
          0%,
          100% {
            text-shadow: 0 0 20px rgba(237, 52, 17, 0.3);
          }
          50% {
            text-shadow: 0 0 30px rgba(237, 52, 17, 0.5),
              0 0 50px rgba(237, 52, 17, 0.2);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: translateY(2rem) scale(0.3);
          }
          50% {
            transform: translateY(-0.3rem) scale(1.05);
          }
          70% {
            transform: translateY(0.15rem) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .delay-100 {
          transition-delay: 100ms;
        }
        .delay-200 {
          transition-delay: 200ms;
        }
        .delay-300 {
          transition-delay: 300ms;
        }
        .delay-400 {
          transition-delay: 400ms;
        }
        .delay-500 {
          transition-delay: 500ms;
        }
        .delay-600 {
          transition-delay: 600ms;
        }
        .delay-700 {
          transition-delay: 700ms;
        }

        /* Custom responsive utilities for better control */
        @media (max-width: 640px) {
          @keyframes pulse-glow {
            0%,
            100% {
              text-shadow: 0 0 15px rgba(237, 52, 17, 0.3);
            }
            50% {
              text-shadow: 0 0 25px rgba(237, 52, 17, 0.4);
            }
          }

          @keyframes bounce-in {
            0% {
              opacity: 0;
              transform: translateY(1.5rem) scale(0.5);
            }
            50% {
              transform: translateY(-0.2rem) scale(1.03);
            }
            70% {
              transform: translateY(0.1rem) scale(0.97);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        }
      `}</style>
    </section>
  );
}
