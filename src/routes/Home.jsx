import ContainerAbout from '../components/ContainerAbout';
import ContainerExperience from '../components/ContainerExperience';
import ContainerProjects from '../components/ContainerProjects';
import Projects from '../components/Projects';
import Header from '../templates/Header';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleVerMaisClick = () => {
    setIsExpanded(true);
  };

  return (
    <>
      <Header />
      {!isExpanded ? (
        <>
          <ContainerAbout />
          <ContainerExperience />
          <ContainerProjects />
        </>
      ) : null}
      <div className="flex mb-1 p-0">
        {/* Conteúdo do componente Projects */}
        {!isExpanded ? (
          <button
            onClick={handleVerMaisClick}
            className="flex items-center mb-[20px] w-[140px] text-center font-bold text-[#44475A] hover:text-[#FF5555] transition-colors mx-auto"
          >
            View more
            <Plus className="inline-block ml-1" size={20} />
          </button>
        ) : null}
      </div>

      {/* Conteúdo do componente Projects */}
      {isExpanded ? <Projects /> : null}
      <ScrollToTopButton />
    </>
  );
};

export default Home;
