
export const Header = () => {
  return (
    <div>
      <div className="w-screen mt-5 ">
        <div className="flex items-center justify-center mx-auto p-2 border border-gray-600 rounded-full backdrop-blur-xl bg-slate-950 bg-opacity-50  w-5/12">
          <div className="logo">
            <a href="/">
              <img className="h-6" src="/LogoRingus.png" alt="AuraX" />
            </a>
          </div>
          <div className="font-medium text-white z-20">
            <a
              href=""
              className="mx-2 hover:bg-slate-300 hover:bg-opacity-10 p-3 rounded-lg transition-all"
            >
              Home
            </a>
            <a
              href=""
              className="mx-2 hover:bg-slate-300 hover:bg-opacity-10 p-3 rounded-lg transition-all"
            >
              Shop
            </a>
            <a
              href=""
              className="mx-2 hover:bg-slate-300 hover:bg-opacity-10 p-3 rounded-lg transition-all"
            >
              About
            </a>
            <a
              href=""
              className="mx-2 hover:bg-slate-300 hover:bg-opacity-10 p-3 rounded-lg transition-all"
            >
              Contact
            </a>
          </div>
          <div className="flex">
            <div className="mx-2 hover:bg-slate-300 hover:bg-opacity-10 p-3 rounded-lg">
              <img src="/search.svg" alt="" />
            </div>
            <div className="mx-2 hover:bg-slate-300 hover:bg-opacity-10 p-3  rounded-lg">
              <img src="/cart.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
