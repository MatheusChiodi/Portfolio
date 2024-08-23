import { useState } from 'react';
import translationsMyProjects, {
  interfaceTexts,
} from '../context/translationsMyProjects';
import ProjectCard from './Projects/ProjectCard';
import ModalTech from './Projects/ModalTech';

const Projects = ({ language }) => {
  const [technology, setTechnology] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const selectTechnology = (tech) => {
    setTechnology(tech);
    toggleModal();
  };

  const filteredProjects = Object.values(translationsMyProjects[language])
    .sort((a, b) => a.rank - b.rank)
    .filter(
      (project) =>
        !technology ||
        project.ti === technology ||
        (technology === 'HTML, CSS e JavaScript' && project.ti === 'HTML')
    );

  return (
    <>
      {isModalOpen && (
        <ModalTech
          language={language}
          toggleModal={toggleModal}
          interfaceTexts={interfaceTexts}
          selectTechnology={selectTechnology}
        />
      )}

      <div className="w-full mt-12 px-4">
        <div
          className="fixed bottom-[11px] left-[20px] h-[25px] text-center inline-block px-4 py-1 leading-none border rounded-xl border-[#44475A] bg-[#44475A] hover:bg-[#FF5555] hover:border-[#FF5555] text-white text-[13px] cursor-pointer transition-all duration-500"
          onClick={toggleModal}
        >
          <h1 className="text-[#F8F8F2]">
            {technology || interfaceTexts[language].title}
          </h1>
        </div>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} language={language} />
        ))}
      </div>
    </>
  );
};

export default Projects;
