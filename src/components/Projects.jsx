import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Projects = ({language}) => {
  const projects = [
    {
      id: '1',
      title: 'Home do Instagram',
      description:
        'Welcome to the Home of Instagram! This project was meticulously crafted with the aim of rekindling the spark of past content while igniting new inspiration. Utilizing HTML and CSS, I’ve constructed an engaging platform right here on the Instagram homepage. This space is not only nostalgic but also educational, offering you a unique experience meticulously designed and brought to life by me.',
      link: 'https://matheuschiodi.github.io/Recriando-Home-Instagram/',
      image: '/recriando_home_instagram.png',
    },
    {
      id: '2',
      title: 'NLW Spacetime',
      description:
        'During this inspiring event, I had the opportunity to participate and dive into the creation of a memory-recalling application using powerful technologies such as ReactJS, React Native, NextJS, among others. Over the course of five intense days, the Rocketseat team provided valuable lessons, opening the doors to a world of possibilities and learning.',
      link: 'https://matheuschiodi.github.io/NLW-Spacetime-not-Prisma/',
      image: '/spacetime.png',
    },
    {
      id: '3',
      title: 'Project Shop',
      description:
        'Welcome to our Online Marketplace for Electronic Projects! Crafted with ReactJS for educational purposes, this platform simulates e-commerce experiences, providing hands-on learning in buying and selling electronic projects. Engage with this interactive tool to apply key web development concepts and technologies, enhancing your understanding and skills in online commerce for electronic projects.',
      link: 'https://matheuschiodi.github.io/Project-Shop/',
      image: '/projectShop.png',
    },
    {
      id: '4',
      title: 'TCC Parque Vivo',
      description:
        "Developed for the TIIEM at IFSP - Campus Araraquara, this capstone project supports nonprofit 'Parque Vivo', integrating basic and technical knowledge acquired during the course. Utilizing HTML, CSS, MySQL, PHP, Ajax, and JavaScript, it reflects our learning journey and hands-on skills. It's a practical demonstration of comprehensive understanding and application of these technologies, showcasing seamless integration of theory and practice.",
      link: 'https://github.com/MatheusChiodi/TccParqueVivoV1',
      image: '/parquevivo.png',
    },
    {
      id: '5',
      title: 'Project Tic Tac Toe',
      description:
        'The Tic Tac Toe (Noughts and Crosses) project, developed using ReactJS, provides an engaging and interactive gaming experience for both study and entertainment purposes. Users can enjoy exciting matches with friends or online players through a user-friendly website. It features player name customization, a scoring system, and a sleek interface, serving as both an enjoyable tool for entertainment and a valuable resource for ReactJS study.',
      link: 'https://matheuschiodi.github.io/tic-tac-toe/',
      image: '/tic_tac_toe.png',
    },
    {
      id: '6',
      title: 'Project Windows',
      description:
        'This educational project was crafted using ReactJS to explore various language techniques. The goal was to create components resembling the Windows system using custom code without relying on pre-built APIs. Each component was designed to enhance understanding and proficiency in ReactJS, offering a rich learning experience while experimenting with diverse coding approaches within the framework.',
      link: 'https://matheuschiodi.github.io/windows/',
      image: '/windows.png',
    },
    {
      id: '7',
      title: 'Diversão em Dupla jogos de 2',
      description:
        '"Diversão em Dupla" is my first project developed from scratch using React Native. Designed as a lightweight, user-friendly gaming platform, it provides enjoyable games for friends to play together. With a focus on simplicity, the app is available on the Google Play Store, marking my initial independent application of React Native development skills and learning through the process.',
      link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.dualgame',
      image: '/dualgame.png',
    },
    {
      id: '8',
      title: 'Pomodoro Prime Timer',
      description:
        'The Pomodoro Prime Timer project was created with the intention of helping people learn and improve their productivity. It is a simple and intuitive application that allows users to set a timer for their tasks, helping them to focus and manage their time more efficiently. The project was developed using React Native, and it is available for download on the Google Play Store.',
      link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.PomodoroPrimeTimer',
      image: '/pomodoro_prime_timer.png',
    },
    {
      id: '9',
      title: 'Futuro Garantido',
      description:
        'The "Futuro Garantido" project is a tool designed to assist students. Developed using React Native, this intuitive and simple application facilitates efficient time management for users, aiding them in their academic pursuits. Available for download on the Google Play Store, "Futuro Garantido" stands as a testament to proactive assistance in students’ daily lives.',
      link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.FuturoGarantido',
      image: '/futurogarantido.png',
    },
  ];

  const translations = {
    en: {
      1: {
        title: 'Home do Instagram',
        description:
          'Welcome to the Home of Instagram! This project was meticulously crafted with the aim of rekindling the spark of past content while igniting new inspiration. Utilizing HTML and CSS, I’ve constructed an engaging platform right here on the Instagram homepage. This space is not only nostalgic but also educational, offering you a unique experience meticulously designed and brought to life by me.',
        link: 'https://matheuschiodi.github.io/Recriando-Home-Instagram/',
        image: '/recriando_home_instagram.png',
      },
      2: {
        title: 'NLW Spacetime',
        description:
          'During this inspiring event, I had the opportunity to participate and dive into the creation of a memory-recalling application using powerful technologies such as ReactJS, React Native, NextJS, among others. Over the course of five intense days, the Rocketseat team provided valuable lessons, opening the doors to a world of possibilities and learning.',
        link: 'https://matheuschiodi.github.io/NLW-Spacetime-not-Prisma/',
        image: '/spacetime.png',
      },
      3: {
        title: 'Project Shop',
        description:
          'Welcome to our Online Marketplace for Electronic Projects! Crafted with ReactJS for educational purposes, this platform simulates e-commerce experiences, providing hands-on learning in buying and selling electronic projects. Engage with this interactive tool to apply key web development concepts and technologies, enhancing your understanding and skills in online commerce for electronic projects.',
        link: 'https://matheuschiodi.github.io/Project-Shop/',
        image: '/projectShop.png',
      },
      4: {
        title: 'TCC Parque Vivo',
        description:
          "Developed for the TIIEM at IFSP - Campus Araraquara, this capstone project supports nonprofit 'Parque Vivo', integrating basic and technical knowledge acquired during the course. Utilizing HTML, CSS, MySQL, PHP, Ajax, and JavaScript, it reflects our learning journey and hands-on skills. It's a practical demonstration of comprehensive understanding and application of these technologies, showcasing seamless integration of theory and practice.",
        link: 'https://github.com/MatheusChiodi/TccParqueVivoV1',
        image: '/parquevivo.png',
      },
      5: {
        title: 'Project Tic Tac Toe',
        description:
          'The Tic Tac Toe (Noughts and Crosses) project, developed using ReactJS, provides an engaging and interactive gaming experience for both study and entertainment purposes. Users can enjoy exciting matches with friends or online players through a user-friendly website. It features player name customization, a scoring system, and a sleek interface, serving as both an enjoyable tool for entertainment and a valuable resource for ReactJS study.',
        link: 'https://matheuschiodi.github.io/tic-tac-toe/',
        image: '/tic_tac_toe.png',
      },
      6: {
        title: 'Project Windows',
        description:
          'This educational project was crafted using ReactJS to explore various language techniques. The goal was to create components resembling the Windows system using custom code without relying on pre-built APIs. Each component was designed to enhance understanding and proficiency in ReactJS, offering a rich learning experience while experimenting with diverse coding approaches within the framework.',
        link: 'https://matheuschiodi.github.io/windows/',
        image: '/windows.png',
      },
      7: {
        id: '7',
        title: 'Dual Game',
        description:
          '"Diversão em Dupla" is my first project developed from scratch using React Native. Designed as a lightweight, user-friendly gaming platform, it provides enjoyable games for friends to play together. With a focus on simplicity, the app is available on the Google Play Store, marking my initial independent application of React Native development skills and learning through the process.',
        link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.dualgame',
        image: '/dualgame.png',
      },
      8: {
        title: 'Pomodoro Prime Timer',
        description:
          'The Pomodoro Prime Timer project was created with the intention of helping people learn and improve their productivity. It is a simple and intuitive application that allows users to set a timer for their tasks, helping them to focus and manage their time more efficiently. The project was developed using React Native, and it is available for download on the Google Play Store.',
        link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.PomodoroPrimeTimer',
        image: '/pomodoro_prime_timer.png',
      },
      9: {
        title: 'Guaranteed Future',
        description:
          'The "MChiodi - Futuro Garantido" project is a tool designed to assist students. Developed using React Native, this intuitive and simple application facilitates efficient time management for users, aiding them in their academic pursuits. Available for download on the Google Play Store, "Futuro Garantido" stands as a testament to proactive assistance in students’ daily lives.',
        link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.FuturoGarantido',
        image: '/futurogarantido.png',
      },
    },
    pt: {
      1: {
        title: 'Home do Instagram',
        description:
          'Bem-vindo à Home do Instagram! Este projeto foi meticulosamente criado com o objetivo de reacender a chama de conteúdos passados enquanto inspira novas ideias. Utilizando HTML e CSS, construí uma plataforma cativante diretamente na homepage do Instagram. Este espaço não é apenas nostálgico, mas também educativo, oferecendo uma experiência única meticulosamente projetada e trazida à vida por mim.',
        link: 'https://matheuschiodi.github.io/Recriando-Home-Instagram/',
        image: '/recriando_home_instagram.png',
      },
      2: {
        title: 'NLW Spacetime',
        description:
          'Durante este evento inspirador, tive a oportunidade de participar e me aprofundar na criação de um aplicativo de recordação de memórias usando tecnologias poderosas como ReactJS, React Native, NextJS, dentre outras. Ao longo de cinco dias intensos, a equipe Rocketseat ofereceu lições valiosas, abrindo as portas para um mundo de possibilidades e aprendizado.',
        link: 'https://matheuschiodi.github.io/NLW-Spacetime-not-Prisma/',
        image: '/spacetime.png',
      },
      3: {
        title: 'Projeto Loja',
        description:
          'Bem-vindo ao nosso Mercado Online para Projetos Eletrônicos! Desenvolvida com ReactJS para fins educacionais, esta plataforma simula experiências de e-commerce, proporcionando aprendizado prático na compra e venda de projetos eletrônicos. Engaje-se com esta ferramenta interativa para aplicar conceitos e tecnologias-chave de desenvolvimento web, aprimorando seu entendimento e habilidades no comércio online de projetos eletrônicos.',
        link: 'https://matheuschiodi.github.io/Project-Shop/',
        image: '/projectShop.png',
      },
      4: {
        title: 'TCC Parque Vivo',
        description:
          'Desenvolvido para o TIIEM no IFSP - Campus Araraquara, este projeto final apoia a organização sem fins lucrativos "Parque Vivo", integrando conhecimentos básicos e técnicos adquiridos durante o curso. Utilizando HTML, CSS, MySQL, PHP, Ajax e JavaScript, ele reflete nossa jornada de aprendizado e habilidades práticas. É uma demonstração prática da compreensão e aplicação abrangentes dessas tecnologias, mostrando a integração perfeita entre teoria e prática.',
        link: 'https://github.com/MatheusChiodi/TccParqueVivoV1',
        image: '/parquevivo.png',
      },
      5: {
        title: 'Projeto Jogo da Velha',
        description:
          'O projeto Jogo da Velha, desenvolvido utilizando ReactJS, proporciona uma experiência de jogo envolvente e interativa para fins de estudo e entretenimento. Os usuários podem desfrutar de partidas empolgantes com amigos ou jogadores online por meio de um site amigável. Ele possui personalização de nome de jogador, sistema de pontuação e uma interface elegante, servindo como uma ferramenta divertida para entretenimento e um recurso valioso para o estudo do ReactJS.',
        link: 'https://matheuschiodi.github.io/tic-tac-toe/',
        image: '/tic_tac_toe.png',
      },
      6: {
        title: 'Projeto Windows',
        description:
          'Este projeto educacional foi elaborado usando ReactJS para explorar várias técnicas de linguagem. O objetivo era criar componentes que se assemelhassem ao sistema Windows usando código personalizado, sem depender de APIs prontas. Cada componente foi projetado para aprimorar o entendimento e a proficiência em ReactJS, oferecendo uma rica experiência de aprendizado enquanto se experimenta diversas abordagens de codificação dentro do framework.',
        link: 'https://matheuschiodi.github.io/windows/',
        image: '/windows.png',
      },
      7: {
        title: 'Diversão em Dupla: Jogos para Dois',
        description:
          '"Diversão em Dupla" é meu primeiro projeto desenvolvido do zero utilizando React Native. Projetado como uma plataforma de jogos leve e amigável, ele proporciona jogos divertidos para amigos jogarem juntos. Com foco na simplicidade, o aplicativo está disponível no Google Play Store, marcando minha primeira aplicação independente das habilidades e aprendizados de desenvolvimento com React Native.',
        link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.dualgame',
        image: '/dualgame.png',
      },
      8: {
        title: 'Pomodoro Prime Timer',
        description:
          'O projeto Pomodoro Prime Timer foi criado com a intenção de ajudar as pessoas a aprenderem e melhorarem sua produtividade. É um aplicativo simples e intuitivo que permite aos usuários definir um temporizador para suas tarefas, ajudando-os a se concentrar e gerenciar seu tempo de forma mais eficiente. O projeto foi desenvolvido usando React Native e está disponível para download no Google Play Store.',
        link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.PomodoroPrimeTimer',
        image: '/pomodoro_prime_timer.png',
      },
      9: {
        title: 'Futuro Garantido',
        description:
          'O projeto "Futuro Garantido" é uma ferramenta projetada para auxiliar estudantes. Desenvolvido usando React Native, este aplicativo intuitivo e simples facilita o gerenciamento eficiente do tempo para os usuários, ajudando-os em seus estudos acadêmicos. Disponível para download no Google Play Store, "Futuro Garantido" é um testemunho do auxílio proativo no dia a dia dos estudantes.',
        link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.FuturoGarantido',
        image: '/futurogarantido.png',
      },
    },
  };

  const translations2 = {
    en: {
      button: 'Access',
    },
    pt: {
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
      <div className="w-full mt-10">
        {Object.values(translations[language]).map((project) => (
          <div
            key={project.id}
            className="grid grid-cols-1 lg:grid-cols-2 p-5 w-full"
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
