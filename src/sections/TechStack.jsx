import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import TechCard from "../components/TechCard";
import { techStackIcons } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  useGSAP(() => {
    const cards = gsap.utils.toArray(".tech-card");

    gsap.fromTo(
      cards,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  }, []);

  return (
    <section id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I can Bring to the Table"
        />

        <div className="grid gap-6 mt-20 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
          {techStackIcons.map((tech) => (
            <div
              key={tech.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg bg-[#10131a]"
              role="listitem"
              aria-label={`Skill: ${tech.name}`}
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechCard model={tech} />
                </div>
                <div className="px-4 py-3 w-full text-center">
                  <p className="text-white text-sm font-medium">{tech.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
