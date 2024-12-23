
export const Details = () => {
  return (
    <div id="details" className=" details-section h-screen -translate-x-1/4">
      <div className="flex flex-col justify-center text-center text-white mt-30 p-8">
        <p className="text-lg">Ringus Material</p>
        <h2 className="text-3xl font-bold my-7 bg-gradient-to-r from-violet-700 to-pink-700 bg-clip-text text-transparent">
          Durable and Stylish
        </h2>
        <p className="mx-auto w-2/5 mb-5">
          Ringus is crafted from high-quality, durable materials that blend
          style and resilience. Its sleek design combines lightweight metals and
          scratch-resistant coatings, ensuring comfort and longevity. With a
          perfect balance of elegance and functionality, Ringus is built to
          seamlessly integrate into your everyday life while withstanding the
          rigors of modern living.
        </p>
        <div className="z-20 my-3">
          <a
            href="#order"
            className="z-20 border  px-10 py-4 rounded-full hover:bg-white hover:bg-opacity-35 transition-all"
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
};
