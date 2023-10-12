import { ArrowRight } from 'lucide-react';
import Header from '../templates/Header';
import { motion } from 'framer-motion';

const Projects = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const projects = [
    {
      id: '1',
      title: 'Home do Instagram',
      description: 'Project was created for learning purposes and knowledge',
      link: 'https://matheuschiodi.github.io/Recriando-Home-Instagram/',
      image: '/recriando_home_instagram.png',
    },
    {
      id: '2',
      title: 'NLW Spacetime',
      description: 'NLW Spacetime, a one-week project conducted by Rocketseat',
      link: 'https://matheuschiodi.github.io/NLW-Spacetime-not-Prisma/',
      image: '/spacetime.png',
    },
    {
      id: '3',
      title: 'Project Shop',
      description: 'Project created as a way to demonstrate the home page',
      link: 'https://matheuschiodi.github.io/Project-Shop/',
      image: '/projectShop.png',
    },
    {
      id: '4',
      title: 'TCC Parque Vivo',
      description: 'TCC Parque Vivo, a project developed for the conclusion',
      link: 'https://github.com/MatheusChiodi/TccParqueVivoV1',
      image: '/parquevivo.png',
    },
    {
      id: '5',
      title: 'Project Tic Tac Toe',
      description:
        'The Tic Tac Toe project (also known as Noughts and Crosses) is an interactive and engaging implementation of a classic game that has been developed for the purpose of study and entertainment. In this project, users can access a website and enjoy exciting Tic Tac Toe matches with their friends or other online players. With features such as player name selection, a scoring system, and a user-friendly interface.',
      link: 'https://matheuschiodi.github.io/tic-tac-toe/',
      image: '/tic_tac_toe.png',
    },
    {
      id: '6',
      title: 'Project Windows',
      description: 'Windows 11 Beta',
      link: 'https://matheuschiodi.github.io/windows/',
      image: '/windows.png',
    },
    {
      id: '7',
      title: 'Pomodoro Prime Timer',
      description: 'Project created with the intention of helping learning',
      link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.PomodoroPrimeTimer',
      image: '/pomodoro_prime_timer.png',
    },
    {
      id: '8',
      title: 'Diversão em Dupla jogos de 2',
      description: 'Application intended to be light and simple to play',
      link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.dualgame',
      image: '/dualgame.png',
    },
    {
      id: '9',
      title: 'Futuro Garantido',
      description: 'Application focused on helping students',
      link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.FuturoGarantido',
      image: '/futurogarantido.png',
    },
  ];
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1 } }}
        className="w-full mt-10"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="grid grid-cols-1 md:grid-cols-2 p-5 w-full"
          >
            <div>
              <img
                src={`${import.meta.env.BASE_URL}${project.image}`}
                className=" aspect-video object-cover rounded-t-xl md:rounded-tr-[0px] roudend-s-[0px] md:rounded-s-xl"
              />
            </div>
            <div className="p-3 border-2 rounded-b-xl lg:rounded-bl-[0px] md:border-l-0 md:rounded-e-xl text-[#44475A]">
              <h1 className="text-center text-xl font-bold mb-3">
                {project.title}
              </h1>
              <p className=" leading-relaxed ">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF5555] transition-all duration-300"
              >
                Acessar
                <ArrowRight className="inline-block ml-1" size={20} />
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Projects;
