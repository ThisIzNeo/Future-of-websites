export const HeroSec = () => {
  return (
    <div className="h-screen flex justify-center z-20">
      <div className="z-20">
        <h1
          className="flex z-20 justify-center items-center
      text-center mt-20 z-20 text-9xl text-white font-black mx-auto"
        >
          RINGUS
        </h1>
        <p className="flex  z-20 justify-center w-96 text-center text-gray-500 mx-auto">
          Discover innovation at your fingertips. Ringus redefines wearable
          technology, combining functionality and elegance to bring you the
          future of smart rings today.
        </p>
        <div className="flex  z-20 justify-center mt-3">
          <a
            href="#details"
            className="border z-20 text-white px-10 py-4 rounded-full hover:bg-white hover:bg-opacity-35 transition-all"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};
