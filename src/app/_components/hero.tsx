'use client';
import { ArrowRight, MapPin, Building } from 'lucide-react';
import { motion } from 'framer-motion';
export default function Hero() {
  return (
    <section
      id="inicio"
      data-testid="hero-section"
      className="min-h-screen grid-bg relative flex items-center border-b border-zinc-200"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80 z-10" />
        <img
          src="https://images.pexels.com/photos/36467707/pexels-photo-36467707.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Construção"
          className="w-full h-full object-cover grayscale opacity-40"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32 pt-40 relative z-20 w-full">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 bg-blue-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                + de 15 anos de experiência
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 leading-15 tracking-tighter uppercase mb-8">
              Construção de Galpões
              <span className="text-blue-500"> e Regularização AVCB </span>
              em Todo o Brasil
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-zinc-600 max-w-xl mb-10 leading-relaxed">
              Galpões industriais, obras comerciais e soluções completas de
              engenharia
              <strong className="text-zinc-900"> em todo o Brasil</strong>.
              Qualidade, segurança e aprovação junto ao Corpo de Bombeiros.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projetos"
                data-testid="cta-ver-projetos"
                className="cta-btn"
              >
                Ver Projetos
                <ArrowRight size={18} />
              </a>
              <a
                href="#contato"
                data-testid="cta-orcamento"
                className="cta-btn cta-btn-outline"
              >
                Solicitar Orçamento
              </a>
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Stat Card 1 */}
              <div className="border border-zinc-200 p-8 bg-white/80 backdrop-blur-sm">
                <span className="text-6xl font-black text-zinc-900">150+</span>
                <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mt-2">
                  Projetos Entregues
                </p>
              </div>

              {/* Stat Card 2 */}
              <div className="border border-zinc-200 p-8 bg-zinc-900 text-white">
                <span className="text-6xl font-black">500k</span>
                <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mt-2">
                  m² Construídos
                </p>
              </div>

              {/* Stat Card 3 */}
              <div className="border border-zinc-200 p-8 bg-blue-500">
                <span className="text-6xl font-black text-white">27</span>
                <p className="text-sm font-semibold uppercase tracking-wider text-white mt-2">
                  Estados Atendidos
                </p>
              </div>

              {/* Stat Card 4 */}
              <div className="border border-zinc-200 p-8 bg-white/80 backdrop-blur-sm">
                <span className="text-6xl font-black text-zinc-900">100%</span>
                <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mt-2">
                  Projetos Aprovados
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Location Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex items-center gap-6 text-sm text-zinc-500"
        >
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-blue-500" />
            <span>Sede em São Paulo</span>
          </div>
          <div className="w-px h-4 bg-zinc-300" />
          <div className="flex items-center gap-2">
            <Building size={16} className="text-blue-500" />
            <span>Atuação Nacional</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
