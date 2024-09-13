import { useEffect } from "react";
import { useState } from "react";

import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import imagePerfil from "../assets/ProfileImage.jpeg";
import { HiMenu, HiX } from "react-icons/hi";

function Nav() {
  const [activeItem, setActiveItem] = useState("top");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="fixed top-0 w-full z-50">
      <nav
        className={`flex items-center justify-between p-4 shadow-md${
          isScrolled ? "bg-opacity-90" : "bg-opacity-100"
        }  backdrop-blur-sm`}
      >
        <div className="flex items-center">
          <img
            src={imagePerfil}
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover border-2 border-orange-500"
          />
          <h2 className="text-zinc-900 dark:text-orange-200 text-md font-semibold ml-3">
            Jorge Cisneros
          </h2>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            className="text-zinc-900 dark:text-orange-200"
            onClick={toggleMenu}
          >
            {isOpen ? (
              ""
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        <div
          className={`lg:flex lg:items-center lg:justify-end lg:space-x-4 fixed inset-0 h-screen lg:h-auto bg-zinc-950/90 lg:bg-inherit dark:bg-zinc-50/90 transition-transform duration-500 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } lg:translate-x-0`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-4 dark:text-zinc-900 text-orange-200 text-2xl lg:hidden"
          >
            <HiX size={25} />
          </button>
          <div className="dark:text-zinc-950 text-orange-200 font-semibold flex flex-col items-center justify-center w-full h-full  lg:flex-row lg:w-auto">
            <a
              href="#top"
              className={`hover:scale-110 sm:text-2xl hover:text-orange-500 px-4 py-2 transition opacity-90 ${
                activeItem === "inicio"
                  ? " bg-opacity-0   text-orange-500"
                  : ""
              }`}
              onClick={() => handleItemClick("inicio")}
            >
              Inicio
            </a>
            <a
              href="#proyectos"
              className={`hover:scale-110 hover:text-orange-500 px-4 py-2 transition opacity-90 ${
                activeItem === "proyectos"
                  ? "bg-white bg-opacity-0 rounded-full backdrop-blur-sm text-orange-500"
                  : ""
              }`}
              onClick={() => handleItemClick("proyectos")}
            >
              Proyectos
            </a>
            <a
              href="#sobre-mi"
              className={`hover:scale-110 hover:text-orange-500 px-4 py-2 transition opacity-90 ${
                activeItem === "sobre-mi"
                  ? "bg-white bg-opacity-0 rounded-full backdrop-blur-sm text-orange-500"
                  : ""
              }`}
              onClick={() => handleItemClick("sobre-mi")}
            >
              Sobre mí
            </a>
            <button
              className={`hover:scale-110 hover:text-orange-500 px-4 py-2 transition opacity-90 ${
                activeItem === "sun-dark"
                  ? "bg-white bg-opacity-0 rounded-full backdrop-blur-sm text-orange-500"
                  : ""
              }`}
              onClick={handleChangeTheme}
            >
              {theme === "dark" ? (
                <MdSunny className="w-6 h-6 mb-2" />
              ) : (
                <IoMdMoon className="w-6 h-6 mb-2" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
