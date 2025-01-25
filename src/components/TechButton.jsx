import { motion } from 'framer-motion';

const buttonStyles = {
  boxShadow:
    '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
  base: 'inline-block px-5 py-2 leading-none border rounded-xl text-white font-bold ',
};

function TechButton({ name, color, delay }) {
  return (
    <motion.a
      className={`${buttonStyles.base} me-3 mb-3`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay } }}
      style={{ backgroundColor: color, borderColor: color }}
    >
      {name}
    </motion.a>
  );
}

export default TechButton;
