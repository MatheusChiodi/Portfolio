import { ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Função que verifica a posição de rolagem
  const toggleVisibility = () => {
    if (window.pageYOffset > 380) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Função para rolar até o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Adiciona um ouvinte de evento de rolagem
    window.addEventListener('scroll', toggleVisibility);

    // Remove o ouvinte de evento quando o componente é desmontado
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="buttonScroll"
          style={{
            boxShadow:
              '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
          }}
        >
          <ChevronUp size={20} />
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;
