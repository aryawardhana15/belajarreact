import { useState } from "react";
import "remixicon/fonts/remixicon.css";

const navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleclick = () => {
    setToggle(!toggle);
    // console.log(toggle);
  };

  let menuactive = toggle ? "left-0" : "-left-full";
  return (
    <div className="navbar fixed w-full transision-all py-4">
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between ">
          <div className="logo">
            <h1 className="sm:text-2xl text-xl font-bold">Wardhana</h1>
          </div>
          <ul
            className={`flex lg:gap-12 md:flex-row md:shadow-none md:static md:p-0 md:m-0md:transision-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black gap-8 fixed ${menuactive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white transition-all`}
          >
            <li className="flex items-center gap-3">
              <i class="ri-home-2-line text-3xl md:hidden block"></i>
              <a href="#" className="font-medium opacity-75">
                Home
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i class="ri-information-line text-3xl md:hidden block"></i>
              <a href="#" className="font-medium opacity-75">
                Tentang Kami
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i class="ri-settings-3-line text-3xl md:hidden block"></i>
              <a href="#" className="font-medium opacity-75">
                Layanan
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i class="ri-image-line text-3xl md:hidden block"></i>
              <a href="#" className="font-medium opacity-75">
                Proyek
              </a>
            </li>
          </ul>
          <div className="social flex items-center gap-2">
            <a
              href="#"
              className="bg-sky-500 py-1 px-2 rounded-full text-white font-bold hover:bg-sky-700"
            >
              Social media
            </a>
            <i
              className="ri-menu-3-line text-3xl md:hidden block"
              onClick={handleclick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
