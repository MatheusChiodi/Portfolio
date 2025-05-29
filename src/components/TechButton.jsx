import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const buttonStyles = {
  boxShadow:
    '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
  base: 'inline-block px-5 py-2 leading-none border rounded-xl text-white font-bold shadow-lg transition duration-300 ease-in-out hover:scale-105',
};

function TechButton({ name, color, delay }) {
  return (
    <motion.div
      className={`${buttonStyles.base} me-3 mb-3 cursor-pointer`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay } }}
      style={{ backgroundColor: color, borderColor: color }}
    >
      {name.replace(/\s+/g, '') != 'Php' &&
      name.replace(/\s+/g, '') != 'CodeIgniter3' &&
      name.replace(/\s+/g, '') != 'SQL' ? (
        <Link
          to={`/projects#${name.replace(/\s+/g, '')}`}
          className="w-full h-full flex items-center justify-center"
          style={{ textDecoration: 'none' }}
        >
          <span className="text-lg font-semibold">{name}</span>
        </Link>
      ) : (
        <span className="text-lg font-semibold">{name}</span>
      )}
    </motion.div>
  );
}

export default TechButton;
