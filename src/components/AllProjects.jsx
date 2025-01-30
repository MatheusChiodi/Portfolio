import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import AllProjectsContext from '../context/AllProjectsContext';
import ProjectCard from '../components/ProjectCard';
import { useTranslation } from 'react-i18next';
import ModalTech from '../components/ModalTech';
import { Code, Layers, ArrowLeft } from 'lucide-react';

export default function AllProjects() {
  const { t } = useTranslation();
  const allProjects = AllProjectsContext();
  const { scrollYProgress } = useScroll();

  const [technology, setTechnology] = useState('');
  const [isVisibleTechnology, setIsVisibleTechnology] = useState(false);

  const toggleModal = () => {
    setIsVisibleTechnology((prevState) => !prevState);
  };

  const selectTechnology = (tech) => {
    setTechnology(tech);
    toggleModal();
  };

  const filteredProjects = technology
    ? allProjects.technology.filter((project) => project.name === technology)
    : allProjects.technology;

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 mt-20 rounded-3xl overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              {t('AllProjects.title')}
            </span>
          </h1>
        </motion.div>
      </section>

      {/* Technology Sections */}
      <div className="max-w-7xl mx-auto px-6">
        <AnimatePresence>
          {filteredProjects.map((technology) => (
            <motion.div
              key={technology.id}
              className="mb-20 bg-gray-800/30 rounded-2xl p-8 shadow-2xl border border-gray-700/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.3, ease: 'easeOut' },
              }}
              exit={{ opacity: 0, y: 20 }}
            >
              <motion.div
                className="flex items-center gap-4 mb-12"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className="p-4 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl shadow-lg">
                  <Code className="text-3xl text-white" strokeWidth={2.5} />
                </div>
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
                  {technology.name}
                </h2>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                {technology.projects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.3, ease: 'easeOut' },
                    }}
                  >
                    <ProjectCard
                      project={project}
                      technologyName={technology.name}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Floating Navigation */}
      <div className="fixed bottom-3 left-6 flex gap-4 z-50">
        <motion.button
          className="flex items-center gap-2 bg-gradient-to-br from-red-500 to-pink-600 text-white p-1 px-3 rounded-lg shadow-xl hover:shadow-2xl transition-shadow cursor-pointer"
          onClick={toggleModal}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <Layers className="w-5 h-5" strokeWidth={2} />
          <span>{t('AllProjects.select')}</span>
        </motion.button>
      </div>

      {/* Modal */}
      {isVisibleTechnology && (
        <ModalTech
          toggleModal={toggleModal}
          selectTechnology={selectTechnology}
        />
      )}
    </div>
  );
}
