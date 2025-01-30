import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import AllProjectsContext from '../context/AllProjectsContext';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { useTranslation } from 'react-i18next';

import ModalTech from '../components/ModalTech';

export default function AllProjects() {
  const { t } = useTranslation();
  const allProjects = AllProjectsContext();

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
    <section className="mt-20 mb-[-15px] w-full py-10 px-6 relative mt-20 bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl text-white overflow-hidden shadow-2xl">
      <motion.h2
        className="text-[30px] md:text-[40px] lg:text-[50px] text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: 'easeOut' },
        }}
      >
        {t('AllProjects.title')}
      </motion.h2>

      <AnimatePresence>
        {filteredProjects.map((technology) => (
          <motion.div
            key={technology.id}
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, ease: 'easeOut' },
            }}
            exit={{ opacity: 0, y: 20 }}
          >
            <motion.h2 className="text-[30px] md:text-[35px] lg:text-[45px] mt-6 text-gray-100 font-extrabold border-t pt-3 md:text-left text-center">
              {technology.name}
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
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
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.div className="mt-10 flex justify-center">
        <Button
          title={t('AllProjects.back')}
          icon="arrow-left"
          onClick={() => window.history.back()}
        />
      </motion.div>

      <motion.button
        className="fixed bottom-3 left-3 z-50 cursor-pointer bg-gray-900 text-white p-1 rounded-lg shadow-lg px-3"
        onClick={toggleModal}
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.5, y: 20 }}
        whileHover={{
          scale: 1.05,
          backgroundColor: '#ff5555',
          color: '#fff',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {t('AllProjects.select')}
      </motion.button>

      {isVisibleTechnology && (
        <ModalTech
          toggleModal={toggleModal}
          selectTechnology={selectTechnology}
        />
      )}
    </section>
  );
}
