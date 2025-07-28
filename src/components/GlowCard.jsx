import { useRef } from "react";

const GlowCard = ({ index, children, footer }) => {
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
      className="relative card card-border rounded-xl p-6 min-h-[600px] flex flex-col justify-between bg-black/90 shadow-lg backdrop-blur-md"
    >
      {/* Glow Effect */}
      <div className="glow pointer-events-none absolute inset-0 z-0" />

      {/* Top section (Stars or other content) */}
      <div className="flex items-center gap-1 mb-3 z-10 relative">
        {Array.from({ length: 5 }, (_, i) => (
          <img key={i} src="/images/star.png" alt="star" className="size-5" />
        ))}
      </div>

      {/* Main content */}
      <div className="flex flex-col justify-between flex-grow relative z-10">
        {children}
      </div>

      {/* Footer fixed to bottom-left */}
      {footer && <div className="absolute bottom-10 left-10 z-10">{footer}</div>}
    </div>
  );
};

export default GlowCard;
