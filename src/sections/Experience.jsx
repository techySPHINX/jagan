import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCardExperience from "../components/GlowCardExperience";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.utils.toArray(".timeline").forEach((timeline) => {
      ScrollTrigger.create({
        trigger: timeline,
        start: "top center",
        end: "70% center",
        scrub: true,
        onUpdate: (self) => {
          gsap.to(timeline, {
            scaleY: 1 - self.progress,
            transformOrigin: "bottom center",
            ease: "power1.inOut",
          });
        },
      });
    });
    

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper timeline-card">
                {/* Left section */}
                <div className="xl:w-2/6">
                  <GlowCardExperience card={card}>
                    <div className="company-name flex gap-1 flex-wrap">
                      {card.companyName.split("").map((char, index) => (
                        <span
                          key={index}
                          className={`font-mono font-bold text-2xl sm:text-2xl md:text-3xl ${
                            index % 2 === 0
                              ? "text-[#D8B4FE]"
                              : "text-[#FF6B6B]"
                          }`}
                        >
                          {char}
                        </span>
                      ))}
                    </div>
                  </GlowCardExperience>
                </div>

                {/* Right section */}
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    {/* Timeline line */}
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>

                    {/* Text content */}
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img
                          src={card.logoPath}
                          alt={`${card.companyName} logo`}
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">
                          🗓️&nbsp;{card.date}
                        </p>
                        <p className="text-[#839CB5] italic">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map((item, index) => (
                            <li key={index} className="text-lg">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
