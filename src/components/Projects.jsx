import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

import mainProjects from '../context/mainProjects';
import ProjectCard from './ProjectCard';
import Button from './Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();
  const projectsData = mainProjects();

  return (
    <motion.div
      id="Projects"
      className="w-full p-4 px-3 bg-gray-100 rounded-2xl shadow-lg"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -20 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.div
        className="flex flex-wrap items-center gap-2 justify-center md:justify-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.4, duration: 0.6 },
        }}
      >
        <h2 className="text-[25px] md:text-[20px] lg:text-[35px] xl:text-[50px] font-extrabold text-gray-900 drop-shadow-2xl text-center md:text-left">
          {t('projects.title')}
        </h2>
        <motion.span
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FontAwesomeIcon
            icon={faBarsProgress}
            className="text-[#FF5555] text-[25px] md:text-[20px] lg:text-[35px] xl:text-[50px] pt-2"
          />
        </motion.span>
      </motion.div>

      <motion.div>
        {projectsData.categories.slice(0, 2).map((category) => (
          <motion.div key={category.name} className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {category.projects.slice(0, 6).map((project) => (
                <motion.div
                  key={project.id}
                  whileInView="visible"
                  initial="hidden"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.3 },
                    },
                  }}  
                >
                  <ProjectCard
                    project={project}
                    technologyName={category.name}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          className="mt-5 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
        >
          <Link to="/projects">
            <Button title={t('projects.link')} icon="plus" />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
