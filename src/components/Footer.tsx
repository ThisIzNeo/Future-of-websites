
export const Footer = () => {
  return (
    <div className=" z-20">
      <div className="bg-zinc-950 z-20 text-gray-300 py-8">
        <div className="max-w-7xl z-20 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center">
            {/* Logo */}
            <div className="mb-4 z-20 sm:mb-0">
              <img className="h-8 z-20" src="/LogoRingus.png" alt="" />
            </div>

            {/* Navigation Links */}
            <ul className="flex z-20 flex-wrap gap-6 mb-4 sm:mb-0">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-white transition">
                  Support
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex z-20 gap-4">
              <a
                href="https://github.com/ThisIzNeo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://instagram.com/thisizneo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/menasri-younes-560aa2319/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t z-20 border-gray-700 my-4"></div>

          {/* Copyright */}
          <p className="flex justify-center text-center z-20 text-sm">
            &copy; {new Date().getFullYear()} AuraX. All rights reserved.
            Developed by{" "}
            <span className="text-blue-600 ml-1 z-30 hover:text-blue-500">
              <a className="z-20" href="https://www.github.com/thisizneo">
                ThisIzNeo
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
