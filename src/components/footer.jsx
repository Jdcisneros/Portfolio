function Footer() {
  return (
    <footer className="rounded-lg m-4 bg-white bg-opacity-0 backdrop-blur-3xl w-full xl:w-[1120px] mx-auto mb-10 z-30">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center text-orange-500">
          © 2024{" "}
          . Jorge Cisneros.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white/90 sm:mt-0">
          <li className="hover:scale-110 hover:text-orange-500 transition">
            <a href="#sobre-mi" className=" me-4 md:me-6">
              Sobre mí
            </a>
          </li>
          <li className="hover:scale-110 hover:text-orange-500 transition">
            <a href="#contacto" className=" me-4 md:me-6">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
