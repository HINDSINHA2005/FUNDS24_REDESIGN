import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Their insurance advisory is exceptional. They analyzed my family's needs and designed a comprehensive coverage plan that fits our budget perfectly.",
    name: 'Amit Patel'
  },
  {
    quote:
      'The loan team was transparent and super responsive. I compared multiple offers and got approval much faster than expected.',
    name: 'Ritika Sharma'
  },
  {
    quote:
      'Funds24 made the entire process effortless. Minimal paperwork, clear communication, and great guidance at every step.',
    name: 'Vikram Singh'
  }
];

const slideVariants = {
  enter: { opacity: 0, y: 12 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 }
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const active = testimonials[activeIndex];

  return (
    <section className="section-shell py-10 sm:py-14">
      <div className="rounded-[30px] border border-white/70 bg-gradient-to-br from-white to-brand-50/25 p-5 shadow-soft sm:p-7 lg:p-8">
        <div className="text-center">
          <p className="pill-badge justify-center">Client Stories</p>
          <h3 className="mt-4 font-['Poppins'] text-2xl font-semibold tracking-tight text-ink sm:text-4xl">
            Client Testimonials
          </h3>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-brand-600/80" />
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-600 sm:text-lg">
            Hear what our satisfied clients say about their experience with Funds24
          </p>
        </div>

        <div className="relative mx-auto mt-8 max-w-4xl">
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-ink shadow-sm transition hover:border-brand-200 hover:text-brand-700 md:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-ink shadow-sm transition hover:border-brand-200 hover:text-brand-700 md:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-[0_10px_24px_rgba(11,26,56,0.06)] sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28 }}
                className="min-h-[260px] text-center sm:min-h-[280px]"
              >
                <Quote className="mx-auto h-10 w-10 text-slate-300" aria-hidden="true" />
                <p className="mx-auto mt-5 max-w-3xl text-lg italic leading-[1.65] text-slate-600 sm:text-[1.35rem]">
                  "{active.quote}"
                </p>

                <div className="mt-6 flex items-center justify-center gap-1.5 text-[#f4c200]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-5 w-5 fill-current" aria-hidden="true" />
                  ))}
                </div>

                <p className="mt-5 text-2xl font-semibold text-ink">{active.name}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 md:hidden">
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-ink"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-ink"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
