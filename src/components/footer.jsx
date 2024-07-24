function Footer() {
  return (
    <footer className="rounded-lg shadow m-4 bg-white bg-opacity-5 backdrop-blur-3xl w-full xl:w-[1120px] mx-auto mb-10">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center text-yellow-200/90">
          © 2024{" "}
          . Jorge Cisneros.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white/90 sm:mt-0">
          <li>
            <a href="#sobre-mi" className="hover:underline me-4 md:me-6">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:underline">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
