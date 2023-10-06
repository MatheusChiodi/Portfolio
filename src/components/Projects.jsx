import { ArrowRight } from 'lucide-react';

const Projects = () => {
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
  return (
    <>
      <div className="w-full mt-10">
        {projects.map((project) => (
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
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="lg:text-[15px] xl:text-[20px] hover:text-[#FF5555] transition-all duration-300"
              >
                Access
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
