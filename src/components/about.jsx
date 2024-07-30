import image from "../assets/ProfileImage.jpeg";

function About() {
  return (
    <div className="flex lg:flex-row flex-col mb-10 p-5 items-center">
      <img src={image} alt="ProfileImage" className="rounded-3xl object-cover p-2 w-full h-64 lg:h-72 lg:hover:scale- transition duration-300" />
      <p className=" ml-5 mb-4 text-pretty">
        ¡Hola! Me llamo Jorge Cisneros y soy desarrollador Full Stack. Desde que
        comencé a programar, he desarrollado una verdadera pasión por crear y
        diseñar aplicaciones web. Me especializo en construir interfaces
        amigables y funcionales, enfocándome en la experiencia del usuario y la
        usabilidad. Estoy entusiasmado por seguir aprendiendo y perfeccionando
        mis habilidades. Busco oportunidades que me permitan crecer como
        profesional y contribuir al éxito de los proyectos con los que colabore.
      </p>
    </div>
  );
}

export default About;
