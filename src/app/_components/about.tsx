'use client';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Target } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: CheckCircle,
      title: 'Qualidade Garantida',
      description:
        'Materiais de primeira linha e mão de obra qualificada em todos os projetos.',
    },
    {
      icon: Award,
      title: '100% de Aprovação',
      description:
        'Todos os nossos projetos são aprovados junto ao Corpo de Bombeiros e prefeituras.',
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description:
        'Engenheiros, arquitetos e mestres de obras com anos de experiência.',
    },
    {
      icon: Target,
      title: 'Pontualidade',
      description: 'Compromisso com prazos e cronogramas rigorosos de entrega.',
    },
  ];
  return (
    <section
      id="sobre"
      data-testid="about-section"
      className="py-24 bg-white border-b border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-1 bg-blue-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                Sobre Nós
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter uppercase mb-6">
              Excelência e Confiança em Cada Obra
            </h2>

            <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
              A <strong className="text-zinc-900">Referência Obras</strong> é
              uma empresa de engenharia e construções com mais de 15 anos de
              experiência no mercado brasileiro. Atuamos em todo o território
              nacional, oferecendo soluções completas para projetos industriais,
              comerciais e residenciais.
            </p>

            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              Nossa missão é transformar projetos em resultados concretos, com
              eficiência, responsabilidade técnica e o mais alto padrão de
              qualidade. Somos especialistas em regularização e obtenção de AVCB
              junto ao Corpo de Bombeiros.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-zinc-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] overflow-hidden border border-zinc-200">
                  <img
                    src="https://images.unsplash.com/photo-1772299121503-cd62a57e3a26?w=600"
                    alt="Construção industrial"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="bg-blue-500 p-6 text-center">
                  <span className="text-4xl font-black text-white">15+</span>
                  <p className="text-sm font-bold uppercase tracking-wider text-white">
                    Anos de Mercado
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-zinc-900 p-6 text-center">
                  <span className="text-4xl font-black text-white">150+</span>
                  <p className="text-sm font-bold uppercase tracking-wider text-zinc-400">
                    Projetos Entregues
                  </p>
                </div>
                <div className="aspect-[4/5] overflow-hidden border border-zinc-200">
                  <img
                    src="https://images.pexels.com/photos/7108784/pexels-photo-7108784.jpeg?w=600"
                    alt="Estrutura em construção"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-blue-500 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
