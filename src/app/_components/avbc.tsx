'use client';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Target } from 'lucide-react';
import Image from 'next/image';

export default function Avcb() {
  const features = [
    {
      icon: CheckCircle,
      title: 'Qualidade Garantida',
      description:
        'Materiais de primeira linha e execução profissional em todos os projetos.',
    },
    {
      icon: Award,
      title: '100% de Aprovação',
      description:
        'Projetos aprovados junto ao Corpo de Bombeiros e órgãos competentes.',
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description:
        'Profissionais experientes em engenharia e segurança contra incêndio.',
    },
    {
      icon: Target,
      title: 'Pontualidade',
      description: 'Compromisso real com prazos e entregas.',
    },
  ];

  return (
    <section className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* glow background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-500 text-sm font-bold uppercase tracking-widest">
              Especialidade
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mt-4 mb-6">
              Especialistas em{' '}
              <span className="text-blue-500">AVCB e Segurança</span>
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Desenvolvemos projetos completos de engenharia de segurança contra
              incêndio, cuidando de toda a aprovação junto ao Corpo de Bombeiros
              com agilidade e precisão.
            </p>

            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              Atuamos na regularização, emissão e renovação de AVCB, garantindo
              que seu imóvel esteja seguro, dentro da lei e livre de riscos e
              penalizações.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-zinc-800/60 backdrop-blur-sm border border-zinc-700 p-5 rounded-xl hover:border-blue-500 transition"
                  >
                    <Icon className="text-blue-500 mb-3" size={22} />
                    <h4 className="text-white font-semibold mb-1">
                      {item.title}
                    </h4>
                    <p className="text-md text-zinc-300">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* IMAGEM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-zinc-700">
              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

              <Image
                src="/avcb.webp"
                width={600}
                height={600}
                alt="Projeto AVCB"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
