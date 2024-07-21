


function Nav() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 ">
        <div className="flex justify-center items-center  py-5 w-full xl:w-[1120px] mx-auto brightness-60 ">
           <nav className="flex flex-row gap-x-10  bg-white bg-opacity-5 rounded-xl text-white px-4 py-1 backdrop-blur-sm ">
        <a className="hover:scale-110 transition" href="#top">Inicio</a>
        <a className="hover:scale-110 transition" href="#proyectos">Proyectos</a>
        <a className="hover:scale-110 transition" href="#sobre-mi">Sobre mí</a>
        <a className="hover:scale-110 transition" href="#contacto">Contacto</a>
        
      </nav>
          </div>     
    </div>
  );
}

export default Nav;
