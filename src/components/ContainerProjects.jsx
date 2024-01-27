import { motion } from 'framer-motion';
import { ArrowDown, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function ContainerProjects({language}) {

  const translations2 = {
    en: {
      title: 'My Projects',
      
    },
    pt: {
      title: 'Projetos',
    },
  };

  const translations = {
    en: {
      1: {
        title: 'Project Windows',
        description: 'Windows 11 Beta',
        subdescription:
          'This was a ReactJS project to learn various language utilization techniques',
        link: 'https://matheuschiodi.github.io/windows/',
        image: './windows.png',
      },
      2: {
        title: 'Guaranteed Future',
        description: 'Application focused on helping students',
        subdescription: '',
        link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.FuturoGarantido',
        image: '/futurogarantido.png',
      },
      3: {
        title: 'Card Manager',
        description: 'Smart Financial Management',
        subdescription:
          'Experience financial freedom, developed in React Native',
        link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.Invest',
        image: '/cardmanager.png',
      },
      4: {
        title: 'Bibliotrack',
        description: 'Application to manage books',
        subdescription: 'Developed in React Native',
        link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.Bibliotrack',
        image: '/bibliotrack.png',
      },
    },
    pt: {
      1: {
        title: 'Projeto Windows',
        description: 'Beta do Windows 11',
        subdescription:
          'Este foi um projeto em ReactJS para aprender técnicas de utilização de várias linguagens',
        link: 'https://matheuschiodi.github.io/windows/',
        image: './windows.png',
      },
      2: {
        title: 'Futuro Garantido',
        description: 'Aplicativo focado em ajudar estudantes',
        subdescription: '',
        link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.FuturoGarantido',
        image: '/futurogarantido.png',
      },
      3: {
        title: 'Card Manager',
        description: 'Gestão financeira inteligente',
        subdescription:
          'Experimente a liberdade financeira, desenvolvido em React Native',
        link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.Invest',
        image: '/cardmanager.png',
      },
      4: {
        title: 'Bibliotrack',
        description: 'Aplicativo para gerenciar livros',
        subdescription: 'Desenvolvido em React Native',
        link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.Bibliotrack',
        image: '/bibliotrack.png',
      },
    },
  };

  return (
    <>
      <motion.div
        className="w-100  m-0 p-0 mt-[50px] px-2"
        id="ContainerProjects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.6 } }}
      >
        <div className="lg:flex hidden">
          <div
            className="border-[5px] w-[300px] border-dashed border-[#44475A] rounded-[20px]"
            style={{
              boxShadow:
                '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
          >
            <h1 className="lg:text-[50px] text-[30px] font-semibold w-full text-center">
            {translations2[language].title}
            </h1>
          </div>
          <div className="lineMyProjects">
            <ChevronDown sizex={40} className="iconArrow2" />
          </div>
        </div>

        <div className="w-full mx-auto justify-center lg:hidden flex">
          <div className="bg-[#f8f8f2] z-30 absolute w-[200px]">
            <h1 className="lg:text-[50px] text-[30px] font-semibold w-full text-center mt-[-20px]">
              My Projects
            </h1>
          </div>
          <div className="border-[5px] w-[100%] border-dashed border-[#44475A] rounded-[20px]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-[30px]">
          {Object.values(translations[language]).map((project) => (
            <div
              key={project.id}
              className="w-[250px] h-[250px] mb-[20px] lg:mb-[10px] bg-[#44475A] rounded-t-[20px] rounded-b-[20px] card mx-auto"
              style={{
                boxShadow:
                  '2px 5px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}
            >
              <div className="rounded-br-[40px] h-[140px] rounded-t-[20px] imgCard">
                <img
                  src={`${import.meta.env.BASE_URL}/${project.image}`}
                  alt="image"
                  className="w-full rounded-br-[40px] h-[140px] text-[#F8F8F2] rounded-t-[20px] rounded-b-[-200px]"
                />
              </div>
              <div className="rounded-br-[40px] h-[140px] lg:text-[#44475A] text-[#F8F8F2] rounded-b-[20px] textCard">
                <p className="w-full text-center font-medium text-[20px] text-[#FF5555] mt-2">
                  {project.title}
                </p>
                <div className="m-0 p-0 text-[16px]">
                  <p className="w-full text-center text-[#F8F8F2]">
                    {project.description}
                  </p>
                  <p className="restTextCard w-full text-center mt-4 text-[#F8F8F2]">
                    {project.subdescription}
                  </p>
                  <p className="restTextCard w-full text-center mt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F8F8F2] hover:text-[#FF5555]"
                    >
                      <i className="fas fa-eye"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
