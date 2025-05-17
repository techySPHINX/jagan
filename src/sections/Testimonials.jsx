import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import TestimonialGlowCard from "../components/TestimonialGlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Customer feedback highlights"
        />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialGlowCard key={index} index={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
