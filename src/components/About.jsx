import { motion } from 'framer-motion';
import TechButton from './TechButton';
import techButtons from '../context/techButtonsContext';
import { useTranslation } from 'react-i18next';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const floatEffect = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      className="relative mt-20 w-full py-16 px-6 bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl text-white overflow-hidden shadow-2xl"
      id="About"
    >
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [0, 10, 0], y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 bg-purple-400/20 rounded-full blur-2xl"
        animate={{ scale: [1, 1.2, 1], x: [0, -10, 0], y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-center relative z-10"
      >
        <motion.h1
          className="text-[40px] md:text-[50px] font-extrabold bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg"
          variants={floatEffect}
        >
          {t('about.title')}
        </motion.h1>

        <motion.h1
          className="text-[25px] md:text-[60px] sm:text-[50px] font-extrabold text-white drop-shadow-2xl"
          whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-[#FF5555]">&lt;</span> Matheus Chiodi{' '}
          <span className="text-[#FF5555]">/&gt;</span>
        </motion.h1>

        <p className="text-[18px] md:text-[22px] text-gray-300 mt-4 md:w-[70%] w-full mx-auto">
          {t('about.text1')}{' '}
          <spam className="font-bold text-xl bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
          {t('about.text2')} Fullstack
          </spam>{' '}
          {t('about.text3')}
        </p>
      </motion.div>

      <motion.div
        className="relative flex flex-wrap justify-center md:gap-4 bg-white/10 backdrop-blur-md rounded-xl shadow-lg mt-[30px] text-center lg:text-[20px] md:text-[20px] text-[16px] pb-3 pt-6 px-2"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {techButtons.map((button, index) => (
          <motion.div key={index} variants={item}>
            <TechButton {...button} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
