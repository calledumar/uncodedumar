

export default function Header() {
  return (
    <>
      <header
        id="Hero"
        className="relative h-screen w-full bg-cover bg-center bg-no-repeat font-inter"
        style={{
          backgroundImage: "url(./Images/hero1.jpg)",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content Container */}
        <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-12 lg:p-16">
          <div className="flex flex-col items-center text-center md:items-end md:text-right text-white">
            {/* Main heading */}
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl xl:text-7xl font-inter tracking-tight">
              Muhammad
              <br />
              Umar Riaz
            </h1>

            {/* First paragraph */}
            <p className="max-w-2xl italic text-lg text-[#ed3411] md:text-xl lg:text-2xl font-inter tracking-tight">
              CEO & Founder{" "}
              <a
                className="transition-all duration-200 hover:text-gray-300"
                href="#"
              >
                @BIRCLIX
              </a>
              <br />
              Artificial Intelligence Engineer
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
