import { motion } from 'framer-motion';
import Button from './Button';


const modalAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  exit: { opacity: 0, scale: 0.8 },
};

export default function CertificateModal({ certificate, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-md z-50"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="bg-gray-900 text-white rounded-xl lg:w-[50%] w-[90%] overflow-hidden shadow-2xl"
        variants={modalAnimation}
      >
        <div className="flex justify-between items-center p-4">
          <h1 className="md:text-[26px] text-[20px] font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
            {certificate.title}
          </h1>
          <Button title="" icon="x" onClick={onClose} />
        </div>

        <img
          src={`./` + certificate.image}
          alt={certificate.title}
          className="w-full h-auto"
        />
      </motion.div>
    </motion.div>
  );
}
