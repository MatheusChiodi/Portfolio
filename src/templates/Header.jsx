import { useState } from 'react';
import Contact from './Contact';

const Header = ({ onLanguage }) => {
  var status = false;

  if (window.innerWidth > 992) {
    status = true;
  }

  const [isOpen, setIsOpen] = useState(status);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  const [isOpenContact, setIsOpenContact] = useState(false);
  const [contactKey, setContactKey] = useState(Math.random());

  function toggleMenuContact() {
    setIsOpenContact(!isOpenContact);
    setContactKey(Math.random());
  }

  const handleVerMaisClick = () => {
    window.location.reload();
  };

  const translations = {
    en: {
      item1: 'About',
      item2: 'Experience',
      item3: 'Projects',
      item4: 'Contact',
    },
    pt: {
      item1: 'Sobre',
      item2: 'Experiência',
      item3: 'Projetos',
      item4: 'Contato',
    },
  };

  const [language, setLanguage] = useState('en');

  // cria uma função para alterar o estado de language
  const handleLangue = (langue) => {
    setLanguage(langue);
    onLanguage(langue);
  };

  return (
    <div className="m-0 p-0 fixed top-0 bg-white mx-auto z-50">
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
                          ? 'line line-top-bottom open'
                          : 'line line-top-bottom'
                      }
                      d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                    ></path>
                    <path
                      className={isOpen ? 'line open' : 'line'}
                      d="M7 16 27 16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex justify-cemter pt-1 p-0 m-0 w-2/12">
                <p className="h-[39px] mx-auto rounded-[80px] flex items-center justify-center text-center">
                  <img
                    src={`${import.meta.env.BASE_URL}/logo.png`}
                    className="w-[40px] h-[40px] ml-2 mt-2"
                  />
                </p>
              </div>
              <div className="flex justify-center items-center pt-1 p-0 m-0 w-5/12">
                <label
                  htmlFor="toggleContactModal"
                  className="h-[25px] text-center inline-block px-4 py-1 leading-none border rounded-xl border-[#44475A] bg-[#44475A] hover:bg-[#FF5555] hover:border-[#FF5555] text-white text-[13px] cursor-pointer transition-all"
                  style={{
                    boxShadow:
                      '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  {' '}
                  {translations[language].item4}
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
              <div className="md:w-[60%] w-full text-center md:text-left md:mb-0 mb-2 text-[20px] lg:text-[25px] xl:text-[30px]">
                <a className="text-md block md:inline-block text-gray font-medium md:mr-4 mr-0 linkMenu block md:hidden">
                  {language === 'en' ? (
                    <span
                      onClick={() => handleLangue('pt')}
                      className="cursor-pointer"
                    >
                      Change to Portuguese
                    </span>
                  ) : (
                    <span
                      onClick={() => handleLangue('en')}
                      className="cursor-pointer"
                    >
                      Mudar para Inglês
                    </span>
                  )}
                </a>
                <a
                  href="#ContainerAbout"
                  className="text-md block md:inline-block text-gray font-medium md:mr-4 mr-0 linkMenu"
                  onClick={handleVerMaisClick}
                >
                  {translations[language].item1}
                </a>
                <a
                  href="#Container{translations[language].item2}"
                  className="text-md block md:inline-block text-gray font-medium linkMenu"
                  onClick={handleVerMaisClick}
                >
                  {translations[language].item2}
                </a>
                <a
                  href="#ContainerProjects"
                  className="text-md block md:inline-block text-gray font-medium md:ml-4 mr-0 mb-0 linkMenu"
                  onClick={handleVerMaisClick}
                >
                  {translations[language].item3}
                </a>
              </div>
              <div className="px-2 w-[10%] text-center hidden md:block ">
                <img
                  src={`${import.meta.env.BASE_URL}/logo.png`}
                  className="lg:w-[50px] lg:h-[50px] w-[40px] h-[40px]"
                />
              </div>
              <div className="md:w-[60%] md-[100%] text-center md:text-right hidden md:flex justify-end items-center">
                <button
                  className="mx-2 inline-block px-4 lg:px-5 py-1 lg:py-1 leading-none border rounded-xl border-[#44475A] bg-[#44475A] hover:bg-[#FF5555] hover:border-[#FF5555] text-white md:text-[13px] lg:text-[18px] xl:text-[20px] cursor-pointer transition-all"
                  style={{
                    boxShadow:
                      '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  {language === 'en' ? (
                    <span
                      onClick={() => handleLangue('pt')}
                      className="cursor-pointer"
                    >
                      Inglês
                    </span>
                  ) : (
                    <span
                      onClick={() => handleLangue('en')}
                      className="cursor-pointer"
                    >
                      Português
                    </span>
                  )}
                </button>

                <div className="mx-[10px] hidden">
                  <div className="toggleWrapper">
                    <input type="checkbox" className="dn" id="dn" />
                    <label htmlFor="dn" className="toggleTheme">
                      <span className="toggle__handler">
                        <span className="crater crater--1"></span>
                        <span className="crater crater--2"></span>
                        <span className="crater crater--3"></span>
                      </span>
                      <span className="star star--1"></span>
                      <span className="star star--2"></span>
                      <span className="star star--3"></span>
                      <span className="star star--4"></span>
                      <span className="star star--5"></span>
                      <span className="star star--6"></span>
                    </label>
                  </div>
                </div>
                <label
                  htmlFor="toggleContactModal"
                  className="inline-block px-4 lg:px-5 py-1 lg:py-1 leading-none border rounded-xl border-[#44475A] bg-[#44475A] hover:bg-[#FF5555] hover:border-[#FF5555] text-white md:text-[13px] lg:text-[18px] xl:text-[20px] cursor-pointer transition-all"
                  style={{
                    boxShadow:
                      '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  {translations[language].item4}
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

      {isOpenContact && (
        <Contact key={contactKey} setIsOpenContact={setIsOpenContact} />
      )}
    </div>
  );
};

export default Header;
