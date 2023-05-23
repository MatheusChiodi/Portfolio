export default function ContainerPortfolio() {
  const projects = [
    {
      id: '1',
      title: 'Home do Instagram',
      description: 'Project was created for learning purposes and knowledge',
      subdescription: '',
      link: 'https://matheuschiodi.github.io/Recriando-Home-Instagram/',
      image: './recriando_home_instagram.png',
    },
    {
      id: '2',
      title: 'NLW Spacetime',
      description:'NLW Spacetime, a one-week project conducted by Rocketseat',
      subdescription:'',
      link: 'https://matheuschiodi.github.io/NLW-Spacetime-not-Prisma/',
      image: './spacetime.png',
    },
    {
      id: '3',
      title: 'Project Shop',
      description: 'Project created as a way to demonstrate the home page',
      subdescription: 'Was created as a demonstration and has no functionality',
      link: 'https://matheuschiodi.github.io/Project-Shop/',
      image: './projectShop.png',
    },
    {
      id: '4',
      title: 'TCC Parque Vivo',
      description: "TCC Parque Vivo, a project developed for the conclusion",
      subdescription: 'To see more details about the project, it is necessary to access the project file',
      link: 'https://github.com/MatheusChiodi/TccParqueVivoV1', 
      image: './parquevivo.png',
    },
    {
      id: '5',
      title: 'Project Tic Tac Toe',
      description: 'Project created game Tic Tac Toe',
      subdescription: 'Was created simple project',
      link: 'https://matheuschiodi.github.io/tic-tac-toe/',
      image: './tic_tac_toe.png',
    },
  ];

  return (
    <div
      className="w-full mx-auto m-0 p-0 lg:mb-[-80px] mb-0 lg:mt-0 mt-10"
      id="ContainerPortfolio"
    >
      <div className="w-full lg:bg-slate-700 lg:pb-[100px] pt-[10px]">
        <div className="w-full mx-auto m-0 p-0">
          <div className="title text-center mb-2 mt-2">
            <div className="border-[1.5px] border-[#FF5555] mb-[-17px]"></div>
            <span className="font-bold font-lg px-1 bg-[#F8F8F2] lg:bg-slate-700 lg:text-[#F8F8F2] text-[#44475A] ">
              My Projects
            </span>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project) => (
              <div key={project.id} className="w-[250px] h-[250px] mb-[20px] lg:mb-[10px] lg:bg-white bg-slate-700 rounded-t-[20px] rounded-b-[20px] card mx-auto">
                <div className="rounded-br-[40px] h-[140px] rounded-t-[20px] imgCard">
                  <img
                    src={project.image}
                    alt="image"
                    className="w-full rounded-br-[40px] h-[140px] text-[#F8F8F2] rounded-t-[20px] rounded-b-[-200px]"
                  />
                </div>
                <div className="rounded-br-[40px] h-[140px] lg:text-[#44475A] text-[#F8F8F2] rounded-b-[20px] textCard">
                  <p className="w-full text-center font-medium text-[20px] text-[#FF5555] mt-2">
                    {project.title}
                  </p>
                  <div className="m-0 p-0 text-[16px]">
                    <p className="w-full text-center">{project.description}</p>
                    <p className="restTextCard w-full text-center mt-4">
                      {project.subdescription}
                    </p>
                    <p className="restTextCard w-full text-center mt-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F8F8F2] lg:text-[#44475A] hover:text-[#FF5555]"
                      >
                        <i className="fas fa-eye"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
