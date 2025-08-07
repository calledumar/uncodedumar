import { useRef, useEffect } from "react";

interface MediaItem {
  type: "image" | "video";
  src: string;
  width: string;
}

export default function Genai2() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // Auto-play all videos when component mounts
    videoRefs.current.forEach((video) => {
      if (video) {
        video.play().catch((error) => {
          console.log("Video autoplay failed:", error);
        });
      }
    });
  }, []);

  const mediaItems: MediaItem[] = [
    // Row 1: Square + Rectangle + Square
    {
      type: "image",
      src: "./Images/img7.jpg",
      width: "25%",
    },
    { type: "video", src: "./Videos/1.mp4", width: "50%" },
    {
      type: "image",
      src: "./Images/image2.png",
      width: "25%",
    },

    // Row 2: Rectangle + Square + Rectangle
    { type: "video", src: "./Videos/2.mp4", width: "40%" },
    {
      type: "image",
      src: "./Images/img6.jpg",
      width: "20%",
    },
    { type: "video", src: "./Videos/3.mp4", width: "40%" },

    // Row 3: Square + Rectangle + Rectangle + Square
    {
      type: "image",
      src: "./Images/image4.png",
      width: "20%",
    },
    { type: "video", src: "./Videos/4.mp4", width: "35%" },
    {
      type: "image",
      src: "./Images/image3.png",
      width: "25%",
    },
    { type: "video", src: "./Videos/5.mp4", width: "20%" },
  ];

  let videoIndex = 0;

  const renderMediaItem = (item: MediaItem, index: number) => {
    if (item.type === "video") {
      const currentVideoIndex = videoIndex;
      videoIndex++;

      return (
        <div
          key={index}
          className="relative overflow-hidden"
          style={{ width: item.width }}
        >
          <video
            ref={(el) => {
              videoRefs.current[currentVideoIndex] = el;
            }}
            className="w-full h-48 md:h-64 lg:h-80 object-cover"
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
          >
            <source src={item.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    } else {
      return (
        <div
          key={index}
          className="relative overflow-hidden"
          style={{ width: item.width }}
        >
          <img
            src={item.src}
            alt={`Media item ${index + 1}`}
            className="w-full h-48 md:h-64 lg:h-80 object-cover"
          />
        </div>
      );
    }
  };

  return (
    <section className="w-full font-inter bg-black">
      {/* Row 1: Square + Rectangle + Square */}
      <div className="flex w-full">
        {mediaItems
          .slice(0, 3)
          .map((item, index) => renderMediaItem(item, index))}
      </div>

      {/* Row 2: Rectangle + Square + Rectangle */}
      <div className="flex w-full">
        {mediaItems
          .slice(3, 6)
          .map((item, index) => renderMediaItem(item, index + 3))}
      </div>

      {/* Row 3: Square + Rectangle + Rectangle + Square */}
      <div className="flex w-full">
        {mediaItems
          .slice(6, 10)
          .map((item, index) => renderMediaItem(item, index + 6))}
      </div>
    </section>
  );
}
