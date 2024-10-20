import "./AboutHero.css";

function AboutHero() {
  return (
    <section className="grid grid--2-cols container about-hero">
      <div className="about-hero-content">
        <h2 className="heading-secondary">
          <span className="heading-highlight">
            Ignite your website's growth{" "}
          </span>{" "}
          with our cutting-edge solutions!
        </h2>

        <p className="about-hero-content-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="about-hero-content-desc">
          Tellus in metus vulputate eu scelerisque felis imperdiet proin. Ut
          tortor pretium viverra suspendisse potenti nullam ac tortor vitae.
          Risus sed vulputate odio ut enim. Lobortis feugiat vivamus at augue
          eget arcu. Lacus sed turpis tincidunt id aliquet risus feugiat in.
        </p>
        <p className="about-hero-content-desc">
          In hendrerit gravida rutrum quisque non tellus. Pulvinar neque laoreet
          suspendisse interdum consectetur libero. Commodo ullamcorper a lacus
          vestibulum sed arcu non.
        </p>
      </div>
      <div className="about-hero-imgwrapper">
        <img src="./about-hero.png" alt="About Hero jpg" />
      </div>
    </section>
  );
}

export default AboutHero;
