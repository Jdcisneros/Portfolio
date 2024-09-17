
import bg1 from "../assets/bg2.mp4"; // Asegúrate de tener el archivo en la ruta correcta

const VideoBackground = () => (
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
    <video
      className="w-full h-full object-cover"
      src={bg1}
      autoPlay
      loop
      muted
      style={{ filter: 'brightness(50%) invert(100%) sepia(100%) saturate(200%) hue-rotate(180deg)' }}
    />
  </div>
);

export default VideoBackground;