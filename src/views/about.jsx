import image from "../assets/ProfileImage.jpeg";

function About() {
  return (
    <div className="flex  flex-col mb-10 p-5 items-center">
      <img src={image} alt="ProfileImage" className="rounded-full object-cover p-2 lg:w-72 w-64 h-64 lg:h-72 transition duration-300" />
      <p className=" m-5 text-pretty text-center text-stone-900 dark:text-orange-200 w-[440px] lg:w-[840px] text-xl font-light">
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
