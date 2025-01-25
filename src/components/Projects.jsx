import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

import AllProjectsContext from '../context/AllProjectsContext';
import ProjectCard from './ProjectCard';

import Button from './Button';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();
  const allProjects = AllProjectsContext();

  return (
    <div className="w-full p-4 bg-gray-100 rounded-2xl mb-4 mt-10" id="Projects">
      <motion.h2
        className="md:text-[20px] lg:text-[30px] xl:text-[60px] text-[30px] text-center md:text-left mb-5 font-extrabold text-gray-900 drop-shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.4 } }}
      >
        {t('projects.title')}{' '}
        <FontAwesomeIcon icon={faBarsProgress} className="text-[#FF5555]" />
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
      >
        {allProjects.technology.slice(0, 1).map((technology) => (
          <motion.div
            key={technology.id}
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3 } }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {technology.projects.slice(0, 6).map((project) => (
                <div key={project.id}>
                  <ProjectCard
                    project={project}
                    technologyName={technology.name}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
        <Link to="/projects" className="mt-5 flex justify-center">
          <Button title={t('projects.link')} icon="plus" />
        </Link>
      </motion.div>
    </div>
  );
}
