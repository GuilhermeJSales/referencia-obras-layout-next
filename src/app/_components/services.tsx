'use client';
import { motion } from 'framer-motion';
import {
  Factory,
  Building,
  Hammer,
  FileCheck,
  ClipboardList,
  Ruler,
  ArrowUpRight,
  LucideIcon,
  MessageCircleMore,
} from 'lucide-react';
import { services } from '../mockDatas/services/data';
import { ServicesIcons } from '../mockDatas/services/types';

const iconMap: Record<ServicesIcons, LucideIcon> = {
  Factory,
  Building,
  Hammer,
  FileCheck,
  ClipboardList,
  Ruler,
};

export default function Services() {
  return (
    <section
      id="servicos"
      data-testid="services-section"
      className="py-24 grid-bg border-b border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-1 bg-blue-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              Especialidades
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter uppercase">
            Nossos Serviços
          </h2>
          <p className="text-lg text-zinc-600 mt-4 max-w-2xl">
            Soluções completas em engenharia civil para atender todas as
            necessidades do seu empreendimento.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const isLarge = index === 0 || index === 3;

            return (
              <motion.div
                key={service.id}
                data-testid={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`service-card group border border-zinc-200 bg-white p-8  ${
                  isLarge ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-zinc-100 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                    <Icon
                      size={28}
                      className="text-zinc-700 group-hover:text-white"
                    />
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-zinc-300 group-hover:text-zinc-900 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <h3 className="text-xl font-black text-zinc-900 uppercase tracking-tight mb-3">
                  {service.title}
                </h3>

                <p className="text-zinc-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="#contato"
            data-testid="cta-services-contact"
            className="cta-btn inline-flex"
          >
            Solicitar Orçamento
            <MessageCircleMore size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
