import { useRef } from "react";

const GlowCardExperience = ({ card, index, children }) => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", `${angle + 60}deg`);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column relative overflow-hidden"
    >
      <div className="glow absolute inset-0 z-0 pointer-events-none" />
      <div className="relative z-10">
        <div className="flex items-center gap-1 mb-5">
          {Array.from({ length: 5 }, (_, i) => (
            <img key={i} src="/images/star.png" alt="star" className="size-5" />
          ))}
        </div>
        <p className="text-white-50 text-lg mb-5">{card.review}</p>
        {children}
      </div>
    </div>
  );
};

export default GlowCardExperience;
