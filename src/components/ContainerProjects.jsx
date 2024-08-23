import { motion } from 'framer-motion';
import ProjectsTitle from './ContainerProjects/ProjectCard';
import ProjectCard from './ContainerProjects/ProjectCard';
import { translationsProjects } from '../context/translationsProjects.js';

const ContainerProjects = ({ language }) => {
  const { title, projects } = translationsProjects[language];

  return (
    <motion.div
      className="w-full m-0 p-0 mt-[50px] px-2"
      id="ContainerProjects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.6 } }}
    >
      <ProjectsTitle title={title} />

      <div className="w-full mx-auto justify-center lg:hidden flex">
        <div className="bg-[#f8f8f2] z-30 absolute w-[200px]">
          <h1 className="lg:text-[50px] text-[30px] font-semibold w-full text-center mt-[-20px]">
            {title}
          </h1>
        </div>
        <div className="border-[5px] w-[100%] border-dashed border-[#44475A] rounded-[20px]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-[30px]">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default ContainerProjects;
