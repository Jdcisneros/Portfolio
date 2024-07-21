import Github from "./icons/github.jsx";
import LinkedIn from "./icons/linkedin.jsx";
import Mail from "./icons/mail.jsx";
import ProjectosIcon from "./icons/projectosIcon.jsx";
import Projectos from "./projectos.jsx";
// import video1 from "../assets/VioletaBG.mp4"
import video2 from "../assets/LineasBG.mp4"
import Nav from "./Nav.jsx"
function Home() {
  return (
    <div className="flex justify-center items-center flex-col animate-fade animate-duration-[3000ms] animate-delay-500">
      <Nav/>
      <section className="w-full lg:w-[740px] py-32 pb-20 m-20 relative z-30" id="top">
        <h1 className="text-white  text-3xl font-bold pb-4 lg:pb-10 lg:text-5xl md:text-4xl text-center ">
          ¡Hola! Soy Jorge Cisneros
        </h1>
        <h2 className=" text-xl lg:text-2xl opacity-60 text-wrap max-w-[700px] text-center">
          Desarollador Full-Stack
        </h2>

        <nav className="flex gap-4 mt-8 flex-wrap justify-center">
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
       <video autoPlay loop muted playsInline className="absolute top-0 left-0 object-cover w-full h-2/3 z-10 blur-sm">
      <source src={video2} type="video/mp4"/>
       </video>
      <section
        className="w-full lg:w-[740px]  mx-auto py-36 pb-20 mt-20"
        id="proyectos"
      >
        <h2 className="font-semibold text-3xl mb-6 flex gap-x-3 items-center">
          <ProjectosIcon className="size-4 lg:size-7" />
          Proyectos
        </h2>
        <Projectos />
      </section>
      <section
        className="w-full lg:w-[740px]  mx-auto py-36 pb-20"
        id="sobre-mi"
      >
        <h2 className="font-semibold text-3xl mb-6 flex gap-x-3 items-center">
          Sobre mí
        </h2>
      </section>
      {/* <section  className="w-full lg:w-[740px]  mx-auto py-36 pb-20" id="contacto">
      <h2 className="font-semibold text-3xl mb-6 flex gap-x-3 items-center">
          Contacto
          </h2>
      </section> */}
      
    </div>
  );
}

export default Home;
