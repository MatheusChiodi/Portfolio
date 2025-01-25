import { ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Função que verifica a posição de rolagem
  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 380);
  };

  // Função para rolar até o topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-3 right-3 z-50">
      {isVisible && (
        <motion.div
          onClick={scrollToTop}
          className="cursor-pointer bg-gray-900 text-white p-1 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{
            scale: 1.05,
            backgroundColor: '#ff5555',
            color: '#fff',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)'
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <ChevronUp size={24} />
        </motion.div>
      )}
    </div>
  );
};

export default ScrollToTopButton;
