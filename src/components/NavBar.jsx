import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';

import Contact from './Contact';

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt');
  };

  const menuItems = [
    { name: 'about', path: '/#About' },
    { name: 'projects', path: '/projects' },
  ];

  const [isOpenContact, setIsOpenContact] = useState(false);
  const [contactKey, setContactKey] = useState(Math.random());

  function toggleMenuContact() {
    setIsOpenContact(!isOpenContact);
    setContactKey(Math.random());
  }

  return (
    <motion.nav
      className="fixed top-0 left-0  w-[98%] left-[1%] z-50 overflow-hidden"
      initial={{ y: -50, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
      }}
    >
      <div className="bg-gray-800 text-white shadow-lg border-b border-white/10 max-w-[1920px] mx-auto rounded-2xl">
        <div className="flex justify-between items-center h-16 px-4 md:px-10">
          <div className="flex items-center space-x-2">
            <motion.img
              src={`./logo.png`}
              alt="Logo"
              className="w-12 h-12 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6, ease: 'easeOut' },
              }}
              whileHover={{
                scale: 1.1,
                rotate: [0, 5, -5, 0],
                transition: { duration: 0.3 },
              }}
            />
            <span className="text-xl font-semibold md:hidden">MChiodi</span>
          </div>

          {/* Links para Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative text-lg font-medium tracking-wide transition-all duration-300"
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.3 + index * 0.1 },
                }}
                whileHover={{
                  scale: 1.1,
                  color: '#FF5555',
                  textShadow: '0px 0px 10px rgba(255, 85, 85, 0.8)',
                }}
              >
                <Link to={item.path}>{t(`navbar.${item.name}`)}</Link>
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-1 bg-red-500 rounded-full"
                  whileHover={{ width: '100%', transition: { duration: 0.3 } }}
                />
              </motion.div>
            ))}
            <button
              onClick={toggleMenuContact}
              className="hidden md:block px-4 py-1 bg-gray-700 rounded-md font-medium cursor-pointer hover:bg-gray-600 transition-all duration-300"
            >
              📞 {t('navbar.contact')}
            </button>
            <button
              onClick={changeLanguage}
              className="px-4 py-1 bg-gray-700 rounded-md font-medium cursor-pointer hover:bg-gray-600 transition-all duration-300"
            >
              🌎 {t('navbar.language')}
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Menu Mobile */}
        <motion.div
          className={`md:hidden flex flex-col items-center bg-gray-900 text-white transition-all duration-300 rounded-2xl overflow-hidden${
            menuOpen ? 'h-auto opacity-100' : 'h-0 opacity-0 overflow-hidden'
          }`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: menuOpen ? 1 : 0, height: menuOpen ? 'auto' : 0 }}
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              className="py-3 w-full text-center text-lg border-b border-gray-700"
              whileHover={{ scale: 1.05, color: '#FF5555' }}
            >
              <Link to={item.path} onClick={() => setMenuOpen(false)}>
                {t(`navbar.${item.name}`)}
              </Link>
            </motion.div>
          ))}
          <button
            onClick={toggleMenuContact}
            className="w-full py-3 bg-gray-700 hover:bg-gray-600 text-white text-lg font-medium"
          >
            📞 {t('navbar.contact')}
          </button>

          <button
            onClick={changeLanguage}
            className="w-full py-3 bg-gray-700 hover:bg-gray-600 text-white text-lg font-medium rounded-b-2xl"
          >
            🌎 {t('navbar.language')}
          </button>
        </motion.div>
      </div>

      {isOpenContact && (
        <Contact key={contactKey} setIsOpenContact={setIsOpenContact} />
      )}
    </motion.nav>
  );
}
