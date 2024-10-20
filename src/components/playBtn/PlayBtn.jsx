import "./PlayBtn.css";

function PlayBtn({ setShowVideo }) {
  return (
    <div>
      <div className="container">
        <a className="button is-play" onClick={() => setShowVideo(true)}>
          <div className="button-outer-circle has-scale-animation"></div>
          <div className="button-outer-circle has-scale-animation has-delay-short"></div>
          <div className="button-icon is-play">
            <svg height="100%" width="100%" fill="#eb5d39">
              <polygon
                className="triangle"
                points="5,0 30,15 5,30"
                viewBox="0 0 30 15"
              ></polygon>
              <path
                className="path"
                d="M5,0 L30,15 L5,30z"
                fill="none"
                stroke="#f857a6"
                strokeWidth="1"
              ></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}

export default PlayBtn;
