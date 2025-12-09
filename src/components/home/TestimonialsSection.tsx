import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    business: "Founder, Local Fitness Studio",
    review:
      "VarniElevate Media helped us generate consistent leads at a much lower cost. Communication was smooth and results were strong.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    business: "CEO, Fashion E-commerce",
    review:
      "Our ROAS improved dramatically within the first month. The team really understands Facebook advertising inside out.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    business: "Digital Course Creator",
    review:
      "They don't just run ads—they build strategies. Our course sales tripled thanks to their data-driven approach.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="heading-lg text-foreground">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-card card-hover border border-border/50 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-4 right-4 md:top-6 md:right-6 text-accent/20" size={32} />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                ))}
              </div>

              <p className="text-body-sm mb-6 relative z-10">"{testimonial.review}"</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold text-base md:text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm md:text-base text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">{testimonial.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
