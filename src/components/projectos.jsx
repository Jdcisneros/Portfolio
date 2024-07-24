// import fastfood from "../assets/fastfood.webp"

import Css from "./icons/css";
import Expressjs from "./icons/express";
import JavaScript from "./icons/javascript";
import PostgreSQL from "./icons/postgresql";
import React from "./icons/react";
import Redux from "./icons/redux";
import Tailwind from "./icons/tailwind";
import fastfood from "./projectosImg/fastfood.webp";
import countries from "./projectosImg/countries.jpg"

function Projectos() {
  const TAGS = {
    JAVASCRIPT: {
      name: "JavaScript",
      className: "bg-orange-300 text-black",
      icon: JavaScript,
    },
    REACT: {
      name: "React",
      className: "bg-orange-300 text-black",
      icon: React,
    },
    REDUX: {
      name: "Redux",
      className: "bg-orange-300 text-black",
      icon: Redux,
    },
    CSS: {
      name: "CSS",
      className:"bg-orange-300 text-black",
      icon: Css,
    },
    POSTGRESQL: {
      name: "PostgreSQL",
      className: "bg-orange-300 text-black",
      icon: PostgreSQL,
    },
    EXPRESS: {
      name: "ExpressJS",
      className:"bg-orange-300 text-black",
      icon: Expressjs,
    },
    TAILWIND: {
      name: "Tailwind",
      className: "bg-orange-300 text-black",
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
    <div>
      {PROYECTOS.map(({ title, description, tags, image }) => (
        <article key={title} className="flex lg:flex-row flex-col mb-10 p-5 items-center">
          <img
            className="rounded object-cover p-2 w-full h-64 lg:h-72 lg:hover:scale- transition duration-300"
            src={image}
            alt={title}
          />
          <div className="ml-2">
            <h3 className="text-2xl font-semibold text-orange-500 mb-2">
              {title}
            </h3>
            <p className=" mb-4 text-pretty">{description}</p>
            <ul className="flex gap-x-2 flex-row mb-2 flex-wrap">
              {tags.map((tag, index) => (
                <li key={index}>
                  {typeof tag === "object" ? (
                    <span
                      className={`flex gap-x-2 rounded-full text-xs text-zinc-500 ${tag.className} py-1 px-2 mb-2`}
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
        </article>
      ))}
    </div>
  );
}

export default Projectos;
