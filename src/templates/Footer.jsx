import { useState } from 'react';

const Footer = ({language, onHandleClick}) => {

  const translations = {
    en: {
      title1: 'Information',
      title2: 'Languages',
      item1: 'About',
      item2: 'Experience',
      item3: 'Projects',
      item4: 'All rights reserved',
      item5: 'Curriculum'
    },
    pt: {
      title1: 'Informações',
      title2: 'Linguagens',
      item1: 'Sobre',
      item2: 'Experiência',
      item3: 'Projetos',
      item4: 'Todos os direitos reservados',
      item5: 'Currículo'
    },
  };

  const currentYear = new Date().getFullYear();

  const handleVerMaisClick = () => {
    onHandleClick(false);
  };
  return (
    <div className="justify-center items-center w-full bg-[#44475A] border-t-[3px] border-[#FF5555] mt-[10px]">
      <div className="grid md:grid-cols-3 grid-cols-1 w-full mt-[10px] justify-center items-center">
        <div className="justify-center items-center text-center text-[#F8F8F2]">
          <h2 className="font-medium">
            <span className="text-[#FF5555] font-medium">&lt;</span>
            Matheus Chiodi
            <span className="text-[#FF5555] font-medium"> /</span>
            <span className="text-[#FF5555] font-medium">&gt;</span>
          </h2>
          <div className="text-[1.5rem] flex justify-center items-center">
            <a
              href="https://www.linkedin.com/in/matheus-chiodi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF5555]"
              title="Linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/MatheusChiodi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF5555] mx-2"
              title="Github"
            >
              <i className="fab fa-github-square"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5516988400100&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF5555]"
              title="Whatsapp"
            >
              <i className="fab fa-whatsapp-square"></i>
            </a>
            <a
              data-tip="Seu Tooltip Aqui"
              href="Curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF5555] mx-2"
              title={translations[language].item5}
            >
              <i className="far fa-id-card"></i>
            </a>
            
          </div>
          <p className="text-[0.8rem]">
            <a
              href="mailto:mchiodidev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF5555] text-[#F8F8F2]"
              title="E-mail"
            >
              mchiodidev@gmail.com
            </a>
          </p>
        </div>
        <div className="justify-center items-center text-center text-[#F8F8F2] mt-5 md:mt-0">
          <h2 className="font-medium">{translations[language].title1}</h2>
          <p className="text-[0.8rem]">
            <a
              href="#ContainerAbout"
              className="hover:text-[#FF5555] text-[#F8F8F2]"
              onClick={handleVerMaisClick}
            >
              {translations[language].item1}
            </a>
          </p>
          <p className="text-[0.8rem]">
            <a
              href="#ContainerExperience"
              className="hover:text-[#FF5555] text-[#F8F8F2]"
              onClick={handleVerMaisClick}
            >
              {translations[language].item2}
            </a>
          </p>
          <p className="text-[0.8rem]">
            <a
              href="#ContainerProjects"
              className="hover:text-[#FF5555] text-[#F8F8F2]"
              onClick={handleVerMaisClick}
            >
              {translations[language].item3}
            </a>
          </p>
        </div>
        <div className="justify-center items-center text-center text-[#F8F8F2] mt-5 md:mt-0">
          <h2 className="font-medium text-[#F8F8F2]">{translations[language].title2}</h2>
          <p className="text-[0.8rem] text-[#F8F8F2]">React JS, React Native</p>
          <p className="text-[0.8rem] text-[#F8F8F2]">Codeigniter 3, SQL e PHP</p>
          <p className="text-[0.8rem] text-[#F8F8F2]">HTML, CSS e Javascript</p>
        </div>
      </div>
      <div className="flex items-center justify-between text-center text-[#F8F8F2] w-full text-[12px] mt-[10px] pb-[5px] border-t-[1px] border-[#FF5555]">
        <p className="m-2 text-[#F8F8F2]">© {currentYear} Matheus Chiodi</p>
        <p className="m-2 text-[#F8F8F2]">{translations[language].item4}</p>
      </div>
    </div>
  );
};

export default Footer;
