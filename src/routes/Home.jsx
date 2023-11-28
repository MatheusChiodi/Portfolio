import ContainerAbout from '../components/ContainerAbout';
import ContainerExperience from '../components/ContainerExperience';
import ContainerProjects from '../components/ContainerProjects';
import Projects from '../components/Projects';
import Header from '../templates/Header';
import Footer from '../templates/Footer';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const translations = {
    en: {
      click: 'View more',
    },
    pt: {
      click: 'Ver mais',
    },
  };

  const [language, setLanguage] = useState('en');

  // cria uma função para alterar o estado de language
  const handleLangue = (langue) => {
    setLanguage(langue);
  };

  const handleVerMaisClick = (status) => {
    setIsExpanded(status);
  };

  return (
    <>
      <Header onLanguage={handleLangue} onHandleClick={handleVerMaisClick} />
      {!isExpanded ? (
        <>
          <ContainerAbout language={language} />
          <ContainerExperience language={language} />
          <ContainerProjects language={language} />
        </>
      ) : null}
      <div className="flex mb-1 p-0">
        {/* Conteúdo do componente Projects */}
        {!isExpanded ? (
          <button
            onClick={() => setIsExpanded(true)}
            className="flex items-center text-center font-bold text-[#44475A] hover:text-[#FF5555] transition-colors mx-auto"
          >
            {translations[language].click}
            <Plus className="inline-block ml-1" size={20} />
          </button>
        ) : null}
      </div>

      {/* Conteúdo do componente Projects */}
      {isExpanded ? <Projects language={language} /> : null}
      <ScrollToTopButton />
      <Footer language={language} onHandleClick={handleVerMaisClick} />
    </>
  );
};

export default Home;
