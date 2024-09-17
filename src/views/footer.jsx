function Footer() {
  return (
    <footer className="rounded-lg m-4 backdrop-blur-3xl w-full xl:w-[1120px] mx-auto mb-10 z-30">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center text-orange-500 lg:text-xl">
          © 2024{" "}
          . Jorge Cisneros.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-stone-900 dark:text-orange-200 sm:mt-0">
          <li className="hover:scale-110 hover:text-orange-500 transition lg:text-xl">
            <a href="#sobre-mi" className=" me-4 md:me-6">
              Sobre mí
            </a>
          </li>
          <li className="hover:scale-110 hover:text-orange-500 transition lg:text-xl">
            <a className=" me-4 md:me-6"
            href="mailto:jorgecisneros761@gmail.com"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
