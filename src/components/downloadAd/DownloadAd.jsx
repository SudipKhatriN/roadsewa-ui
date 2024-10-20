import "./DownloadAd.css";
import DownloadButton from "../downloadButton/DownloadButton";

function DownloadAd() {
  return (
    <section className="container download-ad">
      <div className="grid grid--2-cols download-ad-cont">
        <div className="download-ad-content">
          <h2 className="heading-secondary">
            Download for free from Apple & Play Store
          </h2>
          <p className="subheading">
            Get instant access to thousands of apps with a free download from
            the Apple and Play Store. Enjoy fast and convenient access to your
            favorite apps!
          </p>

          <div className="download-btn-cont">
            <DownloadButton imgSrc="./appstore_blue.png" />
            <DownloadButton imgSrc="./googleplay_blue.png" />
          </div>
        </div>

        <div className="download-ad-img-cont">
          <img
            src="./apper-screen-01.webp"
            alt="Apper Screen"
            className="ad-big-img"
          />
          <img
            src="./apper-screen-02.webp"
            alt="Apper Screen"
            className="ad-small-img"
          />
        </div>
      </div>
    </section>
  );
}

export default DownloadAd;
