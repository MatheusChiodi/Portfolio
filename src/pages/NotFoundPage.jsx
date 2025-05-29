import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <motion.div className="min-h-screen flex items-center justify-center bg-[#282a36] px-6">
      <div className="bg-[#44475a]/30 backdrop-blur-xl p-8 rounded-2xl shadow-2xl max-w-md w-full text-center border border-[#6272a4]/30">
        <motion.h1
          className="text-7xl font-extrabold text-[#ff5555] mb-4"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-2xl font-bold text-[#f8f8f2] mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Página não encontrada
        </motion.p>
        <motion.p
          className="text-[#f8f8f2] mb-6 text-sm leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Parece que você entrou num portal sombrio...
          <br />
          Mas não se preocupe, a luz do{' '}
          <span className="text-[#ff5555]">MChiodi</span> pode te guiar de
          volta.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/"
            className="inline-block bg-[#ff5555] hover:brightness-80 text-[#f8f8f2] font-semibold py-2 px-5 rounded-full transition-all duration-300"
          >
            Voltar para a Home
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
