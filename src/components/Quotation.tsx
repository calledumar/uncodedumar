export default function Quotation() {
  return (
    <section className="min-h-screen w-full flex items-center justify-start px-6 md:px-12 lg:px-16 bg-black font-inter">
      <div className="max-w-7xl">
        <p
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-bolder leading-tight text-left"
          style={{
            background:
              "linear-gradient(135deg,#b71c1c 0%, #ed3411 25%, #ff6f00 50%, #ed3411 75%, #d32f2f 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            backgroundSize: "200% 200%",
            animation: "gradientShift 8s ease infinite",
          }}
        >
          You can have all You want,
          <br />
          Swinging Like Ali, knocking out bodies.
          <br />
          Standing on top like a Champion.
        </p>
      </div>

      <style>{`
        @keyframes gradientShift {
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
