import { useState, useRef } from "react";
import { VolumeX, Volume2 } from "lucide-react";

export default function Videos() {
  const [video1Muted, setVideo1Muted] = useState(true);
  const [video2Muted, setVideo2Muted] = useState(true);
  const [video1Loading, setVideo1Loading] = useState(false);
  const [video2Loading, setVideo2Loading] = useState(false);
  const video1Ref = useRef<HTMLVideoElement | null>(null);
  const video2Ref = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = (
    videoRef: React.RefObject<HTMLVideoElement | null>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (videoRef.current) {
      setLoading(true);
      
      // Load the video if it hasn't been loaded yet
      if (videoRef.current.readyState === 0) {
        videoRef.current.load();
      }
      
      // Play the video
      const playPromise = videoRef.current.play();
      
      // Handle any play errors
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Video play failed:', error);
          setLoading(false);
        });
      }
    }
  };

  const handleMouseLeave = (
    videoRef: React.RefObject<HTMLVideoElement | null>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setLoading(false);
    }
  };

  const toggleMute = (
    videoRef: React.RefObject<HTMLVideoElement | null>,
    isMuted: boolean,
    setMuted: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setMuted(!isMuted);
    }
  };

  return (
    <section className="py-16 px-6 md:px-12 lg:px-16 bg-black font-inter">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* First Video Div */}
        <div className="w-[99%] mx-auto relative group">
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer bg-black"
            onMouseEnter={() => handleMouseEnter(video1Ref, setVideo1Loading)}
            onMouseLeave={() => handleMouseLeave(video1Ref, setVideo1Loading)}
          >
            <video
              ref={video1Ref}
              className="w-full h-80 md:h-96 lg:h-[28rem] object-cover"
              muted={video1Muted}
              loop
              playsInline
              preload="none"
              poster="./Images/12.jpg"
              onPlaying={() => setVideo1Loading(false)}
            >
              <source src="./Videos/Sora 47.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Volume Control */}
            <button
              onClick={() => toggleMute(video1Ref, video1Muted, setVideo1Muted)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Toggle volume"
            >
              {video1Muted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>

            {/* Hover Overlay */}
          </div>
        </div>

        {/* Second Video Div */}
        <div className="w-[99%] mx-auto relative group">
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer bg-black"
            onMouseEnter={() => handleMouseEnter(video2Ref, setVideo2Loading)}
            onMouseLeave={() => handleMouseLeave(video2Ref, setVideo2Loading)}
          >
            <video
              ref={video2Ref}
              className="w-full h-80 md:h-96 lg:h-[28rem] object-cover"
              muted={video2Muted}
              loop
              playsInline
              preload="none"
              poster="./Images/11.jpg"
              onPlaying={() => setVideo2Loading(false)}
            >
              <source src="./Videos/Sora 48.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Volume Control */}
            <button
              onClick={() => toggleMute(video2Ref, video2Muted, setVideo2Muted)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Toggle volume"
            >
              {video2Muted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>

            {/* Hover Overlay */}
          </div>
        </div>
      </div>
    </section>
  );
}
