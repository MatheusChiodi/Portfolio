import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};


function AboutImage({ src, delay, className }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className={className}
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay } }}
        src={src}
        className="w-[100%] h-[100%] rounded-[20px]"
      />
    </motion.div>
  );
}

export default AboutImage;
