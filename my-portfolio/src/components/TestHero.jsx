import "../index.css";

const TestHero = () => {
  return (
    <div className="bg-texture flex items-center justify-center min-h-screen">
      <div className="text-center relative">
        <div className="absolute top-0 left-0 w-full flex justify-center"></div>
        <h1 className="mt-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">
          Portfolio
        </h1>
        <div className="rotate-text">
          <span className="p-2 sm:p-3 md:p-4 rounded-full">
            Frontend Developer
          </span>
        </div>
        <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mt-10">
          <button
            className="py-2 px-4 border border-black rounded-full hover:bg-gray-200"
            onClick={() =>
              window.open(
                "https://docs.google.com/presentation/d/12LJsZs-MW6vDvklOQwUMPFyxVBxbmxN7nhUfPH_p7OY/edit?usp=sharing",
                "_blank"
              )
            }
          >
            CV ↘
          </button>
          <button className="py-2 px-4 border border-black rounded-full hover:bg-custom-color-30">
            <a href="#about"> About ↘</a>
          </button>
          <button className="py-2 px-4 border border-black rounded-full hover:bg-custom-color-30">
            <a href="#skills">Skills ↘</a>
          </button>
          <button className="py-2 px-4 border border-black rounded-full hover:bg-custom-color-30">
            <a href="#projects"> Projects ↘</a>
          </button>

          <button className="py-2 px-4 border border-black rounded-full hover:bg-custom-color-30">
            <a href="#contact">Contact ↘</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestHero;
