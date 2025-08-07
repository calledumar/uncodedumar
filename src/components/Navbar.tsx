import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md py-6 shadow-2xl md:top-6 md:rounded-2xl lg:max-w-screen-lg backdrop-blur-2xl"
        style={{
          backgroundColor: "rgba(97, 89, 89, 0.4)",
          backdropFilter: "blur(16px) saturate(180%) brightness(1.1)",
          WebkitBackdropFilter: "blur(16px) saturate(180%) brightness(1.1)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backgroundImage: `
            linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(0, 0, 0, 0.1) 100%),
            radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
          `,
          boxShadow: `
            0 8px 32px 0 rgba(31, 38, 135, 0.37),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 1px 0 rgba(255, 255, 255, 0.05)
          `,
        }}
      >
        <div className="px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex shrink-0">
              <a
                aria-current="page"
                className="flex items-center"
                href="https://birclix.vercel.app/"
              >
                <img
                  className="h-7 w-auto drop-shadow-sm"
                  src="./Images/BirclixLogo.png"
                  alt="Logo"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <a
                aria-current="page"
                className="inline-block px-2 text-lg font-medium text-white/90 transition-all duration-200 hover:text-white hover:drop-shadow-sm font-inter "
                href="#Hero"
              >
                Home
              </a>
              <a
                className="inline-block px-2 text-lg font-medium text-white/90 transition-all duration-200 hover:text-white hover:drop-shadow-sm font-inter"
                href="#Myself"
              >
                About
              </a>
              <a
                className="inline-block px-2 text-lg font-medium text-white/90 transition-all duration-200 hover:text-white hover:drop-shadow-sm font-inter "
                href="#Projects"
              >
                Projects
              </a>
              <a
                className="inline-block px-2 text-lg font-medium text-white/90 transition-all duration-200 hover:text-white hover:drop-shadow-sm font-inter"
                href="#Contact"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center rounded-md p-2 text-white/80 transition-all duration-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 backdrop-blur-sm"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 drop-shadow-sm" />
                ) : (
                  <Menu className="h-5 w-5 drop-shadow-sm" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div
              className="mt-3 pt-3 md:hidden rounded-lg"
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="flex flex-col space-y-2">
                <a
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-all duration-200 hover:text-white hover:bg-white/10 font-inter backdrop-blur-sm"
                  href="#Hero"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-all duration-200 hover:text-white hover:bg-white/10 font-inter backdrop-blur-sm"
                  href="#Myself"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-all duration-200 hover:text-white hover:bg-white/10 font-inter backdrop-blur-sm"
                  href="#Projects"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-all duration-200 hover:text-white hover:bg-white/10 font-inter backdrop-blur-sm"
                  href="#Contact"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
