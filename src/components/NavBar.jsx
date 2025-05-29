import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import Contact from './Contact';

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);
  const [contactKey, setContactKey] = useState(Math.random());

  const toggleMenuContact = () => {
    setIsOpenContact(!isOpenContact);
    setContactKey(Math.random());
  };

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt');
  };

  const menuItems = [
    { name: 'about', path: '/' },
    { name: 'projects', path: '/projects' },
  ];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 w-full z-50"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {!menuOpen && (
          <div className="max-w-[1920px] mx-auto flex justify-between items-center h-16 px-5 md:px-10 text-[#f8f8f2] bg-gray-900 backdrop-blur-lg border-b border-[#44475a] shadow-xl md:rounded-0 rounded-b-xl">
            {/* Branding */}
            <div className="flex items-center gap-3">
              <motion.img
                src="./logo.png"
                alt="Logo"
                className="w-11 h-11 cursor-pointer select-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.3 },
                }}
              />
              <span className="text-xl font-semibold tracking-tight">
                MChiodi
              </span>
            </div>

            {/* Links Desktop */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="relative group text-lg font-semibold tracking-wide"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2 + index * 0.1 },
                  }}
                >
                  <Link
                    to={item.path}
                    className="hover:text-[#FF5555] transition-colors"
                  >
                    {t(`navbar.${item.name}`)}
                  </Link>
                  <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-[#FF5555] rounded-full transition-all duration-300 group-hover:w-full"></span>
                </motion.div>
              ))}
              <button
                onClick={toggleMenuContact}
                className="cursor-pointer px-5 py-2 rounded-lg bg-[#44475a] hover:bg-[#FF5555] transition-colors shadow-xl"
              >
                📞 {t('navbar.contact')}
              </button>
              <button
                onClick={changeLanguage}
                className="cursor-pointer px-5 py-2 rounded-lg bg-[#44475a] hover:bg-[#FF5555] transition-colors shadow-xl"
              >
                🌎 {t('navbar.language')}
              </button>
            </div>

            <button
              className="md:hidden ml-auto"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        )}

        <AnimatePresence>
          {menuOpen && (
            <motion.aside
              className="fixed top-0 right-0 w-[85%] max-w-xs h-screen bg-[#1e1f29] text-[#f8f8f2] shadow-2xl z-50 flex flex-col pt-10 px-5 rounded-l-3xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              aria-label="Navigation Menu"
              role="navigation"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <motion.img
                    src="./logo.png"
                    alt="Logo"
                    className="w-11 h-11 cursor-pointer select-none"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.3 },
                    }}
                  />
                  <span className="text-xl font-semibold tracking-tight">
                    MChiodi
                  </span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-[#f8f8f2] hover:text-[#FF5555] transition-colors cursor-pointer"
                  aria-label="Close Menu"
                  title="Close Menu"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="mt-10 flex flex-col gap-4">
                {menuItems.map((item) => (
                  <motion.div
                    key={item.name}
                    className="text-lg border-b border-[#44475a] pb-3 hover:text-[#FF5555] transition"
                  >
                    <Link to={item.path} onClick={() => setMenuOpen(false)}>
                      {t(`navbar.${item.name}`)}
                    </Link>
                  </motion.div>
                ))}
                <button
                  onClick={() => {
                    toggleMenuContact();
                    setMenuOpen(false);
                  }}
                  className="w-full mt-6 py-3 bg-[#44475a] hover:bg-[#FF5555] rounded-lg text-base transition-colors"
                >
                  📞 {t('navbar.contact')}
                </button>
                <button
                  onClick={changeLanguage}
                  className="w-full mt-3 py-3 bg-[#44475a] hover:bg-[#FF5555] rounded-lg text-base transition-colors"
                >
                  🌎 {t('navbar.language')}
                </button>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </motion.nav>
      {isOpenContact && (
        <Contact key={contactKey} setIsOpenContact={setIsOpenContact} />
      )}
    </>
  );
}
