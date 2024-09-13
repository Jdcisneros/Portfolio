import Projectos from "../components/projectos.jsx";
// import video1 from "../assets/VioletaBG.mp4"
// import video2 from "../assets/LineasBG.mp4"
// import bg4 from "../assets/bg6.mp4";
// import bg1 from "../assets/bg1.jpg"
// import bg2 from "../assets/bg3.jpg"

import Nav from "../components/Nav.jsx";
import About from "./about.jsx";

import Footer from "./footer.jsx";

import { BsFillPersonCheckFill } from "react-icons/bs";
import Social from "../components/Social.jsx";

function Home() {
  return (
    // text-orange-100 text-orange-500
    <div className="flex flex-col items-center bg-zinc-200 dark:bg-zinc-900 transition duration-1000 justify-center ">
      <Nav />
      <section
        className="w-[340px] lg:w-full md:w-[440px]  md:m-2 py-32  pb-20 m-3 z-30 transition duration-1000 flex flex-col justify-center"
        id="top"
      >
        <h3 className="dark:text-orange-100 text-stone-950  text-base font-extralight pb-5 lg:pb-3 lg:text-2xl md:text-2xl text-center  animate-slide-in-right ">
          Hola 👋 Mi nombre es Jorge!
        </h3>
        <h1 className="text-orange-500  text-7xl font-bold lg:pb-2 lg:text-9xl md:text-8xl  text-center  animate-slide-in-left">
          FullStack
        </h1>
        <h2 className="dark:text-orange-200 text-stone-800  text-5xl font-bold pb-4 lg:pb-10 lg:text-7xl md:text-4xl text-center animate-slide-in-right ">
          Developer
        </h2>
        <p className="dark:text-orange-100 text-stone-600  text-base font-extralight pb-10 lg:pb-0 lg:text-2xl md:text-2xl text-center  animate-slide-in-right lg:px-96 ">
          Soy desarrollador web de Rosario, Argentina, con experiencia en
          fullstack. Me enfoco en crear interfaces intuitivas y en desarrollar
          aplicaciones web completas que ofrecen una experiencia de usuario
          fluida y eficiente.
        </p>

        <Social />
      </section>
      {/* <section className=" w-full z-30" id="proyectos">
        <h2 className="font-semibold text-stone-900 dark:text-orange-200  text-3xl flex lg:mt-32 items-center justify-center">
        <FaLaptopCode className="size-4 lg:size-7" />
          Proyectos
        </h2>
        <Projectos />
      </section> */}
      <section
        className="w-full lg:w-[860px] mx-auto lg:mt-20 mt-5 z-30 "
        id="sobre-mi"
      >
        <h2 className="font-semibold text-stone-900 dark:text-orange-200 text-2xl mb-6 flex gap-x-3  items-center justify-center">
          <BsFillPersonCheckFill className="size-6 lg:size-7" />
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