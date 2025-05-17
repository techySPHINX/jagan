import { useRef } from "react";

const GlowCard = ({ index, children }) => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-6 mb-5 min-h-[550px] flex flex-col justify-between bg-black/90 shadow-lg backdrop-blur-md relative"
    >
      {/* Ensure glow does not block interactions */}
      <div className="glow pointer-events-none absolute inset-0" />

      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img key={i} src="/images/star.png" alt="star" className="size-5" />
        ))}
      </div>

      {/* Actual content passed from parent */}
      <div className="flex flex-col justify-between flex-grow pointer-events-none">
        {children}
      </div>
    </div>
  );
};

export default GlowCard;
