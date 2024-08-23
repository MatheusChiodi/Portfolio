import { motion } from 'framer-motion';
import TechButton from './TechButton';
import techButtons from '../../context/techButtons';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const translations = {
  en: {
    title: 'My Name is',
    name: 'Matheus Chiodi',
    description1: 'I am a professional programmer',
  },
  pt: {
    title: 'Meu nome é',
    name: 'Matheus Chiodi',
    description1: 'Sou programador profissional',
  },
};

function AboutContent({ language }) {
  const { title, name, description1 } = translations[language];
  return (
    <div className="m-0 p-0">
      <h1 className="md:text-[40px] lg:text-[40px] xl:text-[60px] text-[30px] text-center md:text-left">
        {title}
      </h1>
      <h1 className="md:text-[45px] lg:text-[40px] text-[30px] text-center md:text-left font-medium text-[#44475a]">
        <span className="text-[#FF5555] font-medium">&lt;</span>
        {name}
        <span className="text-[#FF5555] font-medium"> /</span>
        <span className="text-[#FF5555] font-medium">&gt;</span>
      </h1>
      <motion.p
        className="text-center md:text-[20px] lg:text-[25px] xl:text-[30px] text-[15px] md:text-left text-[#44475a]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.6 } }}
      >
        {description1}{' '}
        <span className="text-[#FF5555] font-bold">Fullstack</span>{' '}
      </motion.p>
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <div className="lg:mt-[50px] mt-[30px] text-center md:text-left md:text-[20px] lg:text-[25px] xl:text-[30px] text-[15px]">
          {techButtons.map((button, index) => (
            <TechButton key={index} {...button} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default AboutContent;
