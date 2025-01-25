import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from './Button';

export default function MyModal({ projectActive, openProject, handleClose }) {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {projectActive && (
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
                {projectActive.title}
              </h1>

              <Button title="" icon="x" onClick={handleClose} />
            </div>

            <motion.p
              className="p-6 text-justify text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            >
              {projectActive.description}
            </motion.p>

            {/* Botão Ver Projeto */}
            <motion.div
              className="flex justify-center mb-8"
              whileHover={{ scale: 1.1 }}
            >
              <Button title={t('Modal.link')} icon="eye" onClick={openProject} />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
