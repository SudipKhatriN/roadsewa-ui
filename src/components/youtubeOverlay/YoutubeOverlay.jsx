import "./YoutubeOverlay.css";
import { ImCross } from "react-icons/im";

function YoutubeOverlay({ setShowVideo }) {
  return (
    <div className={`youtube-overlay `}>
      <button className="btn--cross" onClick={() => setShowVideo(false)}>
        <ImCross />
      </button>
      <div className="video-cont">
        <iframe
          width="600"
          height="315"
          src="https://www.youtube.com/embed/BadB1z-V_qU?si=qTPhL2WUO1hLygd0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default YoutubeOverlay;
