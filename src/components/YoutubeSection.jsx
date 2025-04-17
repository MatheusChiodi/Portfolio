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
      className="w-full py-16 px-6 bg-gray-100 rounded-3xl text-gray-900 shadow-lg mt-10"
      id="YoutubeSection"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -20 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="text-center">
        <div className="flex flex-wrap items-center gap-2 justify-center">
          <h2 className="text-[30px] md:text-[20px] lg:text-[30px] xl:text-[60px] font-extrabold text-gray-900 drop-shadow-2xl">
            {t('YoutubeSection.title')}
          </h2>
          <Youtube size={50} className="text-[#FF5555] pt-2" />
        </div>
        <p className="text-gray-600 mt-2 text-[18px] md:text-[20px] lg:text-[25px]">
          {t('YoutubeSection.text')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            link={video.link}
            title={video.title}
            description={video.description}
          />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="https://www.youtube.com/@MChiodiDev"
          target="_blank"
          className="inline-block px-8 py-3 text-white font-bold bg-[#FF5555] rounded-lg shadow-lg hover:bg-[#e04242] hover:scale-105 transition-all duration-500"
        >
          {t('YoutubeSection.link')}
        </Link>
      </div>
    </motion.section>
  );
}
