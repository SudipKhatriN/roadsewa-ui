import "./DownloadButton.css";

export default function DownloadButton({ imgSrc, styleClass = "" }) {
  return (
    <button className={`btn--action ${styleClass}`}>
      <img src={imgSrc} alt="Download app in store" />
    </button>
  );
}
