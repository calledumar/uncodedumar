

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative">
        {/* Main spinning circles */}
        <div className="absolute animate-spin">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-16 h-16 border-4 border-[#ed3411] rounded-full"
              style={{
                animation: `spin ${2 + i * 0.5}s linear infinite`,
                opacity: 0.7 - i * 0.2,
                transform: `scale(${1 + i * 0.2})`,
              }}
            />
          ))}
        </div>

        {/* Sparkles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute w-2 h-2 bg-[#ed3411] rounded-full"
            style={{
              animation: `sparkle 1.5s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
              transform: `rotate(${i * 45}deg) translateX(30px)`,
            }}
          />
        ))}

        {/* Center dot */}
        <div className="w-4 h-4 bg-[#ed3411] rounded-full animate-pulse" />
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes sparkle {
          0% {
            transform: rotate(${Math.random() * 360}deg) translateX(30px)
              scale(1);
            opacity: 0;
          }
          50% {
            transform: rotate(${Math.random() * 360}deg) translateX(60px)
              scale(1.5);
            opacity: 1;
          }
          100% {
            transform: rotate(${Math.random() * 360}deg) translateX(90px)
              scale(0);
            opacity: 0;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
