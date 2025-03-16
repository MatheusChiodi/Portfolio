import { motion, AnimatePresence } from 'framer-motion';
import { AtSign, Github, Linkedin, Youtube, X } from 'lucide-react';

const Contact = ({ setIsOpenContact }) => {
  const handleClose = () => {
    setIsOpenContact(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-gray-900 text-white rounded-xl w-[280px] overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-gray-800 text-gray-300">
            <h1 className="text-[22px] font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Contato
            </h1>
            <button onClick={handleClose} aria-label="Fechar">
              <X
                size={24}
                className="text-gray-300 hover:text-red-500 cursor-pointer"
              />
            </button>
          </div>

          <div className="my-5">
            <div className="main">
              <div className="up">
                <a
                  href="mailto:mchiodidev@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card1 hover:text-[#F8F8F2]"
                  title="E-mail"
                >
                  <AtSign className="e-mail text-[25px] text-gray-900"></AtSign>
                </a>
                <a
                  href="https://www.linkedin.com/in/matheus-chiodi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card2 hover:text-[#F8F8F2]"
                  title="Linkedin"
                >
                  <Linkedin className="linkedin text-[25px] text-gray-900"></Linkedin>
                </a>
              </div>
              <div className="down">
                <a
                  href="https://github.com/MatheusChiodi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card3 hover:text-[#F8F8F2]"
                  title="Github"
                >
                  <Github className="github text-[25px] text-gray-900"></Github>
                </a>
                <a
                  href="https://www.youtube.com/@MChiodiDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card4 hover:text-[#F8F8F2]"
                  title="Youtube"
                >
                  <Youtube className="youtube text-[25px] text-gray-900"/>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Contact;
