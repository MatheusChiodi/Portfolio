import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import youtubeVideos from '../context/youtubeVideos';
import VideoCard from './VideoCard';
import { useTranslation } from 'react-i18next';

export default function YoutubeSection() {
  const { videos } = youtubeVideos();
  const { t } = useTranslation();

  return (
    <motion.section
      id="YoutubeSection"
      className="w-full py-16 lg:px-6 px-2 bg-gray-100 rounded-3xl text-gray-900 shadow-lg"
      whileInView="visible"
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.3 },
        },
      }}
    >
      <div className="text-center">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 drop-shadow-2xl">
            {t('YoutubeSection.title')}
          </h2>
          <Youtube size={45} className="text-[#FF5555] pt-1" />
        </div>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          {t('YoutubeSection.text')}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            link={video.link}
            title={video.title}
            description={video.description}
          />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="https://www.youtube.com/@MChiodiDev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Acessar canal do YouTube MChiodiDev"
          className="inline-block rounded-lg bg-[#FF5555] px-8 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#e04242] hover:shadow-xl duration-500"
        >
          {t('YoutubeSection.link')}
        </Link>
      </div>
    </motion.section>
  );
}
