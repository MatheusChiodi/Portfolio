import React, { useState, memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import MyModal from './MyModal';
import LazyImage from './LazyImage';
import { useTranslation } from 'react-i18next';

const ProjectCard = memo(({ project, technologyName }) => {
  const [showModal, setShowModal] = useState(false);
  const [projectActive, setProjectActive] = useState(null);
  const { t } = useTranslation();

  const handleActiveModal = useCallback((project) => {
    setProjectActive(project);
    setShowModal(true);
  }, []);

  const handleClose = useCallback(() => {
    setShowModal(false);
  }, []);

  const openProject = useCallback((project) => {
    window.open(project.link, '_blank');
  }, []);

  return (
    <motion.div
      className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
      }}
    >
      <LazyImage
        src={`./projects${project.image}`}
        alt={`Screenshot do projeto ${project.title}`}
        className="w-full h-48 rounded-t-2xl"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />

      <div className="p-5 flex flex-col justify-between md:h-[270px] h-auto">
        <h3 className="text-center text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
          {project.title}
        </h3>
        <p className="text-gray-900 text-sm mt-3 text-justify">
          {project.description.substring(0, 240)}...
        </p>

        <motion.div className="mt-4 md:text-left text-center">
          <Button
            title={t('ProjectCard.link')}
            icon="eye"
            onClick={() => handleActiveModal(project)}
          />
        </motion.div>
      </div>

      {showModal && (
        <MyModal
          projectActive={projectActive}
          openProject={() => openProject(projectActive)}
          handleClose={handleClose}
        />
      )}
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
