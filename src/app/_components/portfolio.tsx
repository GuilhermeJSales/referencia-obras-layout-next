'use client';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectLightbox from './projectLightbox';
import { ArrowRight, MapPin } from 'lucide-react';
import { categories, projects, regions } from '../mockDatas/portfolio/data';
import { ProjectsProps } from '../mockDatas/portfolio/types';
import { useState } from 'react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeRegion, setActiveRegion] = useState('all');
  const [selectedProject, setSelectedProject] = useState<ProjectsProps | null>(
    null,
  );

  const filteredProjects = projects.filter((project) => {
    const categoryMatch =
      activeCategory === 'all' || project.category === activeCategory;
    const regionMatch =
      activeRegion === 'all' || project.region === activeRegion;
    return categoryMatch && regionMatch;
  });

  return (
    <>
      <section
        id="projetos"
        data-testid="portfolio-section"
        className="py-24 bg-white border-b border-zinc-200"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-1 bg-blue-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                Portfolio
              </span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter uppercase">
                  Obras Realizadas
                </h2>
                <p className="text-lg text-zinc-600 mt-4 max-w-2xl">
                  Projetos executados com excelência em todo o Brasil. Clique
                  para ver detalhes.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 flex flex-col md:flex-row gap-6"
          >
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  data-testid={`filter-btn-${cat.id}`}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-zinc-400" />
              <select
                data-testid="filter-region"
                value={activeRegion}
                onChange={(e) => setActiveRegion(e.target.value)}
                className="bg-transparent border border-zinc-200 px-4 py-2 text-sm font-semibold uppercase tracking-wider cursor-pointer focus:outline-none focus:border-zinc-400"
              >
                {regions.map((region) => (
                  <option key={region.id} value={region.id}>
                    {region.label}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  data-testid={`project-card-${project.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setSelectedProject(project)}
                  className={`project-card group aspect-[4/3]`}
                >
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-hover"
                  />

                  <div className="project-card-content">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="location-tag">
                        <MapPin size={10} />
                        {project.location}
                      </span>
                      <span className="text-xs font-semibold text-blue-500 uppercase">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-300 mt-1">
                      {project.client}
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-blue-500 text-sm font-semibold">
                      Ver Projeto
                      <ArrowRight size={14} />
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 z-10">
                    <span className="location-tag">
                      <MapPin size={10} />
                      {project.state}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-zinc-500">
                Nenhum projeto encontrado com os filtros selecionados.
              </p>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectLightbox
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
