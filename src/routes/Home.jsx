import ContainerAbout from '../components/ContainerAbout';
import ContainerExperience from '../components/ContainerExperience';
import ContainerPortfolio from '../components/ContainerPortfolio';
import Projects from '../components/Projects';
import Header from '../templates/Header';
import { useState } from 'react';
import { Plus } from "lucide-react";

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
          <ContainerPortfolio /> 
        </>
        
      ) : null}
      <div className="flex mb-1 p-0">
        {/* Conteúdo do componente Portfolio */}
        {!isExpanded ? (
          <button
            onClick={handleVerMaisClick}
            className="flex items-center lg:mb-0 w-[140px] text-center mt-4 text-[#44475A] lg:text-[#F8F8F2] hover:text-[#FF5555] transition-colors mx-auto"
          >
            View more
            <Plus className="inline-block ml-1" size={20} />
          </button>
        ) : null}
      </div>
      
      {/* Conteúdo do componente Projects */}
      {isExpanded ? (<Projects />) : null}
    </>
  );
};

export default Home;
