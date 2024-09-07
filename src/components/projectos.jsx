// import fastfood from "../assets/fastfood.webp"

import Css from "./icons/css";
import Expressjs from "./icons/express";
import JavaScript from "./icons/javascript";
import PostgreSQL from "./icons/postgresql";
import React from "./icons/react";
import Redux from "./icons/redux";
import Tailwind from "./icons/tailwind";
import fastfood from "./projectosImg/fastfood.webp";
import countries from "./projectosImg/countries.jpg";
import Carousel from "./carousel";

function Projectos() {
  const TAGS = {
    JAVASCRIPT: {
      name: "JavaScript",
      icon: JavaScript,
    },
    REACT: {
      name: "React",
      icon: React,
    },
    REDUX: {
      name: "Redux",
      icon: Redux,
    },
    CSS: {
      name: "CSS",
      icon: Css,
    },
    POSTGRESQL: {
      name: "PostgreSQL",
      icon: PostgreSQL,
    },
    EXPRESS: {
      name: "ExpressJS",
      icon: Expressjs,
    },
    TAILWIND: {
      name: "Tailwind",
      icon: Tailwind,
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
  ];

  return (
    <div className="lg:w-max ">
      <Carousel>
        {PROYECTOS.map(({ title, description, tags, image }) => (
          <article
            key={title}
            className="lg:relative flex lg:flex-row flex-col px-10  items-center min-w-full "
          >
            <img
              className="object-cover w-11/12 lg:w-3/6 h-64 lg:h-96 transition-transform duration-300 hover:scale-110 rounded-md"
              src={image}
              alt={title}
            />
            <div className="lg:absolute lg:left-[40rem] left-0 flex justify-center items-center m-2">
              <div className="bg-orange-500 p-3 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-semibold text-stone-800 mb-2">
                  {title}
                </h3>
                <p className="mb-4 text-white">{description}</p>
                <ul className="flex gap-x-2 flex-row mb-2 flex-wrap justify-center">
                  {tags.map((tag, index) => (
                    <li key={index}>
                      {typeof tag === "object" ? (
                        <span
                          className={`flex gap-x-2 rounded-full text-xs bg-stone-800 text-orange-200 py-1 px-2 mb-2`}
                        >
                          {tag.name}
                        </span>
                      ) : (
                        <span>{tag}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </Carousel>
    </div>
  );
}

export default Projectos;
