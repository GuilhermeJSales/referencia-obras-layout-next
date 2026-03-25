'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const projectLabels = {
    industrial: 'Galpão Industrial',
    comercial: 'Obra Comercial',
    residencial: 'Residencial',
    reforma: 'Reforma / Ampliação',
    avcb: 'Regularização / AVCB',
    outro: 'Outro',
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      alert('Preencha os campos obrigatórios');
      return;
    }

    const message = `Olá! Meu nome é ${formData.name}.
Empresa: ${formData.company || 'Não informado'}
Telefone: ${formData.phone}
Email: ${formData.email}
Tipo de projeto: ${
      projectLabels[formData.projectType as keyof typeof projectLabels] ||
      'Não informado'
    }

Mensagem:
${formData.message || 'Não informada'}`;

    window.open(
      `https://wa.me/5511961683295?text=${encodeURIComponent(message)}`,
      '_blank',
    );

    setSubmitted(true);

    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      projectType: '',
      message: '',
    });
  };

  return (
    <section id="contato" className="py-24 bg-zinc-900 grid-bg relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-4">
            Solicite seu Orçamento
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Preencha o formulário abaixo e fale direto com a gente no WhatsApp.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="bg-zinc-800 border border-zinc-700 p-12 text-center">
                <div className="w-16 h-16 bg-yellow-500 mx-auto mb-6 flex items-center justify-center">
                  <Send size={32} className="text-zinc-900" />
                </div>

                <h3 className="text-2xl font-black text-white mb-4">
                  Redirecionado!
                </h3>

                <p className="text-zinc-400 mb-6">
                  Você foi encaminhado para o WhatsApp. Finalize o envio por lá
                  😉
                </p>

                <button onClick={() => setSubmitted(false)} className="cta-btn">
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu Nome *"
                    required
                    className="structural-input text-white"
                  />

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Empresa"
                    className="structural-input text-white"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Telefone *"
                    required
                    className="structural-input text-white"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-mail *"
                    required
                    className="structural-input text-white"
                  />
                </div>

                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="structural-input text-white bg-transparent"
                >
                  <option className="text-zinc-900" value="">
                    Tipo de Projeto
                  </option>
                  <option className="text-zinc-900" value="industrial">
                    Galpão Industrial
                  </option>
                  <option className="text-zinc-900" value="comercial">
                    Obra Comercial
                  </option>
                  <option className="text-zinc-900" value="residencial">
                    Residencial
                  </option>
                  <option className="text-zinc-900" value="reforma">
                    Reforma / Ampliação
                  </option>
                  <option className="text-zinc-900" value="avcb">
                    Regularização / AVCB
                  </option>
                  <option className="text-zinc-900" value="outro">
                    Outro
                  </option>
                </select>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva seu projeto..."
                  rows={4}
                  className="structural-input text-white resize-none"
                />

                <button type="submit" className="cta-btn w-full justify-center">
                  Enviar via WhatsApp
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-zinc-800 border border-zinc-700 p-6 flex items-start gap-4">
              <Phone size={24} className="text-yellow-500" />
              <span className="text-zinc-400">(11) 99999-9999</span>
            </div>

            <div className="bg-zinc-800 border border-zinc-700 p-6 flex items-start gap-4">
              <Mail size={24} className="text-yellow-500" />
              <span className="text-zinc-400">
                contato@referenciaobras.com.br
              </span>
            </div>

            <div className="bg-zinc-800 border border-zinc-700 p-6 flex items-start gap-4">
              <MapPin size={24} className="text-yellow-500" />
              <span className="text-zinc-400">São Paulo - SP</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
