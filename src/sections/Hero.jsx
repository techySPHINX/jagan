import Button from "../components/Button";

const Hero = () => {
  return (
    <section id="hero" className="hero-section relative overflow-hidden text-white">
      {/* Background image */}
      <div className="hero-bg absolute top-0 left-0 w-full h-full z-0 opacity-80">
        <img
          src="/images/bg.png"
          alt="background tech mesh"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Layout */}
      <div className="hero-layout z-10 relative">
        <header className="hero-content flex flex-col justify-center px-5 md:px-20">
          <div className="hero-text-group flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Building Reliable{" "}
                <span className="gradient-text-blue">FullStack</span>{" "}
                Systems
              </h1>
              <h1>
                with <span className="gradient-text-violet">DevOps</span>{" "}
                Precision
              </h1>
            </div>

            <p className="hero-subtext text-white-50 md:text-xl relative z-10">
              I'm <span className="gradient-text-violet">Jagan Kumar Hotta</span>{" "} — a full stack and DevOps engineer blending robust backend
              systems with CI/CD pipelines to deliver scalable, efficient solutions.
            </p>

            <Button
              text="Explore My Projects"
              className="btn-primary md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>
      </div>
    </section>
  );
};

export default Hero;
