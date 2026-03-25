'use client';
import { motion } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Ruler,
  Clock,
  Tag,
} from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { ProjectsProps } from '../mockDatas/portfolio/types';

interface ProjectLightboxProps {
  project: ProjectsProps;
  onClose: () => void;
}

export default function ProjectLightbox({
  project,
  onClose,
}: ProjectLightboxProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1,
    );
  }, [project.images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1,
    );
  }, [project.images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, nextImage, prevImage]);
  return (
    <motion.div
      data-testid="lightbox-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-zinc-900/98 flex"
      onClick={onClose}
    >
      <button
        data-testid="lightbox-close"
        onClick={onClose}
        className="absolute top-6 right-6 z-50 w-12 h-12 bg-white flex items-center justify-center hover:bg-blue-500 transition-colors"
      >
        <X size={24} className="text-zinc-900" />
      </button>

      <div
        className="flex flex-col lg:flex-row w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex-1 lg:w-[70%] flex items-center justify-center p-4 lg:p-8">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full max-h-[60vh] lg:max-h-full flex items-center justify-center"
          >
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Imagem ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>

          {project.images.length > 1 && (
            <>
              <button
                data-testid="lightbox-prev"
                onClick={prevImage}
                className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronLeft size={24} className="text-white" />
              </button>
              <button
                data-testid="lightbox-next"
                onClick={nextImage}
                className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronRight size={24} className="text-white" />
              </button>
            </>
          )}

          <div className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 text-white text-sm font-medium">
            {currentImageIndex + 1} / {project.images.length}
          </div>

          {project.images.length > 1 && (
            <div className="absolute bottom-16 lg:bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
              {project.images.map((img, index) => (
                <button
                  key={index}
                  data-testid={`lightbox-thumb-${index}`}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-16 h-12 overflow-hidden border-2 transition-all ${
                    index === currentImageIndex
                      ? 'border-blue-500'
                      : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:w-[30%] bg-white p-8 overflow-y-auto"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-500 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tight mb-2">
            {project.title}
          </h2>

          <p className="text-lg text-zinc-600 mb-6">
            Cliente:{' '}
            <span className="font-semibold text-zinc-900">
              {project.client}
            </span>
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="border border-zinc-200 p-4">
              <div className="flex items-center gap-2 text-zinc-400 mb-1">
                <MapPin size={14} />
                <span className="text-xs uppercase tracking-wider">
                  Localização
                </span>
              </div>
              <p className="font-bold text-zinc-900">{project.location}</p>
            </div>

            <div className="border border-zinc-200 p-4">
              <div className="flex items-center gap-2 text-zinc-400 mb-1">
                <Ruler size={14} />
                <span className="text-xs uppercase tracking-wider">Área</span>
              </div>
              <p className="font-bold text-zinc-900">{project.area}</p>
            </div>

            <div className="border border-zinc-200 p-4">
              <div className="flex items-center gap-2 text-zinc-400 mb-1">
                <Calendar size={14} />
                <span className="text-xs uppercase tracking-wider">Ano</span>
              </div>
              <p className="font-bold text-zinc-900">{project.year}</p>
            </div>

            <div className="border border-zinc-200 p-4">
              <div className="flex items-center gap-2 text-zinc-400 mb-1">
                <Clock size={14} />
                <span className="text-xs uppercase tracking-wider">
                  Duração
                </span>
              </div>
              <p className="font-bold text-zinc-900">{project.duration}</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-3">
              Descrição do Projeto
            </h3>
            <p className="text-zinc-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-3">
              Serviços Executados
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.services.map((service, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 bg-zinc-100 text-zinc-700 px-3 py-1 text-sm"
                >
                  <Tag size={12} />
                  {service}
                </span>
              ))}
            </div>
          </div>

          <a
            href="#contato"
            data-testid="lightbox-cta"
            onClick={onClose}
            className="cta-btn w-full justify-center"
          >
            Solicitar Projeto Similar
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
