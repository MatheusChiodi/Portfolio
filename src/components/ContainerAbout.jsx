import { motion } from 'framer-motion';
import AboutImage from './About/AboutImage';
import AboutContent from './About/AboutContent';

const imgs = [
  `${import.meta.env.BASE_URL}/perfil1.png`,
  `${import.meta.env.BASE_URL}/perfil2.png`,
]

export default function About({ language }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.6 } }}
      className="px-[20px] w-full mt-[80px] lg:mb-0 mb-3 lg:h-screen h-auto lg:max-h-[380px] m-0 p-0 md:flex"
      id="ContainerAbout"
    >
      <AboutContent language={language} />
      <AboutImage src={imgs[0]} delay={1.2} className="hidden lg:flex" />
      <AboutImage
        src={imgs[1]}
        delay={1.2}
        className="hidden md:flex lg:hidden"
      />
    </motion.div>
  );
}
