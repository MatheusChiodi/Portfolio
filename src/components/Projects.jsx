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
    <motion.div
      className="w-full p-4 px-3 bg-gray-100 rounded-2xl mb-4 mt-10"
      id="Projects"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -20 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.div
        className="flex flex-wrap items-center gap-2 justify-center md:justify-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.4 } }}
      >
        <h2 className="text-[30px] md:text-[20px] lg:text-[35px] xl:text-[50px] font-extrabold text-gray-900 drop-shadow-2xl text-center md:text-left">
          {t('projects.title')}
        </h2>
        <FontAwesomeIcon
          icon={faBarsProgress}
          className="text-[#FF5555] text-[30px] md:text-[20px] lg:text-[35px] xl:text-[50px] pt-2"
        />
      </motion.div>

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
    </motion.div>
  );
}
