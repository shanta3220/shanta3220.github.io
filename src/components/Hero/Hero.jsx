import "./Hero.scss";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <h1 className="hero__title">Hi, I'm Nusrat Jahan Shanta</h1>
        <p className="hero__subtitle">
          Full-Stack Developer | Game Enthusiast | Problem Solver
        </p>
        <a href="#contact" className="hero__contact">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;
