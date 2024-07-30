import Github from "./icons/github.jsx";
import LinkedIn from "./icons/linkedin.jsx";
import Mail from "./icons/mail.jsx";
import ProjectosIcon from "./icons/projectosIcon.jsx";
import Projectos from "./projectos.jsx";
// import video1 from "../assets/VioletaBG.mp4"
// import video2 from "../assets/LineasBG.mp4"
import bg4 from "../assets/bg6.mp4";
// import bg1 from "../assets/bg1.jpg"
// import bg2 from "../assets/bg3.jpg"

import Nav from "./Nav.jsx";
import DownloadCV from "./DownloadCv.jsx";
import About from "./about.jsx";
import AboutMe from "./icons/aboutMe.jsx";

function Home() {
  return (
    // text-orange-100 text-orange-500
    <div className="flex justify-center items-center flex-col animate-fade animate-duration-[3000ms] animate-delay-500 ">
      <Nav />
      <section
        className="w-full lg:w-[740px] py-32 mt-20 pb-20 m-20 relative z-30"
        id="top"
      >
        <h3 className="text-orange-100  text-base font-extralight pb-4 lg:pb-0 lg:text-2xl md:text-4xl text-center ">
          Hola! Mi nombre es
        </h3>
        <h1 className="text-orange-500  text-7xl font-bold pb-4 lg:pb-2 lg:text-9xl md:text-4xl text-center ">
          Jorge Cisneros
        </h1>
        <h2 className="text-orange-200  text-3xl font-semibold pb-4 lg:pb-10 lg:text-5xl md:text-4xl text-center ">
          FullStack Developer
        </h2>

        <nav className="flex gap-4 mt-16 flex-wrap justify-center items-center">
          <a
            className="flex justify-center items-center gap-x-2 lg:py-2 lg:px-3 py-1 px-2  opacity-60 hover:text-orange-500  hover:opacity-100  transition duration-500"
            href="https://www.linkedin.com/in/cisneros-jorge/"
            title="LikedIn"
          >
            <LinkedIn className="size-6 lg:size-8" />
          </a>

          <a
            className="flex justify-center items-center gap-x-2 lg:py-2 lg:px-3 py-1 px-2 opacity-60 hover:text-orange-500  hover:opacity-100 transition duration-500"
            href="https://github.com/Jdcisneros"
            title="GitHub"
          >
            <Github className="size-6 lg:size-8" />
          </a>
          <a
            className="flex justify-center items-center gap-x-2 lg:py-2 lg:px-3 py-1 px-2 opacity-60 hover:text-orange-500  hover:opacity-100  transition duration-500"
            href="mailto:jorgecisneros761@gmail.com"
            title="Mail"
          >
            <Mail className="size-8 lg:size-10" />
          </a>
          <DownloadCV />
        </nav>
      </section>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="inset-0 fixed top-0 left-0 w-full h-full object-cover z-10 blur-sm opacity-60"
      >
        <source src={bg4} type="video/mp4" />
      </video>
      {/* <a
        href="#proyectos"
        className="text-orange-200 hover:text-orange-700 transition duration-500 flex items-center mt-4"
      >
        Proyectos
        <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 3a.75.75 0 01.75.75v9.5l2.72-2.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 111.06-1.06L9.25 13.25V3.75A.75.75 0 0110 3z"
            clipRule="evenodd"
          />
        </svg>
      </a> */}
      <section
        className="w-full lg:w-[860px] mx-auto lg:mt-5 mt-5 z-30"
        id="proyectos"
      >
        <h2 className="font-semibold text-orange-200 text-3xl mb-6 flex gap-x-3 ml-7 items-center">
          <ProjectosIcon className="size-4 lg:size-7" />
          Proyectos
        </h2>
        <Projectos />
      </section>
      <section
        className="w-full lg:w-[860px] mx-auto lg:mt-5 mt-5 z-30"
        id="sobre-mi"
      >
        <h2 className="font-semibold text-orange-200 text-3xl mb-6 flex gap-x-3 ml-7 items-center">
        <AboutMe className="size-4 lg:size-7"/>
          Sobre mí
        </h2>
        <About/>
      </section>
      
      {/* <section  className="w-full lg:w-[740px]  mx-auto py-36 pb-20" id="contacto">
      <h2 className="font-semibold text-3xl mb-6 flex gap-x-3 items-center">
          Contacto
          </h2>
      </section> */}
      <div></div>
    </div>
  );
}

export default Home;
