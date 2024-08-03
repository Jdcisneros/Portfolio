import curriculumPDF from "../assets/JorgeCisneros.pdf"
import Download from "./icons/download";

function DownloadCV() {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = curriculumPDF;
    link.setAttribute('download', 'JorgeCisneros.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button 
        onClick={downloadCV}
        className="flex items-center dark:text-orange-100 text-stone-800   opacity-80   hover:opacity-100 dark:hover:text-orange-500  hover:text-orange-500 transition duration-500"
        title="Descargar CV"
        >
        
        <Download className="size-7 lg:size-[34px]"/>
      </button>
    </div>
  );
}

export default DownloadCV;