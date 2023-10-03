const Footer = () => {
  // pego o ano atual
  const anoAtual = new Date().getFullYear();
  return (
    <div className="justify-center items-center w-full bg-[#44475A] border-t-[3px] border-[#FF5555]">
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
              href="https://www.linkedin.com/in/matheus-chiodi-b484581aa"
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
          </div>
          <p className="text-[0.8rem]">
            <a
              href="mailto:mchiodidev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF5555]"
              title="E-mail"
            >
              mchiodidev@gmail.com
            </a>
          </p>
        </div>
        <div className="justify-center items-center text-center text-[#F8F8F2] mt-5 md:mt-0">
          <h2 className="font-medium">Information</h2>
          <p className="text-[0.8rem]">
            <a href="#ContainerAbout" className="hover:text-[#FF5555]">
              About
            </a>
          </p>
          <p className="text-[0.8rem]">
            <a href="#ContainerExperience" className="hover:text-[#FF5555]">
              Experience
            </a>
          </p>
          <p className="text-[0.8rem]">
            <a href="#ContainerPortfolio" className="hover:text-[#FF5555]">
              Portfolio
            </a>
          </p>
        </div>
        <div className="justify-center items-center text-center text-[#F8F8F2] mt-5 md:mt-0">
          <h2 className="font-medium">Languages</h2>
          <p className="text-[0.8rem]">React JS, React Native</p>
          <p className="text-[0.8rem]">Codeigniter 3, SQL e PHP</p>
          <p className="text-[0.8rem]">HTML, CSS e Javascript</p>
        </div>
      </div>
      <div className="flex items-center justify-between text-center text-[#F8F8F2] w-full text-[12px] mt-[10px] pb-[5px] border-t-[1px] border-[#FF5555]">
        <p className="m-2">© {anoAtual} Matheus Chiodi</p>
        <p className="m-2">All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
