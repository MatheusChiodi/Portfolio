import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import HighlightKeywords from './HighlightKeywords';
import { interfaceTexts } from '../../context/translationsMyProjects';

const ProjectCard = ({ project, language }) => {
  const [maxCharacters, setMaxCharacters] = useState(250);
  const [showDetails, setShowDetails] = useState('hide');

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  const translationButton = (language, type) => {
    if (language === 'en') {
      if (type == 'show') return 'Close Details';
      else return 'Show Details ';
    } else {
      if (type == 'show') return 'Fechar Detalhes';
      else return 'Ver Detalhes';
    }
  };

  return (
    <div className="relative flex flex-col lg:flex-row items-center gap-8 p-6 bg-[#f8f8f2] rounded-xl duration-300 mt-4 border-[5px] border-dashed border-[#44475A]">
      <div className="w-full lg:w-1/3">
        <img
          src={`${import.meta.env.BASE_URL}${project.image}`}
          alt={`${project.title} screenshot`}
          className="rounded-lg object-cover w-full h-64 lg:h-auto transition-transform transform hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-between text-center lg:text-left w-full lg:w-2/3 text-[#282a36] ">
        <div>
          <h2 className="text-3xl font-semibold mb-4">{project.title}</h2>
          <p className="text-[#282a36] text-lg mb-6 md:leading-relaxed text-justify">
            {HighlightKeywords(
              truncateText(project.description, maxCharacters)
            )}

            <button
              className="inline-block px-2 py-1 leading-none border rounded-md border-[#FF5555] text-white font-bold bg-[#ea4e4e] hover:brightness-125 text-[14px] ml-2"
              onClick={() => {
                setMaxCharacters(maxCharacters === 250 ? 1050 : 250);
                setShowDetails(showDetails === 'hide' ? 'show' : 'hide');
              }}
            >
              {translationButton(language, showDetails)}{' '}
            </button>

            <br />
          </p>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center self-center lg:self-start text-white bg-gradient-to-r from-[#ff5555] to-[#ff6e6e] hover:from-[#ff6e6e] hover:to-[#ff5555] rounded-lg px-6 py-1 font-medium shadow-md transition-transform transform hover:scale-105"
        >
          {interfaceTexts[language].button}
          <ArrowRight className="ml-3" size={24} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
