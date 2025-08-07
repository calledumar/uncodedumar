import { ArrowRight } from "lucide-react";

export default function Birclix() {
  return (
    <section className="w-full bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Join <span className="text-[#ed3411]">Birclix</span>
        </h2>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-OvI-8X95sQQhnFsApeA5GBGTiiFiZ67gZM7NY7v2ZnUcOg/viewform?usp=sharing&ouid=115247161737824791541">
          <button className="group flex items-center space-x-2 bg-[#ed3411] hover:bg-[#ed3411]/80 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            <span className="text-lg">Get Started</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </a>
      </div>
    </section>
  );
}
