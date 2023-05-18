import { useState } from "react";
import Contact from "./Contact";

const Header = () => {
  // se o tamanho da tela for maior que 1024 entao useState fica como true
  // se o tamanho da tela for menor que 1024 entao useState fica como false
  var status = false;

  if (window.innerWidth > 992) {
    status = true;
  }

  const [isOpen, setIsOpen] = useState(status);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  //vou verificar o button contact e ver se ele esta aberto ou fechado
  //se ele estiver fechado eu vou abri-lo
  //ao abrir ele mostra o componente Contact

  const [isOpenContact, setIsOpenContact] = useState(false);
  const [contactKey, setContactKey] = useState(Math.random());

  function toggleMenuContact() {
    setIsOpenContact(!isOpenContact);
    setContactKey(Math.random()); // gera um novo valor aleatório para a key do componente
  }

  return (
    <div className="m-0 p-0 fixed top-0 bg-white mx-auto">
      <header className="fixed top-0 w-full m-0 p-0 bg-white">
        <nav className="flex items-center justify-between flex-wrap  md:px-6 px-2 md:border-none border-b border-b-[#44475A] rounded-b-[20px] max-w-[2000px]">
          <div className="block md:hidden w-[100%]">
            <div className="flex justify-between flex-row w-[100%] p-0 m-0 pb-1">
              <div className="flex justify-center pt-1 p-0 m-0 w-5/12">
                <label className="hamburger mt-[-10px] p-0">
                  <input
                    type="checkbox"
                    checked={isOpen}
                    onChange={toggleMenu}
                  />
                  <svg viewBox="0 0 32 32">
                    <path
                      className={
                        isOpen
                          ? "line line-top-bottom open"
                          : "line line-top-bottom"
                      }
                      d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                    ></path>
                    <path
                      className={isOpen ? "line open" : "line"}
                      d="M7 16 27 16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex justify-cemter pt-1 p-0 m-0 w-2/12">
                <p className="h-[39px] mx-auto rounded-[80px] flex items-center justify-center text-center">
                  <img src="logo.png" className="w-[40px] h-[40px] ml-2 mt-2" />
                </p>
              </div>
              <div className="flex justify-center items-center pt-1 p-0 m-0 w-5/12">
                <label
                  htmlFor="toggleContactModal"
                  className="h-[25px] text-center inline-block px-4 py-1 leading-none border rounded-xl border-[#44475A] bg-[#44475A] hover:bg-[#FF5555] hover:border-[#FF5555] text-white text-[13px] cursor-pointer transition-all"
                >
                  Contact
                </label>
                <input
                  type="checkbox"
                  name="toggleContactModal"
                  id="toggleContactModal"
                  checked={isOpenContact}
                  onChange={toggleMenuContact}
                  className="hidden"
                />
              </div>
            </div>
          </div>
          {isOpen ? (
            <div
              className="w-full flex-grow md:flex md:items-center md:w-auto"
              id="menu"
            >
              <div className="md:w-[60%] w-full text-center md:text-left md:mb-0 mb-2">
                <a
                  href="#ContainerAbout"
                  className="text-md block mt-1 md:mt-0 md:inline-block text-gray font-medium md:mr-4 mr-0 linkMenu"
                >
                  About
                </a>
                <a
                  href="#ContainerPortfolio"
                  className="text-md block mt-1 md:mt-0 md:inline-block text-gray font-medium md:mr-4 mr-0 mb-0 linkMenu"
                >
                  Portfolio
                </a>
                <a
                  href="#ContainerExperience"
                  className="text-md block mt-1 md:mt-0 md:inline-block text-gray font-medium linkMenu"
                >
                  Experience
                </a>
              </div>
              <div className="px-2 w-[10%] text-center hidden md:block">
                <img src="logo.png" className="w-[40px] h-[40px]" />
              </div>
              <div className="md:w-[60%] md-[100%] text-center md:text-right hidden md:block items-center">
                <label
                  htmlFor="toggleContactModal"
                  className="inline-block px-4 lg:px-5 py-1 lg:py-1 leading-none border rounded-xl border-[#44475A] bg-[#44475A] hover:bg-[#FF5555] hover:border-[#FF5555] text-white md:text-[13px] lg:text-[15px] xl:text-[18px] cursor-pointer transition-all"
                >
                  Contact
                </label>
                <input
                  type="checkbox"
                  name="toggleContactModal"
                  id="toggleContactModal"
                  checked={isOpenContact}
                  onChange={toggleMenuContact}
                  className="hidden"
                />
              </div>
            </div>
          ) : null}
        </nav>
      </header>

      {isOpenContact && <Contact key={contactKey} />}
    </div>
  );
};

export default Header;
