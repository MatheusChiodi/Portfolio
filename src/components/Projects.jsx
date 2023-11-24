import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Projects = ({ language }) => {
  const [technology, setTechnology] = useState('');
  const [modalTechnology, setModalTechnology] = useState(false);

  const handleModalTechnology = () => {
    setModalTechnology(!modalTechnology);
  };

  const handleTechnology = (technology) => {
    setTechnology(technology);
    setModalTechnology(!modalTechnology);
  };

  const translations = {
    en: {
      1: {
        title: 'Guaranteed Future',
        description:
          'The "MChiodi - Futuro Garantido" project is a tool designed to assist students. Developed using React Native, this intuitive and simple application facilitates efficient time management for users, aiding them in their academic pursuits. Available for download on the Google Play Store, "Futuro Garantido" stands as a testament to proactive assistance in students’ daily lives.',
        link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.FuturoGarantido',
        image: '/futurogarantido.png',
        ti: 'React Native',
        rank: 1,
      },
      2: {
        title: 'Dual Game',
        description:
          '"Diversão em Dupla" is my first project developed from scratch using React Native. Designed as a lightweight, user-friendly gaming platform, it provides enjoyable games for friends to play together. With a focus on simplicity, the app is available on the Google Play Store, marking my initial independent application of React Native development skills and learning through the process.',
        link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.dualgame',
        image: '/dualgame.png',
        ti: 'React Native',
        rank: 1,
      },
      3: {
        title: 'Pomodoro Prime Timer',
        description:
          'The Pomodoro Prime Timer project was created with the intention of helping people learn and improve their productivity. It is a simple and intuitive application that allows users to set a timer for their tasks, helping them to focus and manage their time more efficiently. The project was developed using React Native, and it is available for download on the Google Play Store.',
        link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.PomodoroPrimeTimer',
        image: '/pomodoro_prime_timer.png',
        ti: 'React Native',
        rank: 1,
      },
      4: {
        title: 'MChiodi - Training Record',
        description:
          'The "MChiodi - Training Record" project is a tool designed to assist athletes. Developed using React Native, this intuitive and simple application facilitates efficient time management for users, aiding them in their training. Available for download on the Google Play Store, "MChiodi - Training Record" stands as a testament to proactive assistance in athletes’ daily lives.',
        link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.TrainingRecord',
        image: '/trainingrecord.png',
        ti: 'React Native',
        rank: 1,
      },
      5: {
        title: 'Project Windows',
        description:
          'This educational project was crafted using ReactJS to explore various language techniques. The goal was to create components resembling the Windows system using custom code without relying on pre-built APIs. Each component was designed to enhance understanding and proficiency in ReactJS, offering a rich learning experience while experimenting with diverse coding approaches within the framework.',
        link: 'https://matheuschiodi.github.io/windows/',
        image: '/windows.png',
        ti: 'ReactJS',
        rank: 2,
      },
      6: {
        title: 'Project Shop',
        description:
          'Welcome to our Online Marketplace for Electronic Projects! Crafted with ReactJS for educational purposes, this platform simulates e-commerce experiences, providing hands-on learning in buying and selling electronic projects. Engage with this interactive tool to apply key web development concepts and technologies, enhancing your understanding and skills in online commerce for electronic projects.',
        link: 'https://matheuschiodi.github.io/Project-Shop/',
        image: '/projectShop.png',
        ti: 'ReactJS',
        rank: 2,
      },
      7: {
        title: 'Project Tic Tac Toe',
        description:
          'The Tic Tac Toe (Noughts and Crosses) project, developed using ReactJS, provides an engaging and interactive gaming experience for both study and entertainment purposes. Users can enjoy exciting matches with friends or online players through a user-friendly website. It features player name customization, a scoring system, and a sleek interface, serving as both an enjoyable tool for entertainment and a valuable resource for ReactJS study.',
        link: 'https://matheuschiodi.github.io/tic-tac-toe/',
        image: '/tic_tac_toe.png',
        ti: 'ReactJS',
        rank: 2,
      },
      8: {
        title: 'NLW Spacetime',
        description:
          'During this inspiring event, I had the opportunity to participate and dive into the creation of a memory-recalling application using powerful technologies such as ReactJS, React Native, NextJS, among others. Over the course of five intense days, the Rocketseat team provided valuable lessons, opening the doors to a world of possibilities and learning.',
        link: 'https://matheuschiodi.github.io/NLW-Spacetime-not-Prisma/',
        image: '/spacetime.png',
        ti: 'ReactJS',
        rank: 2,
      },
      9: {
        title: 'TCC Parque Vivo',
        description:
          "Developed for the TIIEM at IFSP - Campus Araraquara, this capstone project supports nonprofit 'Parque Vivo', integrating basic and technical knowledge acquired during the course. Utilizing HTML, CSS, MySQL, PHP, Ajax, and JavaScript, it reflects our learning journey and hands-on skills. It's a practical demonstration of comprehensive understanding and application of these technologies, showcasing seamless integration of theory and practice.",
        link: 'https://github.com/MatheusChiodi/TccParqueVivoV1',
        image: '/parquevivo.png',
        ti: 'HTML',
        rank: 3,
      },
      10: {
        title: 'Training Record version web',
        description:
          'The "Training Record version web" project was meticulously developed using the ReactJS library, offering a fluid and responsive web experience for its users. Its noteworthy to mention that this system was inspired by and based on another project named "MChiodi - Training Record," which was originally developed using React Native technology. This transition and recreation attest to the flexibility and adaptability of React tools, providing consistent solutions for both mobile and web platforms.',
        link: 'https://matheuschiodi.github.io/Training/',
        image: '/trainingrecordweb.png',
        ti: 'ReactJS',
        rank: 2,
      },
      11: {
        title: 'New Spotify beta',
        description:
          'This project was developed using ReactJS and TailwindCSS, offering a fluid and responsive web experience for its users. It was inspired by the Spotify platform, and it provides a rich user experience for music lovers. Serving as both an enjoyable tool for entertainment and a valuable resource for ReactJS study.',
        link: 'https://matheuschiodi.github.io/spotify/',
        image: '/spotify.png',
        ti: 'ReactJS',
        rank: 2,
      },
    },

    pt: {
      1: {
        title: 'Futuro Garantido',
        description:
          'O projeto "Futuro Garantido" é uma ferramenta projetada para auxiliar estudantes. Desenvolvido usando React Native, este aplicativo intuitivo e simples facilita o gerenciamento eficiente do tempo para os usuários, ajudando-os em seus estudos acadêmicos. Disponível para download no Google Play Store, "Futuro Garantido" é um testemunho do auxílio proativo no dia a dia dos estudantes.',
        link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.FuturoGarantido',
        image: '/futurogarantido.png',
        ti: 'React Native',
        rank: 1,
      },
      2: {
        title: 'Diversão em Dupla: Jogos para Dois',
        description:
          '"Diversão em Dupla" é meu primeiro projeto desenvolvido do zero utilizando React Native. Projetado como uma plataforma de jogos leve e amigável, ele proporciona jogos divertidos para amigos jogarem juntos. Com foco na simplicidade, o aplicativo está disponível no Google Play Store, marcando minha primeira aplicação independente das habilidades e aprendizados de desenvolvimento com React Native.',
        link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.dualgame',
        image: '/dualgame.png',
        ti: 'React Native',
        rank: 1,
      },
      3: {
        title: 'Pomodoro Prime Timer',
        description:
          'O projeto Pomodoro Prime Timer foi criado com a intenção de ajudar as pessoas a aprenderem e melhorarem sua produtividade. É um aplicativo simples e intuitivo que permite aos usuários definir um temporizador para suas tarefas, ajudando-os a se concentrar e gerenciar seu tempo de forma mais eficiente. O projeto foi desenvolvido usando React Native e está disponível para download no Google Play Store.',
        link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.PomodoroPrimeTimer',
        image: '/pomodoro_prime_timer.png',
        ti: 'React Native',
        rank: 1,
      },
      4: {
        title: 'MChiodi - Training Record',
        description:
          'O projeto "MChiodi - Training Record" é uma ferramenta projetada para auxiliar atletas. Desenvolvido usando React Native, este aplicativo intuitivo e simples facilita o gerenciamento eficiente do tempo para os usuários, ajudando-os em seus treinos. Disponível para download no Google Play Store, "MChiodi - Training Record" é um testemunho do auxílio proativo no dia a dia dos atletas.',
        link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.TrainingRecord',
        image: '/trainingrecord.png',
        ti: 'React Native',
        rank: 1,
      },
      5: {
        title: 'Projeto Windows',
        description:
          'Este projeto educacional foi elaborado usando ReactJS para explorar várias técnicas de linguagem. O objetivo era criar componentes que se assemelhassem ao sistema Windows usando código personalizado, sem depender de APIs prontas. Cada componente foi projetado para aprimorar o entendimento e a proficiência em ReactJS, oferecendo uma rica experiência de aprendizado enquanto se experimenta diversas abordagens de codificação dentro do framework.',
        link: 'https://matheuschiodi.github.io/windows/',
        image: '/windows.png',
        ti: 'ReactJS',
        rank: 2,
      },
      6: {
        title: 'Projeto Loja',
        description:
          'Bem-vindo ao nosso Mercado Online para Projetos Eletrônicos! Desenvolvida com ReactJS para fins educacionais, esta plataforma simula experiências de e-commerce, proporcionando aprendizado prático na compra e venda de projetos eletrônicos. Engaje-se com esta ferramenta interativa para aplicar conceitos e tecnologias-chave de desenvolvimento web, aprimorando seu entendimento e habilidades no comércio online de projetos eletrônicos.',
        link: 'https://matheuschiodi.github.io/Project-Shop/',
        image: '/projectShop.png',
        ti: 'ReactJS',
        rank: 2,
      },
      7: {
        title: 'Projeto Jogo da Velha',
        description:
          'O projeto Jogo da Velha, desenvolvido utilizando ReactJS, proporciona uma experiência de jogo envolvente e interativa para fins de estudo e entretenimento. Os usuários podem desfrutar de partidas empolgantes com amigos ou jogadores online por meio de um site amigável. Ele possui personalização de nome de jogador, sistema de pontuação e uma interface elegante, servindo como uma ferramenta divertida para entretenimento e um recurso valioso para o estudo do ReactJS.',
        link: 'https://matheuschiodi.github.io/tic-tac-toe/',
        image: '/tic_tac_toe.png',
        ti: 'ReactJS',
        rank: 2,
      },
      8: {
        title: 'NLW Spacetime',
        description:
          'Durante este evento inspirador, tive a oportunidade de participar e me aprofundar na criação de um aplicativo de recordação de memórias usando tecnologias poderosas como ReactJS, React Native, NextJS, dentre outras. Ao longo de cinco dias intensos, a equipe Rocketseat ofereceu lições valiosas, abrindo as portas para um mundo de possibilidades e aprendizado.',
        link: 'https://matheuschiodi.github.io/NLW-Spacetime-not-Prisma/',
        image: '/spacetime.png',
        ti: 'ReactJS',
        rank: 2,
      },
      9: {
        title: 'TCC Parque Vivo',
        description:
          'Desenvolvido para o TIIEM no IFSP - Campus Araraquara, este projeto final apoia a organização sem fins lucrativos "Parque Vivo", integrando conhecimentos básicos e técnicos adquiridos durante o curso. Utilizando HTML, CSS, MySQL, PHP, Ajax e JavaScript, ele reflete nossa jornada de aprendizado e habilidades práticas. É uma demonstração prática da compreensão e aplicação abrangentes dessas tecnologias, mostrando a integração perfeita entre teoria e prática.',
        link: 'https://github.com/MatheusChiodi/TccParqueVivoV1',
        image: '/parquevivo.png',
        ti: 'HTML',
        rank: 3,
      },
      10: {
        title: 'Training Record versão web',
        description:
          'O projeto "Training Record versão web" foi meticulosamente desenvolvido usando a biblioteca ReactJS, oferecendo uma experiência web fluida e responsiva para seus usuários. Vale ressaltar que este sistema foi inspirado e baseado em outro projeto chamado "MChiodi - Training Record", que foi originalmente desenvolvido usando a tecnologia React Native. Essa transição e recriação atestam a flexibilidade e adaptabilidade das ferramentas React, fornecendo soluções consistentes para plataformas móveis e web.',
        link: 'https://matheuschiodi.github.io/Training/',
        image: '/trainingrecordweb.png',
        ti: 'ReactJS',
        rank: 2,
      },
      11: {
        title: 'Novo Spotify beta',
        description:
          'Este projeto foi desenvolvido usando ReactJS e TailwindCSS, oferecendo uma experiência web fluida e responsiva para seus usuários. Ele foi inspirado na plataforma Spotify e oferece uma rica experiência para os amantes da música. Servindo como uma ferramenta divertida para entretenimento e um recurso valioso para o estudo do ReactJS.',
        link: 'https://matheuschiodi.github.io/spotify/',
        image: '/spotify.png',
        ti: 'ReactJS',
        rank: 2,
      },
    },
  };

  const translations2 = {
    en: {
      title: 'Choose a technology',
      subtitle: 'All',
      button: 'Access',
    },
    pt: {
      title: 'Escolha uma tecnologia',
      subtitle: 'Todas',
      button: 'Acessar',
    },
  };

  const renderHighlightedText = (text) => {
    const wordsToHighlight = [
      'HTML',
      'HTML,',
      'CSS,',
      'JavaScript,',
      'ReactJS,',
      'ReactJS',
      'ReactJS.',
      'React',
      'Native,',
      'Native.',
      'Native',
      'NextJS,',
      'MySQL,',
      'PHP,',
      'Ajax',
      'Ajax,',
      'Rocketseat',
      '"Parque',
      'Vivo",',
      'Google',
      'Play',
      'Store,',
      'Store.',
      'TailwindCSS,',
    ];

    const tokens = text.split(/(\s+)/).map((word) => {
      if (wordsToHighlight.includes(word)) {
        return <span style={{ color: '#ff5555' }}>{word}</span>;
      }
      return word;
    });

    return tokens;
  };

  return (
    <>
      {modalTechnology ? (
        <div className="flex justify-center items-center fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity ease-out duration-300 z-50 overflow-y-auto">
          <div className="relative bg-[#44475A] rounded-lg mx-auto mt-10 w-[300px] overflow-hidden shadow-xl">
            <div className="pt-2 pb-3">
              <div className="flex justify-around items-center border-b pb-1">
                <p className="text-[#F8F8F2]">
                  {translations2[language].title}
                </p>
                <button
                  className="text-[#F8F8F2] hover:text-[#FF5555] focus:outline-none focus:text-gray-400"
                  aria-label="Close"
                  id="closeContact"
                  onClick={handleModalTechnology}
                >
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path d="M18.2929 5.70711C18.6834 6.09763 18.6834 6.7308 18.2929 7.12132L13.1213 12.2929L18.2929 17.4645C18.6834 17.855 18.6834 18.4882 18.2929 18.8787C17.9024 19.2692 17.2692 19.2692 16.8787 18.8787L12.7071 13.7071L7.53553 18.8787C7.14503 19.2692 6.51184 19.2692 6.12132 18.8787C5.7308 18.4882 5.7308 17.855 6.12132 17.4645L11.2929 12.2929L6.12132 7.12132C5.7308 6.7308 5.7308 6.09763 6.12132 5.70711C6.51184 5.31658 7.14503 5.31658 7.53553 5.70711L12.7071 10.8787L16.8787 6.70711C17.2692 6.31658 17.9024 6.31658 18.2929 6.70711Z" />
                  </svg>
                </button>
              </div>
              <div className="mt-2">
                <div className="flex justify-center items-center">
                  <button
                    className="inline-block px-2 py-1 leading-none border rounded-xl border-[#FF5555] text-white font-bold bg-[#ea4e4e] hoverBrightness"
                    onClick={() => handleTechnology('React Native')}
                    style={{
                      boxShadow:
                        '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    React Native
                  </button>
                  <button
                    className="inline-block px-2 py-1 leading-none border rounded-xl border-[#6272A4] text-white font-bold bg-[#6272A4] ml-2 hoverBrightness"
                    onClick={() => handleTechnology('ReactJS')}
                    style={{
                      boxShadow:
                        '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    ReactJS
                  </button>
                </div>
                <div className="flex justify-center items-center mt-2">
                  <button
                    className="inline-block px-2 py-1 leading-none border rounded-xl border-[#FFB86C] font-bold bg-[#FFB86C] text-[#282A36] hoverBrightness"
                    onClick={() => handleTechnology('HTML, Css e JavaScript')}
                    style={{
                      boxShadow:
                        '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    HTML, Css e JavaScript
                  </button>
                </div>
                <div className="flex justify-center items-center mt-2">
                  <button
                    className="inline-block px-2 py-1 leading-none border rounded-xl border-[#BD93F9] font-bold bg-[#BD93F9] text-[#282A36] hoverBrightness"
                    onClick={() => handleTechnology('')}
                    style={{
                      boxShadow:
                        '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    {translations2[language].subtitle}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="w-full mt-9">
        <div
          className="fixed bottom-[11px] left-[20px] h-[25px] text-center inline-block px-4 py-1 leading-none border rounded-xl border-[#44475A] bg-[#44475A] hover:bg-[#FF5555] hover:border-[#FF5555] text-white text-[13px] cursor-pointer transition-all duration-500"
          style={{
            boxShadow:
              '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
          }}
          onClick={handleModalTechnology}
        >
          <h1 className="text-[#F8F8F2]">
            {technology === '' ? (
              <span>{translations2[language].title}</span>
            ) : (
              <span>{technology}</span>
            )}
          </h1>
        </div>
        {Object.values(translations[language])
          .sort((a, b) => a.rank - b.rank)
          .filter((project) => {
            if (technology === '') {
              return project;
            } else if (technology === 'HTML, Css e JavaScript') {
              return project.ti === 'HTML';
            } else if (technology === 'React Native') {
              return project.ti === 'React Native';
            } else if (technology === 'ReactJS') {
              return project.ti === 'ReactJS';
            } else {
              return project.ti === technology;
            }
          })

          .map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-2 w-full px-5 py-3"
            >
              <div>
                <img
                  src={`${import.meta.env.BASE_URL}${project.image}`}
                  className="border-2 aspect-video object-cover rounded-t-xl lg:rounded-tr-[0px] roudend-s-[0px] lg:rounded-s-xl"
                />
              </div>
              <div className="p-3 border-2 rounded-b-xl lg:rounded-bl-[0px] lg:border-l-0 lg:rounded-e-xl text-[#44475A]">
                <h1 className="text-center text-xl font-bold mb-2 lg:text-[20px] xl:text-[25px]">
                  {project.title}
                </h1>
                <p className=" leading-relaxed lg:text-[15px] xl:text-[20px] text-justify">
                  {renderHighlightedText(project.description)}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:text-[15px] xl:text-[20px] hover:text-[#FF5555] transition-all duration-300"
                >
                  {translations2[language].button}{' '}
                  <ArrowRight className="inline-block ml-1" size={20} />
                </a>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Projects;
