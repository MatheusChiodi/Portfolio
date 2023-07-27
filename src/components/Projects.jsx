import { ArrowRight } from "lucide-react";

const Projects = () => {

  const projects = [
    {
      id: '1',
      title: 'Home do Instagram',
      description: "Welcome to Home of Instagram! My project was created to revive past content and ignite inspiration. Here, on the Instagram homepage, you will find a nostalgic and educational experience, carefully crafted by me. Explore exclusive resources to enhance your Instagram skills.",
      link: 'https://matheuschiodi.github.io/Recriando-Home-Instagram/',
      image: '/recriando_home_instagram.png',
    },
    {
      id: '2',
      title: 'NLW Spacetime',
      description:'During this inspiring event, I had the opportunity to participate and dive into the creation of a memory-recalling application using powerful technologies such as ReactJS, React Native, NextJS, among others. Over the course of five intense days, the Rocketseat team provided valuable lessons, opening the doors to a world of possibilities and learning.',
      link: 'https://matheuschiodi.github.io/NLW-Spacetime-not-Prisma/',
      image: '/spacetime.png',
    },
    {
      id: '3',
      title: 'Project Shop',
      description: 'A project was created to showcase an online marketplace for electronic projects, solely for study purposes. It involved exploring skills in web design and development, simulating the buying and selling experience of electronic projects. The main objective was to provide practical learning by applying relevant concepts and technologies within a virtual e-commerce environment.',
      link: 'https://matheuschiodi.github.io/Project-Shop/',
      image: '/projectShop.png',
    },
    {
      id: '4',
      title: 'TCC Parque Vivo',
      description: "Project developed for the conclusion of the Technical Course in Computer Science integrated with High School (TIIEM) at the Federal Institute of Education, Science, and Technology (IFSP) - Campus Araraquara. The aim is to combine the basic and technological knowledge acquired during our education with the project of the nonprofit organization 'Parque Vivo'.",
      link: 'https://github.com/MatheusChiodi/TccParqueVivoV1', 
      image: '/parquevivo.png',
    },
    {
      id: '5',
      title: 'Project Tic Tac Toe',
      description: 'The Tic Tac Toe project (also known as Noughts and Crosses) is an interactive and engaging implementation of a classic game that has been developed for the purpose of study and entertainment. In this project, users can access a website and enjoy exciting Tic Tac Toe matches with their friends or other online players. With features such as player name selection, a scoring system, and a user-friendly interface.',
      link: 'https://matheuschiodi.github.io/tic-tac-toe/',
      image: '/tic_tac_toe.png',
    },
    {
      id: '6',
      title: 'Project Windows',
      description: 'This was a ReactJS project with the purpose of learning different techniques of utilizing the language. My idea was to create various components within the Windows system, and everything was built entirely using custom code, without the use of pre-built APIs.',
      link: 'https://matheuschiodi.github.io/windows/',
      image: '/windows.png',
    },
  ];
  return (
    <>
    <div className="w-full mt-10">
      {projects.map((project) => (
        <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 p-5 w-full">
          <div>
            <img src={`${import.meta.env.BASE_URL}${project.image}`} className=" aspect-video object-cover rounded-t-xl lg:rounded-tr-[0px] roudend-s-[0px] lg:rounded-s-xl"/>
          </div>
          <div className="p-3 border-2 rounded-b-xl lg:rounded-bl-[0px] lg:border-l-0 lg:rounded-e-xl text-[#44475A]">
            <h1 className="text-center text-xl font-bold mb-3 lg:text-[20px] xl:text-[25px]">
              {project.title}
            </h1>
            <p className=" leading-relaxed lg:text-[15px] xl:text-[20px]">
              {project.description}
            </p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="lg:text-[15px] xl:text-[20px] hover:text-[#FF5555] transition-all duration-300">
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
