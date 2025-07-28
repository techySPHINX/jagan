import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero-section relative overflow-hidden text-white bg-black"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-80">
        <img
          src="/images/bg.png"
          alt="background tech mesh"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-24 md:py-32 flex flex-col justify-center items-start min-h-screen">
        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Building Reliable{" "}
              <span className="gradient-text-blue">FullStack</span> Systems
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              with <span className="gradient-text-violet">DevOps</span>{" "}
              Precision
            </h1>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            I'm{" "}
            <span className="gradient-text-violet font-semibold">
              Jagan Kumar Hotta
            </span>{" "}
            — a Full Stack and DevOps engineer blending robust backend systems
            with CI/CD pipelines to deliver scalable, efficient solutions.
          </p>

          <Button
            text="Explore My Projects"
            className="btn-primary w-52 h-12 sm:w-64 sm:h-14 md:w-80 md:h-16 text-base sm:text-lg"
            id="counter"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
