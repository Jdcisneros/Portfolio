import DownloadCV from "../components/DownloadCv.jsx";
import { ImGithub, ImMail4 } from "react-icons/im";
import Likedin from "./projectosImg/Likedin.jsx";

function Social() {
  return (
    <div className="lg:absolute top-64 left-5">
      <nav className="flex lg:flex-col flex-wrap justify-center items-center">
        <a
          className="flex justify-center items-center dark:text-orange-100 text-stone-800   opacity-80  dark:hover:text-orange-500  hover:text-orange-500 hover:scale-110  transition duration-500  px-3 lg:my-3"
          href="https://www.linkedin.com/in/cisneros-jorge/"
          title="LikedIn"
          target="_blank"
        >
          <Likedin className="size-10 lg:size-11" />
        </a>

        <a
          className="flex justify-center items-center dark:text-orange-100 text-stone-800  opacity-80 dark:hover:text-orange-500  hover:text-orange-500 hover:scale-110 transition duration-500 px-3  lg:my-3"
          href="https://github.com/Jdcisneros"
          title="GitHub"
          target="_blank"
        >
          <ImGithub className="size-10 lg:size-11" />
        </a>

        <a
          className="flex justify-center items-center dark:text-orange-100 text-stone-800   opacity-80  dark:hover:text-orange-500  hover:text-orange-500  hover:scale-110 transition duration-500 px-3 lg:my-3"
          href="mailto:jorgecisneros761@gmail.com"
          title="Mail"
          target="_blank"
        >
          <ImMail4 className="size-10 lg:size-[45px] " />
        </a>
        <DownloadCV />
      </nav>
    </div>
  );
}

export default Social;
