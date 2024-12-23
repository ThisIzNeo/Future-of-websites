
export const BuyOne = () => {
  return (
    <div id="order" className="buy-one flex translate-x-1/4 h-screen">
      <div className="flex flex-col justify-center text-white text-center mt-30 p-8">
        <p className="text-lg">Ringus Alerts</p>
        <h2 className="text-3xl font-bold my-7 bg-gradient-to-r from-violet-700 to-pink-700 bg-clip-text text-transparent">
          Smart Notifications, Instantly
        </h2>
        <p className="mx-auto w-2/5 mb-5">
          Stay in the loop with subtle, customizable alerts from Ringus. Whether
          it's a call, message, or app notification, Ringus ensures you're
          always connected with discreet vibrations and clear, instant feedback,
          keeping you informed without interrupting your flow.
        </p>
        <div className="z-20 my-5">
          <a
            href="/"
            className="border my-4 px-10 py-4 rounded-full hover:bg-white hover:bg-opacity-35 transition-all"
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
};
