import { useEffect } from "react";
import { useState } from "react";

function Nav() {
  const [activeItem, setActiveItem] = useState("top");
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div className="fixed top-0 z-50">
      <div className="flex justify-center items-center py-10 xl:w-[1120px] w-full px-3 mx-auto brightness-60">
        <nav className={`flex flex-row px-2 rounded-full text-orange-100 lg:text-xl md:text-lg py-3 backdrop-blur-sm overflow-hidden transition duration-1000 ${isScrolled ? 'bg-white bg-opacity-5 ' : ''}`}>
          <a
            href="#top"
            className={`nav-item hover:scale-110 hover:text-orange-500 px-2 mx-1 transition rounded-full opacity-90  ${activeItem === 'inicio' ? 'active bg-white bg-opacity-0  rounded-full backdrop-blur-sm transition text-orange-500 ' : ''}`}
            onClick={() => handleItemClick('inicio')}
          >
            Inicio
          </a>
          <a
            href="#proyectos"
            className={`nav-item hover:scale-110 hover:text-orange-500 px-2 mx-1 transition rounded-full opacity-90 ${activeItem === 'proyectos' ? 'active bg-white bg-opacity-0  rounded-full backdrop-blur-sm transition text-orange-500 ' : ''}`}
            onClick={() => handleItemClick('proyectos')}
          >
            Proyectos
          </a>
          <a 
            href="#sobre-mi"
            className={`nav-item hover:scale-110 hover:text-orange-500 px-2 mx-1 transition rounded-full opacity-90 ${activeItem === 'sobre-mi' ? 'active bg-white bg-opacity-0  rounded-full backdrop-blur-sm transition text-orange-500 ' : ''}`}
            onClick={() => handleItemClick('sobre-mi')}
          >
            Sobre mí
          </a>
          <a 
            href="#contacto"
            className={`nav-item hover:scale-110 hover:text-orange-500 px-2 mx-1 transition rounded-full opacity-90 ${activeItem === 'contacto' ? 'active bg-white bg-opacity-0  rounded-full backdrop-blur-sm transition text-orange-500 ' : ''}`}
            onClick={() => handleItemClick('contacto')}
          >
            Contacto
          </a>
          
          <div
            className={`indicator ${activeItem === 'inicio' ? 'left-0' : activeItem === 'proyectos' ? 'left-1/4' : activeItem === 'sobre-mi' ? 'left-2/4' : 'left-3/4'}`}
          ></div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;