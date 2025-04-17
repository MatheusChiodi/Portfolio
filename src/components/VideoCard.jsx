import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

export default function VideoCard({ link, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
    >
      <div className="relative w-full h-52 rounded-t-2xl overflow-hidden group">
        <iframe
          className="w-full h-full"
          src={link}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-extrabold text-gray-700 h-[30px] overflow-hidden text-ellipsis whitespace-nowrap">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mt-2 text-justify leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
