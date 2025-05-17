import { useRef } from "react";

const TestimonialGlowCard = ({ index, testimonial }) => {
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
      className="relative rounded-xl p-6 mb-6 min-h-[300px] flex flex-col justify-between bg-black/80 shadow-xl backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 card"
    >
      <div className="glow absolute inset-0 z-0" />

      <div className="flex items-center gap-4 mb-4 z-10 relative">
        {/* <img
          src={testimonial.imgPath}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        /> */}
        <div>
          <p className="font-bold text-white">{testimonial.name}</p>
          <p className="text-sm text-white/60">{testimonial.mentions}</p>
        </div>
      </div>
      <p className="text-white/90 text-base leading-relaxed z-10 relative">{testimonial.review}</p>
    </div>
  );
};

export default TestimonialGlowCard;
