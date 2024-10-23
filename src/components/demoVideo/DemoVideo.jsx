import { useState } from "react";
import PlayBtn from "../playBtn/PlayBtn";
import "./DemoVideo.css";
import YoutubeOverlay from "../youtubeOverlay/YoutubeOverlay";

function DemoVideo() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="demo-video mt">
      <div className="container demo-video-cont">
        <div className="demo-video-content">
          <PlayBtn setShowVideo={setShowVideo} />
          <p className="demo-subtitle">
            App designed with a user-freindly approach
          </p>

          <h3 className="heading-tertiary">Video Demo</h3>
        </div>
        <div className="demo-bg-img">
          <img
            src="./female-student-using-mobile.webp"
            alt="female student using mobile"
          />
        </div>
        <div className="demo-bg-primary"></div>
      </div>

      {showVideo && <YoutubeOverlay showVideo setShowVideo={setShowVideo} />}
    </section>
  );
}

export default DemoVideo;
