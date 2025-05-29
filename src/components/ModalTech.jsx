import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from './Button';

const techOptions = [
  { name: 'React Native', color: '#ea4e4e' },
  { name: 'ReactJS', color: '#6272A4' },
  { name: 'NodeJS', color: '#339933', textColor: '#282A36' },
  { name: 'VSCode Extensions', color: '#FF79C6', textColor: '#282A36' },
];

const ModalTech = ({ toggleModal, selectTechnology }) => {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-md z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-gray-900 text-white rounded-xl lg:w-[50%] w-[90%] overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <div className="flex justify-between items-center p-4 text-gray-300">
            <h1 className="md:text-[26px] text-[20px] font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              {t('AllProjects.select')}
            </h1>
            <Button title="" icon="x" onClick={toggleModal} />
          </div>
          <div className="flex flex-wrap justify-center gap-3 p-6 border-t border-gray-800">
            {techOptions.map(({ name, color, textColor = 'white', index }) => (
              <motion.button
                key={name}
                className="px-4 py-2 rounded-xl font-bold border cursor-pointer"
                style={{
                  backgroundColor: color,
                  borderColor: color,
                  color: textColor,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => selectTechnology(name)}
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2 + index * 0.5,
                    type: 'spring',
                    stiffness: 120,
                  },
                }}
              >
                {name}
              </motion.button>
            ))}
            <motion.button
              className="px-4 py-2 rounded-xl font-bold border border-[#BD93F9] bg-[#BD93F9] text-[#282A36] cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => selectTechnology('')}
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2 * 0.5,
                  type: 'spring',
                  stiffness: 120,
                },
              }}
            >
              {t('AllProjects.all')}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ModalTech;
