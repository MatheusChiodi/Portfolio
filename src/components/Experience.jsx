import { motion } from 'framer-motion';
import { useState } from 'react';
import { Briefcase, School, BookOpen, Route, MapPlus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation();
  const [selectedExperience, setSelectedExperience] = useState(1);

  const getFullYear = () => new Date().getFullYear();

  const year = getFullYear();

  const experiences = [
    {
      id: 1,
      title: 'IFSP - Araraquara',
      subtitle: '(2017 - 2021)',
      icon: <School size={40} />,
      description: [t('experience.ifsp.text1'), t('experience.ifsp.text2')],
    },
    {
      id: 2,
      title: t('experience.job.title'),
      subtitle: `(2021 - ${year})`,
      icon: <Briefcase size={40} />,
      description: [t('experience.job.text1'), t('experience.job.text2')],
    },
    {
      id: 3,
      title: t('experience.courses.title'),
      icon: <BookOpen size={40} />,
      description: [
        t('experience.courses.text1'),
        t('experience.courses.text2'),
      ],
    },
    {
      id: 4,
      title: t('experience.MChiodi.title'),
      subtitle: `(2024 - ${year})`,
      icon: <MapPlus size={40} />,
      description: [
        t('experience.MChiodi.text1'),
        t('experience.MChiodi.text2'),
      ],
    },
  ];

  return (
    <motion.section
      className="w-full py-16 lg:px-6 px-2 bg-gray-100 rounded-3xl text-gray-900 shadow-lg mt-10"
      id="Experience"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -20 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        className="text-center"
      >
        <div className="flex flex-wrap items-center gap-2 justify-center">
          <h2 className="text-[30px] md:text-[20px] lg:text-[35px] xl:text-[50px] font-extrabold text-gray-900 drop-shadow-2xl">
            {t('experience.title')}
          </h2>
          <Route
            size={40}
            className="text-[#FF5555] text-[30px] md:text-[20px] lg:text-[35px] xl:text-[50px] pt-2"
          />
        </div>
        <p className="text-gray-600 mt-2 md:text-[20px] lg:text-[30px] text-[20px]">
          {t('experience.subtitle')}
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10 w-full">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            onClick={() => setSelectedExperience(exp.id)}
            whileHover={{ scale: 1.02 }}
            className={`
        flex flex-col items-center justify-center p-4 rounded-xl shadow-md transition-all duration-500 cursor-pointer 
        ${
          selectedExperience === exp.id
            ? 'bg-[#ff5555] text-white shadow-xl'
            : 'bg-white text-gray-800 hover:bg-[#ff5555] hover:text-white'
        }
      `}
          >
            <div className="mb-2">{exp.icon}</div>
            <h3 className="text-md md:text-lg font-semibold text-center">
              {exp.title}
            </h3>
            {exp.subtitle && (
              <p className="text-xs md:text-sm text-center">{exp.subtitle}</p>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        key={selectedExperience}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        className="mt-8 bg-white p-6 rounded-xl shadow-md"
      >
        <h3 className="text-xl font-semibold text-gray-900">
          {experiences.find((exp) => exp.id === selectedExperience).title}
        </h3>
        <p className="text-gray-900 text-justify mt-2">
          {
            experiences.find((exp) => exp.id === selectedExperience)
              .description[0]
          }
        </p>
        <p className="text-gray-900 text-justify mt-2 mt-2">
          {
            experiences.find((exp) => exp.id === selectedExperience)
              .description[1]
          }
        </p>
      </motion.div>
    </motion.section>
  );
}
