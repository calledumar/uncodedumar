import { useState } from "react";
import { ExternalLink } from "lucide-react";

export default function ProjectDisplay() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const imageData = [
    {
      title: "Unreal engine Zombie Shooting game",
      link: "https://github.com/calledumar",
      width: "60%",
    },
    {
      title: "C++ Library management system",
      link: "https://github.com/calledumar",
      width: "40%",
    },
    { title: "Nexvuo", link: "https://www.figma.com/design/0Lg70ggIeoy6clr8CdASZO/Nexuvo?node-id=0-1&t=otIgwHUFhzPD1Pmq-1", width: "33.33%" },
    { title: "Selo", link: "https://www.figma.com/design/SUGVfamKTc3sSnWcZVKuY6/Selo?node-id=0-1&t=moChB1CnG8BXJRDp-1", width: "33.33%" },
    { title: "Flickfix", link: "https://www.figma.com/design/uJk3eaOIBIJgCPoUs3xh8t/FitFlick?node-id=0-1&t=Mio5oI3uLhtnctkU-1", width: "33.33%" },
    { title: "Motifi", link: "https://www.figma.com/design/7AuX8hUcMyAnFvm1q0QtYb/Motifi?node-id=0-1&t=AXX0KgpTMWMiADtj-1", width: "40%" },
    { title: "Virtux", link: "https://www.figma.com/design/gcrocqD2CHwgvA6aT07iri/Open-Ended-Plaab?node-id=0-1&t=ldVFGCn3vNXzN9Ab-1", width: "60%" },
  ];

  return (
    <section className="w-full font-inter bg-black">
      {/* First Row: 60% + 40% */}
      <div className="flex w-full">
        {imageData.slice(0, 2).map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden"
            style={{ width: image.width }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={`/Images/${index + 1}.png`}
              alt={image.title}
              className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Hover Overlay with Title and Link */}
            <div
              className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                hoveredImage === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <h3 className="text-white font-semibold text-lg md:text-xl bg-black/50 px-3 py-2 rounded-lg backdrop-blur-sm">
                  {image.title}
                </h3>
                <a
                  href={image.link}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open external link"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row: 33.33% + 33.33% + 33.33% */}
      <div className="flex w-full">
        {imageData.slice(2, 5).map((image, index) => {
          const imageIndex = index + 2;
          return (
            <div
              key={imageIndex}
              className="relative group cursor-pointer overflow-hidden"
              style={{ width: image.width }}
              onMouseEnter={() => handleMouseEnter(imageIndex)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={`/Images/${imageIndex + 1}.png`}
                alt={image.title}
                className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay with Title and Link */}
              <div
                className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                  hoveredImage === imageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <h3 className="text-white font-semibold text-base md:text-lg bg-black/50 px-3 py-2 rounded-lg backdrop-blur-sm">
                    {image.title}
                  </h3>
                  <a
                    href={image.link}
                    className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open external link"
                  >
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Third Row: 40% + 60% */}
      <div className="flex w-full">
        {imageData.slice(5, 7).map((image, index) => {
          const imageIndex = index + 5;
          return (
            <div
              key={imageIndex}
              className="relative group cursor-pointer overflow-hidden"
              style={{ width: image.width }}
              onMouseEnter={() => handleMouseEnter(imageIndex)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={`/Images/${imageIndex + 1}.png`}
                alt={image.title}
                className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay with Title and Link */}
              <div
                className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                  hoveredImage === imageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <h3 className="text-white font-semibold text-lg md:text-xl bg-black/50 px-3 py-2 rounded-lg backdrop-blur-sm">
                    {image.title}
                  </h3>
                  <a
                    href={image.link}
                    className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open external link"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
