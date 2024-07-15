// import fastfood from "../assets/fastfood.webp"

import Css from "./icons/css";
import Expressjs from "./icons/express";
import JavaScript from "./icons/javascript";
import PostgreSQL from "./icons/postgresql";
import React from "./icons/react";
import Redux from "./icons/redux";
import fastfood from "./projectosImg/fastfood.webp";

function Projectos() {
  const TAGS = {
    JAVASCRIPT: {
      name: "JavaScript",
      className: "bg-black text-white",
      icon: JavaScript,
    },
    REACT: {
      name: "React",
      className: "bg-black text-white",
      icon: React,
    },
    REDUX: {
      name: "Redux",
      className: "bg-black text-white",
      icon: Redux,
    },
    CSS: {
      name: "CSS",
      className: "bg-black text-white",
      icon: Css,
    },
    POSTGRESQL: {
      name: "PostgreSQL",
      className: "bg-black text-white",
      icon: PostgreSQL,
    },
    EXPRESS: {
      name: "ExpressJS",
      className: "bg-black text-white",
      icon: Expressjs,
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
        TAGS.REACT,
        TAGS.CSS,
        TAGS.EXPRESS,
        TAGS.POSTGRESQL,
      ],
    },
  ];

  return (
    <div>
      {PROYECTOS.map(({ title, description, tags, image }) => (
        <article key={title}>
          <h3 className="text-2xl font-semibold text-yellow-200 mb-2">
            {title}
          </h3>
          <p className="text-lg mb-4 text-pretty">{description}</p>
          <ul className="flex gap-x-2 flex-row mb-2 flex-wrap">
            {tags.map((tag, index) => (
              <li key={index}>
                {typeof tag === "object" ? (
                  <span
                    className={`flex gap-x-2 rounded-full text-xs ${tag.className} py-1 px-2 mb-2`}
                  >
                    <tag.icon className="size-4" /> {tag.name}
                  </span>
                ) : (
                  <span>{tag}</span>
                )}
              </li>
            ))}
          </ul>
          <img
            className="rounded shadow-2xl shadow-white/10"
            src={image}
            alt={title}
          />
        </article>
      ))}
    </div>
  );
}

export default Projectos;
