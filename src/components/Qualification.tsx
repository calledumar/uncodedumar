export default function Qualification() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-16 bg-black font-inter">
      <div className="max-w-7xl m-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 lg:gap-16 group cursor-pointer transition-all duration-500 hover:bg-gray-900/30 rounded-xl p-6 hover:shadow-2xl hover:shadow-blue-500/10">
          {/* Small Image */}
          <div className="flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
            <img
              src="./Images/NiitLogo.png"
              alt="Content Image"
              className="w-30 h-30 md:w-40 md:h-40 lg:w-40 lg:h-40 object-cover rounded-lg shadow-lg transition-all duration-500 group-hover:shadow-blue-500/30 group-hover:shadow-xl"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left transition-all duration-500 group-hover:translate-x-2">
            <h3 className="text-1xl md:text-1xl lg:text-2xl font-bold text-white leading-tight mb-4 transition-all duration-300 group-hover:text-blue-400 group-hover:scale-105">
              Bachelors of Artificial Intelligence | Batch 24
            </h3>

            <h3 className="text-1xl md:text-1xl lg:text-1xl font-bold text-gray-100 leading-tight mb-6 transition-all duration-300 group-hover:text-gray-50">
              NASTP Institute of Information Technology, Delta
            </h3>

            <p className="text-base text-gray-300 leading-relaxed max-w-3xl transition-all duration-300 group-hover:text-gray-200 group-hover:leading-loose">
              This is a paragraph that provides detailed information about the
              content. It flows naturally alongside the image and headings,
              creating a balanced and visually appealing layout that works well
              across all device sizes.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl m-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 lg:gap-16 group cursor-pointer transition-all duration-500 hover:bg-gray-900/30 rounded-xl p-6 hover:shadow-2xl hover:shadow-red-500/10">
          {/* Small Image */}
          <div className="flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
            <img
              src="./Images/GCULogo.jpg"
              alt="Content Image"
              className="w-30 h-30 md:w-40 md:h-40 lg:w-40 lg:h-40 object-cover rounded-lg shadow-lg transition-all duration-500 group-hover:shadow-red-500/30 group-hover:shadow-xl"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left transition-all duration-500 group-hover:translate-x-2">
            <h3 className="text-1xl md:text-1xl lg:text-2xl font-bold text-white leading-tight mb-4 transition-all duration-300 group-hover:text-red-400 group-hover:scale-105">
              FSC (Pre Medical) | Batch 22
            </h3>

            <h3 className="text-1xl md:text-1xl lg:text-1xl font-bold text-gray-100 leading-tight mb-6 transition-all duration-300 group-hover:text-gray-50">
              GCU (Govt. College University), Lahore
            </h3>

            <p className="text-base text-gray-300 leading-relaxed max-w-3xl transition-all duration-300 group-hover:text-gray-200 group-hover:leading-loose">
              This is a paragraph that provides detailed information about the
              content. It flows naturally alongside the image and headings,
              creating a balanced and visually appealing layout that works well
              across all device sizes.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl m-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 lg:gap-16 group cursor-pointer transition-all duration-500 hover:bg-gray-900/30 rounded-xl p-6 hover:shadow-2xl hover:shadow-green-500/10">
          {/* Small Image */}
          <div className="flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
            <img
              src="./Images/APSACSLogo.png"
              alt="Content Image"
              className="w-30 h-30 md:w-40 md:h-40 lg:w-40 lg:h-40 object-cover rounded-lg shadow-lg transition-all duration-500 group-hover:shadow-green-500/30 group-hover:shadow-xl"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left transition-all duration-500 group-hover:translate-x-2">
            <h3 className="text-1xl md:text-1xl lg:text-2xl font-bold text-white leading-tight mb-4 transition-all duration-300 group-hover:text-green-400 group-hover:scale-105">
              Matriculation | Batch 20
            </h3>

            <h3 className="text-1xl md:text-1xl lg:text-1xl font-bold text-gray-100 leading-tight mb-6 transition-all duration-300 group-hover:text-gray-50">
              Army Public School (Boys & Girls), DHA
            </h3>

            <p className="text-base text-gray-300 leading-relaxed max-w-3xl transition-all duration-300 group-hover:text-gray-200 group-hover:leading-loose">
              This is a paragraph that provides detailed information about the
              content. It flows naturally alongside the image and headings,
              creating a balanced and visually appealing layout that works well
              across all device sizes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
