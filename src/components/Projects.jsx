import { motion } from 'framer-motion';
import { BarChart3 } from 'lucide-react';

import useMainProjects from '../context/mainProjects';
import ProjectCard from './ProjectCard';
import Button from './Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();
  const projectsData = useMainProjects();

  return (
    <motion.div
      id="Projects"
      className="w-full p-4 px-3 bg-gray-100 rounded-2xl shadow-lg"
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
      <motion.h2
        className="flex flex-wrap items-center justify-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.4, duration: 0.6 },
        }}
      >
        <motion.span
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 drop-shadow-2xl">
            {t('projects.title')}
          </h2>
          <BarChart3 size={45} className="text-[#FF5555] pt-1" />
        </motion.span>
      </motion.h2>

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
          <Link to="/projects">
            <Button title={t('projects.link')} icon="plus" />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
