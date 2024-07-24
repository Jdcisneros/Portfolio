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
        className="flex justify-center items-center gap-x-2 bg-white rounded lg:py-1 lg:px-2 py-1 px-2 opacity-60 text-neutral-900 hover:bg-orange-500  hover:opacity-100 text-xs lg:text-base  transition duration-500"
        title="Descargar CV"
        >
        
        <Download/>
      </button>
    </div>
  );
}

export default DownloadCV;