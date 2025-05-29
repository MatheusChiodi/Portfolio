import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function VideoCard({ link, title, description, index }) {
  const videoId = link.includes('/embed/')
    ? link.split('/embed/')[1]?.split('?')[0]
    : new URL(link).searchParams.get('v');

  const youtubeLink = `https://www.youtube.com/watch?v=${videoId}`;
  const delay = index * 0.1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className="relative bg-white rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl w-full max-w-md mx-auto"
    >
      <div className="relative w-full h-56 sm:h-64 overflow-hidden rounded-t-2xl">
        <motion.iframe
          className="w-full h-full absolute top-0 left-0 rounded-t-2xl z-10"
          src={`${link}?rel=0&showinfo=0&autohide=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: delay + 0.3 } }}
        />
      </div>

      {/* Conteúdo textual */}
      <div className="p-5 bg-white relative z-30">
        <motion.h3
          className="text-lg font-bold text-gray-800 truncate"
          title={title}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0, transition: { delay: delay + 0.4 } }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-gray-600 text-sm mt-2 leading-relaxed text-justify"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0, transition: { delay: delay + 0.5 } }}
        >
          {description}
        </motion.p>

        {/* Botão de ação */}
        <motion.a
          href={youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-[#FF5555] font-semibold text-sm hover:underline hover:scale-[1.03] transition-transform duration-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: delay + 0.6 } }}
        >
          <Play className="w-4 h-4" />
          Ver no YouTube
        </motion.a>
      </div>
    </motion.div>
  );
}
