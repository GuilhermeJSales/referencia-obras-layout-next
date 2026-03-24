'use client';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { clients } from '../mockDatas/portfolio/data';
export default function Clients() {
  return (
    <section
      data-testid="clients-section"
      className="py-16 bg-zinc-900 border-b border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-bold uppercase tracking-widest text-zinc-500"
        >
          Empresas que confiam em nosso trabalho
        </motion.p>
      </div>

      <Marquee
        gradient={true}
        gradientColor="#09090B"
        gradientWidth={100}
        speed={40}
      >
        {[...clients, ...clients].map((client, index) => (
          <div key={index} className="mx-12 px-8 py-4">
            <span className="text-3xl font-black text-zinc-600 uppercase tracking-wider whitespace-nowrap hover:text-zinc-400 transition-colors">
              {client.logo}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
