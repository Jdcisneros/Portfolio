// import fastfood from "../assets/fastfood.webp"

import fastfood from "./projectosImg/fastfood.webp";
import countries from "./projectosImg/countries.jpg";
import portfolio from "./projectosImg/portfolio.png";

import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import {
  BiLogoPostgresql,
  BiLogoRedux,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { SiExpress } from "react-icons/si";

import { ImGithub } from "react-icons/im";
import { MdOutlineArrowOutward } from "react-icons/md";

function Projectos() {
  const TAGS = {
    JAVASCRIPT: {
      name: "JavaScript",
      icon: <IoLogoJavascript />,
    },
    REACT: {
      name: "React",
      icon: <IoLogoReact />,
    },
    REDUX: {
      name: "Redux",
      icon: <BiLogoRedux />,
    },
    CSS: {
      name: "CSS",
      icon: <IoLogoCss3 />,
    },
    POSTGRESQL: {
      name: "PostgreSQL",
      icon: <BiLogoPostgresql />,
    },
    EXPRESS: {
      name: "ExpressJS",
      icon: <SiExpress />,
    },
    TAILWIND: {
      name: "Tailwind",
      icon: <BiLogoTailwindCss />,
    },
  };

  const PROYECTOS = [
    {
      title: "FastFood App",
      description:
        "Plataforma web que simplifica la compra de comida rápida permitiendo a los usuarios buscar y ordenar desde varios restaurantes, mientras que ofrece a los restaurantes la capacidad de registrarse, gestionar su menú y recibir pedidos en línea.",
      link: "https://fast-food-front-deploy.vercel.app/",
      github: "https://github.com/ProyectoFinalH/FastFoodFront-deploy",
      image: fastfood,
      tags: [
        TAGS.JAVASCRIPT,
        TAGS.REACT,
        TAGS.REDUX,
        TAGS.CSS,
        TAGS.TAILWIND,
        TAGS.EXPRESS,
        TAGS.POSTGRESQL,
      ],
    },
    {
      title: "Countries App",
      description:
        "Sitio web interactivo con información detallada de países desde una API interna. Permite explorar datos como continente, población y actividades locales. Incluye funcionalidades para crear actividades, filtros por continente y actividad, ordenamientos y buscador.",
      link: "",
      github: "https://github.com/Jdcisneros/cr-pi-countries-main",
      image: countries,
      tags: [
        TAGS.JAVASCRIPT,
        TAGS.REACT,
        TAGS.REDUX,
        TAGS.CSS,
        TAGS.EXPRESS,
        TAGS.POSTGRESQL,
      ],
    },
    {
      title: "Portfolio Personal",
      description:"Plataforma web que presenta mi portafolio personal, ofreciendo una forma clara y profesional de mostrar mis proyectos, habilidades y logros. Los visitantes pueden explorar mi trabajo, conocer más sobre mi experiencia y contactar conmigo para posibles colaboraciones o oportunidades profesionales.",
       link: "",
      github: "https://github.com/Jdcisneros/Portfolio",
      image: portfolio,
      tags: [TAGS.JAVASCRIPT, TAGS.REACT, TAGS.CSS, TAGS.TAILWIND],
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap  justify-center gap-6 mt-10 p-5 ">
      {PROYECTOS.map(({ title, description, tags, image, github }, index) => (
        <article
          key={index}
          className="relative group items-center justify-center lg:w-2/6"
        >
          <img
            className="object-cover w-full lg:w-fit h-72 lg:h-96 transition-transform shadow-md  duration-300  rounded-md"
            src={image}
            alt={title}
          />
          <div className="absolute top-0 left-0 flex items-center lg:w-fit justify-center lg:h-96 h-72 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300  text-orange-200 text-center rounded-md">
            <div className="">
              <h3 className="text-lg lg:text-2xl text-orange-500 font-semibold mt-2">
                {title}
              </h3>
              <p className="mb-3 lg:mb-4 p-3 lg:p-5 text-sm">{description}</p>
              <ul className="flex gap-x-2 flex-row mb-2 flex-wrap justify-center">
                {tags.map((tag, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-x-1 lg:gap-x2 rounded-full text-xs bg-stone-800 text-orange-200 py-1 px-2 mb-2"
                  >
                    <span className="flex items-center">{tag.icon}</span>
                    <span>{tag.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" flex justify-between lg:p-4 p-2 w-full items-center dark:text-orange-200 text-zinc-900">
            <div>
              <h2 className="text-lg lg:text-xl font-semibold">{title}</h2>
            </div>
            <div className="">
              <a
                className="flex justify-center items-center dark:text-orange-200 text-stone-800  opacity-80 dark:hover:text-orange-500  hover:text-orange-500 hover:scale-110 transition duration-500 lg:px-3  lg:my-3"
                href={github}
                title="GitHub"
                target="_blank"
              >
                <ImGithub className="size-5 lg:size-5 mr-1 lg:mr-3" />
                <p>Repositorio</p>
                <MdOutlineArrowOutward className="ml-1 lg:ml-2 size-5 lg:size-5" />
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Projectos;
