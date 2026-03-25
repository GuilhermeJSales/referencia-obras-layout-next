'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState } from 'react';
import { testimonials } from '../mockDatas/testimonials/data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section
      data-testid="testimonials-section"
      className="py-24 bg-zinc-50 grid-bg border-b border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-blue-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              Depoimentos
            </span>
            <div className="w-8 h-1 bg-blue-500" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter uppercase">
            Quem Conhece, Recomenda
          </h2>
        </motion.div>
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-8 left-0 pointer-events-none">
            <Quote size={120} className="text-blue-500 opacity-20" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-zinc-200 p-8 md:p-12 relative"
            >
              <p className="text-xl md:text-2xl text-zinc-700 leading-relaxed mb-8 relative z-10">
                "{current.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-16 h-16 object-cover grayscale"
                />
                <div>
                  <p className="font-black text-zinc-900 uppercase">
                    {current.name}
                  </p>
                  <p className="text-sm text-zinc-500">
                    {current.role} -{' '}
                    <span className="text-blue-600 font-semibold">
                      {current.company}
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  data-testid={`testimonial-dot-${index}`}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 transition-colors cursor-pointer ${
                    index === currentIndex
                      ? 'bg-blue-500'
                      : 'bg-zinc-300 hover:bg-zinc-400'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                data-testid="testimonial-prev"
                onClick={prev}
                className="w-12 cursor-pointer h-12 border border-zinc-200 flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                data-testid="testimonial-next"
                onClick={next}
                className="w-12 h-12 cursor-pointer border border-zinc-200 flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
