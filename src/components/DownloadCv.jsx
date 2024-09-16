
import { MdDownloadForOffline } from "react-icons/md";
import curriculumPDF from "../assets/JorgeCisneros.pdf"
import Download from "./projectosImg/Download.jsx";

function DownloadCV() {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = curriculumPDF;
    link.setAttribute('download', 'JorgeCisneros.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // className="size-7 lg:size-[34px]"

  return (
    <div>
      <button 
        onClick={downloadCV}
        className="flex justify-center items-center dark:text-orange-100 text-stone-800  opacity-80 dark:hover:text-orange-500  hover:text-orange-500 hover:scale-110 transition duration-500 px-2  lg:my-2"
          title="Descargar CV"
        >
        <MdDownloadForOffline className="size-12 lg:size-[53px]"/>
       
      </button>
    </div>
  );
}

export default DownloadCV;