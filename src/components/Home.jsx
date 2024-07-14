import avatar from "/avatar.jpeg";
import Github from "./icons/github.jsx";
import LinkedIn from "./icons/linkedin.jsx";
import Mail from "./icons/mail.jsx"




function Home() {




  return (
    <div className="flex justify-center items-center flex-col">
      <section className="w-full lg:w-[740px]  mx-auto py-36 pb-20 " id="top">
        <img className="rounded-full h-10 w-12 mb-4" src={avatar} />

        <h1 className="text-white text-3xl font-bold flex flex-row gap-x-4 pb-4 lg:pb-10 lg:text-5xl md:text-4xl">
          ¡Hola! Soy Jorge Cisneros
        </h1>
        <h2 className=" text-xl lg:text-2xl opacity-60 text-wrap max-w-[700px]">
          Desarollador Full-Stack
          </h2>

        <nav className="flex gap-4 mt-8 flex-wrap">
          <a
            className="rounded-full border  border-white/10 flex justify-center items-center gap-x-2 lg:py-2 lg:px-3 py-1 px-2 bg-white/5  hover:scale-110  hover:bg-white/10 transition text-xs lg:text-base "
            href="https://www.linkedin.com/in/cisneros-jorge/"
          >
            <LinkedIn className="size-4 lg:size-6" />
            LiknedIn
          </a>

          <a
            className="rounded-full border  border-white/10 flex justify-center items-center gap-x-2 lg:py-2 lg:px-3 py-1 px-2 bg-white/5  hover:scale-110  hover:bg-white/10 transition text-xs lg:text-base "
            href="https://github.com/Jdcisneros"
          >
            <Github className="size-4 lg:size-6" />
            Github
          </a>
          <a
            className="rounded-full border  border-white/10 flex justify-center items-center gap-x-2 lg:py-2 lg:px-3 py-1 px-2 bg-white/5  hover:scale-110  hover:bg-white/10 transition text-xs lg:text-base "
            href="mailto:jorgecisneros761@gmail.com"
          >
            <Mail className="size-4 lg:size-6" />
           jorgecisneros761@gmail.com
          </a>
        </nav>
      </section>
      <section  className="w-full lg:w-[740px]  mx-auto py-36 pb-20" id="proyectos">
        <h2 className="font-semibold text-2xl mb-6">Proyectos</h2>
      </section>
      <section  className="w-full lg:w-[740px]  mx-auto py-36 pb-20" id="sobre-mi">
        <h2 className="font-semibold text-2xl mb-6">Sobre mí</h2>
      </section>
      <section  className="w-full lg:w-[740px]  mx-auto py-36 pb-20" id="contacto">
        <h2 className="font-semibold text-2xl mb-6">Contacto</h2>
      </section>
    </div>
  );
}

export default Home;
// https://github.com/Jdcisneros
