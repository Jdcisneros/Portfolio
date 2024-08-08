import Github from "./icons/github.jsx";
import LinkedIn from "./icons/linkedin.jsx";
import Mail from "./icons/mail.jsx";
import ProjectosIcon from "./icons/projectosIcon.jsx";
import Projectos from "./projectos.jsx";
// import video1 from "../assets/VioletaBG.mp4"
// import video2 from "../assets/LineasBG.mp4"
// import bg4 from "../assets/bg6.mp4";
// import bg1 from "../assets/bg1.jpg"
// import bg2 from "../assets/bg3.jpg"

import Nav from "./Nav.jsx";
import DownloadCV from "./DownloadCv.jsx";
import About from "./about.jsx";
import AboutMe from "./icons/aboutMe.jsx";
import Footer from "./footer.jsx";

function Home() {
  return (
    // text-orange-100 text-orange-500
    <div className="flex flex-col items-center bg-zinc-200 dark:bg-zinc-900 transition duration-1000 ">
      <Nav />
      <section
        className="w-[340px] lg:w-[740px] md:w-[440px]  md:m-2 py-32  pb-20 m-3 relative z-30 transition duration-1000"
        id="top"
      >
        <h3 className="dark:text-orange-100 text-stone-900  text-base font-extralight pb-4 lg:pb-0 lg:text-2xl md:text-2xl text-center  animate-slide-in-right ">
          Hola! Mi nombre es
        </h3>
        <h1 className="text-orange-500  text-7xl font-bold pb-4 lg:pb-2 lg:text-9xl md:text-8xl  text-center  animate-slide-in-left">
          Jorge Cisneros
        </h1>
        <h2 className="dark:text-orange-200 text-stone-800  text-3xl font-semibold pb-4 lg:pb-10 lg:text-5xl md:text-4xl text-center animate-slide-in-right ">
          FullStack Developer
        </h2>
        <p className="dark:text-orange-100 text-stone-900  text-base font-extralight pb-4 lg:pb-0 lg:text-2xl md:text-2xl text-center  animate-slide-in-right ">
          Soy desarrollador web de Rosario, Argentina, con experiencia en
          fullstack. Me enfoco en crear interfaces intuitivas y en desarrollar
          aplicaciones web completas que ofrecen una experiencia de usuario
          fluida y eficiente.
        </p>

        <nav className="flex gap-4 mt-16 flex-wrap justify-center items-center">
          <a
            className="flex justify-center items-center gap-x-2 lg:py-2 lg:px-3 py-1 px-2 dark:text-orange-100 text-stone-800   opacity-80  dark:hover:text-orange-500  hover:text-orange-500 hover:opacity-100  transition duration-500"
            href="https://www.linkedin.com/in/cisneros-jorge/"
            title="LikedIn"
            target="_blank"
          >
            <LinkedIn className="size-6 lg:size-8" />
          </a>

          <a
            className="flex justify-center items-center gap-x-2 lg:py-2 lg:px-3 py-1 px-2 dark:text-orange-100 text-stone-800  opacity-80 dark:hover:text-orange-500  hover:text-orange-500 hover:opacity-100 transition duration-500"
            href="https://github.com/Jdcisneros"
            title="GitHub"
            target="_blank"
          >
            <Github className="size-6 lg:size-8" />
          </a>

          <a
            className="flex justify-center items-center gap-x-2 lg:py-2 lg:px-3 py-1 px-2  dark:text-orange-100 text-stone-800   opacity-80  dark:hover:text-orange-500  hover:text-orange-500  hover:opacity-100  transition duration-500"
            href="mailto:jorgecisneros761@gmail.com"
            title="Mail"
            target="_blank"
          >
            <Mail className="size-8 lg:size-10" />
          </a>
          <DownloadCV />
        </nav>
      </section>
      <section className=" z-30" id="proyectos">
        <h2 className="font-semibold text-stone-900 dark:text-orange-200  text-3xl mb-32 flex lg:mt-32 items-center justify-center">
          <ProjectosIcon className="size-4 lg:size-7" />
          Proyectos
        </h2>
        <Projectos />
      </section>
      <section
        className="w-full lg:w-[860px] mx-auto lg:mt-20 mt-5 z-30 "
        id="sobre-mi"
      >
        <h2 className="font-semibold text-stone-900 dark:text-orange-200 text-3xl mb-6 flex gap-x-3 ml-7 items-center justify-center">
          <AboutMe className="size-4 lg:size-7" />
          Sobre mí
        </h2>
        <About />
      </section>

      {/* <section  className="w-full lg:w-[740px]  mx-auto py-36 pb-20" id="contacto">
      <h2 className="font-semibold text-3xl mb-6 flex gap-x-3 items-center">
          Contacto
          </h2>
      </section> */}

      <Footer />
    </div>
  );
}

export default Home;
