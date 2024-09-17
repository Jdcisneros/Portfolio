import { MdOutlineArrowOutward } from "react-icons/md";

function Footer() {
  return (
    <footer className=" bg-zinc-950 dark:bg-orange-50 w-full mx-auto lg:h-96 z-30 flex flex-col">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
       
          <div className="flex flex-col gap-y-3">
            <p className="dark:text-zinc-900 text-orange-50 w-96 lg:text-2xl text-xl">
              Estoy abierto a explorar nuevas oportunidades y colaboraciones. Si
              estás interesado en trabajar juntos, no dudes en enviarme un
              correo para discutir cómo podemos lograr grandes cosas.
            </p>
            <a
              className="flex justify-center items-center rounded-full text-lg lg:text-3xl w-fit bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-orange-100 py-2 px-3 hover:scale-110 transform duration-300"
              href="mailto:jorgecisneros761@gmail.com"
            >
              Contactamé
              <MdOutlineArrowOutward className="ml-1 lg:ml-2 size-5 lg:size-9" />
            </a>
          </div>
        <div className="flex flex-row items-center mt-10">
          <div className="mx-4">
            <ul className="flex flex-wrap items-center gap-y-3 mt-3 text-xl lg:text-2xl font-medium dark:text-zinc-900 text-orange-50sm:mt-0 flex-col">
              <li className="hover:scale-110 hover:text-orange-500 transition ">
                <a href="#inicio" className=" me-4 md:me-6">
                  Github
                </a>
              </li>
              <li className="hover:scale-110 hover:text-orange-500 transition ">
                <a href="#sobre-mi" className=" me-4 md:me-6">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-4">
            <ul className="flex flex-wrap items-center gap-y-3 mt-3 text-xl lg:text-2xl font-medium dark:text-zinc-900 text-orange-50 sm:mt-0 flex-col">
              <li className="hover:scale-110 hover:text-orange-500 transition ">
                <a href="#inicio" className=" me-4 md:me-6">
                  Inicio
                </a>
              </li>
              <li className="hover:scale-110 hover:text-orange-500 transition ">
                <a href="#sobre-mi" className=" me-4 md:me-6">
                  Sobre mí
                </a>
              </li>
              <li className="hover:scale-110 hover:text-orange-500 transition">
                <a
                  className=" me-4 md:me-6"
                  href="mailto:jorgecisneros761@gmail.com"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto max-w-screen-xl m-5">

       <span className="text-lg text-orange-500 lg:text-xl p-4 ">
            © 2024 . Jorge Cisneros.
          </span>
      </div>
    </footer>
  );
}

export default Footer;
