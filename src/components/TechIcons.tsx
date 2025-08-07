import { useState, useRef, useEffect } from "react";
import {
  SiTailwindcss,
  SiCplusplus,
  SiSharp,
  SiVite,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
} from "react-icons/si";
import {
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaLaravel,
  FaPhp,
  FaFigma,
  FaWordpress,
  FaElementor,
  FaWix,
} from "react-icons/fa";
import { Sparkles, Brain, Bot, BarChart3, GitBranch } from "lucide-react";

export default function TechIcons() {
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
        threshold: 0.1,
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

  const skills = [
    {
      name: "Gemini",
      icon: Sparkles,
      color: "text-yellow-400",
      hoverColor: "hover:text-yellow-300",
      category: "ai",
    },
    {
      name: "OpenAI",
      icon: Brain,
      color: "text-green-400",
      hoverColor: "hover:text-green-300",
      category: "ai",
    },
    {
      name: "Claude",
      icon: Bot,
      color: "text-purple-400",
      hoverColor: "hover:text-purple-300",
      category: "ai",
    },
    {
      name: "Python",
      icon: FaPython,
      color: "text-blue-400",
      hoverColor: "hover:text-blue-300",
      category: "programming",
    },
    {
      name: "JavaScript",
      icon: FaJs,
      color: "text-yellow-500",
      hoverColor: "hover:text-yellow-400",
      category: "programming",
    },
    {
      name: "C++",
      icon: SiCplusplus,
      color: "text-blue-600",
      hoverColor: "hover:text-blue-500",
      category: "programming",
    },
    {
      name: "C#",
      icon: SiSharp,
      color: "text-purple-500",
      hoverColor: "hover:text-purple-400",
      category: "programming",
    },
    {
      name: "R",
      icon: BarChart3,
      color: "text-blue-500",
      hoverColor: "hover:text-blue-400",
      category: "programming",
    },
    {
      name: "HTML",
      icon: FaHtml5,
      color: "text-orange-500",
      hoverColor: "hover:text-orange-400",
      category: "frontend",
    },
    {
      name: "CSS",
      icon: FaCss3Alt,
      color: "text-blue-500",
      hoverColor: "hover:text-blue-400",
      category: "frontend",
    },
    {
      name: "Bootstrap",
      icon: FaBootstrap,
      color: "text-purple-600",
      hoverColor: "hover:text-purple-500",
      category: "frontend",
    },
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      color: "text-cyan-400",
      hoverColor: "hover:text-cyan-300",
      category: "frontend",
    },
    {
      name: "React",
      icon: FaReact,
      color: "text-cyan-400",
      hoverColor: "hover:text-cyan-300",
      category: "frontend",
    },
    {
      name: "Laravel",
      icon: FaLaravel,
      color: "text-red-500",
      hoverColor: "hover:text-red-400",
      category: "backend",
    },
    {
      name: "Git",
      icon: GitBranch,
      color: "text-orange-500",
      hoverColor: "hover:text-orange-400",
      category: "tools",
    },
    {
      name: "PHP",
      icon: FaPhp,
      color: "text-indigo-400",
      hoverColor: "hover:text-indigo-300",
      category: "backend",
    },
    {
      name: "Vite",
      icon: SiVite,
      color: "text-yellow-400",
      hoverColor: "hover:text-yellow-300",
      category: "tools",
    },
    {
      name: "Figma",
      icon: FaFigma,
      color: "text-pink-400",
      hoverColor: "hover:text-pink-300",
      category: "design",
    },
    {
      name: "Photoshop",
      icon: SiAdobephotoshop,
      color: "text-blue-600",
      hoverColor: "hover:text-blue-500",
      category: "design",
    },
    {
      name: "Illustrator",
      icon: SiAdobeillustrator,
      color: "text-orange-600",
      hoverColor: "hover:text-orange-500",
      category: "design",
    },
    {
      name: "Premier Pro",
      icon: SiAdobepremierepro,
      color: "text-purple-600",
      hoverColor: "hover:text-purple-500",
      category: "design",
    },
    {
      name: "WordPress",
      icon: FaWordpress,
      color: "text-blue-500",
      hoverColor: "hover:text-blue-400",
      category: "cms",
    },
    {
      name: "Elementor",
      icon: FaElementor,
      color: "text-pink-500",
      hoverColor: "hover:text-pink-400",
      category: "cms",
    },
    {
      name: "Wix Studio",
      icon: FaWix,
      color: "text-yellow-500",
      hoverColor: "hover:text-yellow-400",
      category: "cms",
    },
  ];

  type Category =
    | "ai"
    | "programming"
    | "frontend"
    | "backend"
    | "design"
    | "tools"
    | "cms";

  const getCategoryBackground = (category: Category | string) => {
    const backgrounds: Record<Category, string> = {
      ai: "hover:bg-gradient-to-r hover:from-purple-900/50 hover:to-pink-900/50",
      programming:
        "hover:bg-gradient-to-r hover:from-blue-900/50 hover:to-cyan-900/50",
      frontend:
        "hover:bg-gradient-to-r hover:from-orange-900/50 hover:to-red-900/50",
      backend:
        "hover:bg-gradient-to-r hover:from-green-900/50 hover:to-emerald-900/50",
      design:
        "hover:bg-gradient-to-r hover:from-pink-900/50 hover:to-purple-900/50",
      tools:
        "hover:bg-gradient-to-r hover:from-yellow-900/50 hover:to-orange-900/50",
      cms: "hover:bg-gradient-to-r hover:from-indigo-900/50 hover:to-blue-900/50",
    };
    return (
      (backgrounds as Record<string, string>)[category] || "hover:bg-gray-700"
    );
  };

  type Skill = {
    name: string;
    icon: React.ElementType | string;
    color: string;
    hoverColor: string;
    category: string;
  };

  const renderIcon = (skill: Skill) => {
    if (typeof skill.icon === "string") {
      return (
        <span className="text-2xl md:text-3xl lg:text-4xl">{skill.icon}</span>
      );
    } else {
      const IconComponent = skill.icon;
      return (
        <IconComponent
          className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ${skill.color} ${skill.hoverColor} transition-all duration-300 group-hover:scale-125 relative z-10 group-hover:drop-shadow-lg`}
        />
      );
    }
  };

  return (
    <section
      ref={techRef}
      className="py-16 px-6 md:px-12 lg:px-16 bg-black font-inter overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-4 md:gap-6">
          {skills.map((skill, index) => {
            const delay = index * 50; // Stagger animations by 50ms

            return (
              <div
                key={index}
                className={`group relative bg-gray-900 rounded-xl p-4 md:p-5 flex flex-col items-center justify-center transition-all duration-500 cursor-pointer aspect-square overflow-hidden ${getCategoryBackground(
                  skill.category
                )} ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-75"
                }
                hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-900/50
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-full before:transition-transform before:duration-700 hover:before:translate-x-full
                after:absolute after:inset-0 after:rounded-xl after:border after:border-gray-700 after:scale-110 after:opacity-0 hover:after:scale-125 hover:after:opacity-30 after:transition-all after:duration-500
                `}
                style={{
                  transitionDelay: isVisible ? `${delay}ms` : "0ms",
                  animation: isVisible
                    ? `tech-bounce 0.6s ease-out ${delay}ms both`
                    : "none",
                }}
              >
                {/* Rotating background effect */}
                <div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    animation: "spin 8s linear infinite",
                    animationPlayState: "paused",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.animationPlayState =
                      "running")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.animationPlayState =
                      "paused")
                  }
                ></div>

                {/* Pulsing ring */}
                <div
                  className="absolute inset-0 rounded-xl border-2 border-gray-600 opacity-0 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500"
                  style={{
                    animation: "pulse 2s infinite",
                    animationPlayState: "paused",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.animationPlayState =
                      "running")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.animationPlayState =
                      "paused")
                  }
                ></div>

                <div
                  className={`${skill.color} ${skill.hoverColor} transition-all duration-300 group-hover:scale-125 relative z-10`}
                  style={{
                    filter: "drop-shadow(0 0 8px currentColor)",
                    animation: isVisible
                      ? `icon-glow 2s ease-in-out infinite alternate`
                      : "none",
                    animationDelay: `${delay + 500}ms`,
                  }}
                >
                  {renderIcon(skill)}
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      top: "15%",
                      left: "20%",
                      animation: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
                      animationDelay: "0s",
                    }}
                  ></div>
                  <div
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      top: "70%",
                      right: "25%",
                      animation: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
                      animationDelay: "0.3s",
                    }}
                  ></div>
                  <div
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      bottom: "20%",
                      left: "15%",
                      animation: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
                      animationDelay: "0.6s",
                    }}
                  ></div>
                </div>

                {/* Enhanced tooltip */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-20 shadow-xl border border-gray-700">
                  {skill.name}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45 border-l border-t border-gray-700"></div>
                </div>

                {/* Category indicator dot */}
                <div
                  className={`absolute top-2 right-2 w-2 h-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 ${
                    skill.category === "ai"
                      ? "bg-purple-400"
                      : skill.category === "programming"
                      ? "bg-blue-400"
                      : skill.category === "frontend"
                      ? "bg-orange-400"
                      : skill.category === "backend"
                      ? "bg-green-400"
                      : skill.category === "design"
                      ? "bg-pink-400"
                      : skill.category === "tools"
                      ? "bg-yellow-400"
                      : "bg-indigo-400"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes tech-bounce {
          0% {
            opacity: 0;
            transform: translateY(2rem) scale(0.3) rotate(10deg);
          }
          40% {
            transform: translateY(-0.3rem) scale(1.1) rotate(-2deg);
          }
          60% {
            transform: translateY(0.1rem) scale(0.95) rotate(1deg);
          }
          80% {
            transform: translateY(-0.05rem) scale(1.02) rotate(-0.5deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }

        @keyframes icon-glow {
          0% {
            filter: drop-shadow(0 0 8px currentColor);
          }
          100% {
            filter: drop-shadow(0 0 12px currentColor)
              drop-shadow(0 0 20px currentColor);
          }
        }

        @keyframes float-particles {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }

        .group:hover .animate-float-particles {
          animation: float-particles 2s ease-in-out infinite;
        }

        /* Smooth grid animation */
        .grid > div:nth-child(even) {
          animation-delay: 25ms;
        }

        .grid > div:nth-child(3n) {
          animation-delay: 75ms;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1.1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.15);
          }
        }

        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
