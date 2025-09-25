import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Briefcase, School, BookOpen, Route, MapPlus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation();
  const [selectedExperience, setSelectedExperience] = useState(4);
  const year = new Date().getFullYear();

  const experiences = [
    {
      id: 1,
      title: 'IFSP - Araraquara',
      subtitle: '(2017 - 2021)',
      icon: <School size={36} />,
      description: [t('experience.ifsp.text1'), t('experience.ifsp.text2')],
    },
    {
      id: 2,
      title: t('experience.FISistemas.title'),
      subtitle: `(2021 - ${year})`,
      icon: <Briefcase size={36} />,
      description: [t('experience.FISistemas.text1'), t('experience.FISistemas.text2')],
    },
    {
      id: 3,
      title: t('experience.MChiodi.title'),
      subtitle: `(2024 - 2025)`,
      icon: <MapPlus size={36} />,
      description: [
        t('experience.MChiodi.text1'),
        t('experience.MChiodi.text2'),
      ],
    },
    {
      id: 4,
      title: t('experience.MoveMais.title'),
      subtitle: `(2025 - ♾️)`,
      icon: <Briefcase size={36} />,
      description: [
        t('experience.MoveMais.text1'),
        t('experience.MoveMais.text2'),
      ],
    },
  ];

  const selected = experiences.find((exp) => exp.id === selectedExperience);

  return (
    <motion.section
      className="w-full py-16 lg:px-6 px-2 bg-gray-100 rounded-3xl text-gray-900 shadow-lg"
      id="Experience"
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
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        className="text-center"
      >
        <div className="flex flex-wrap items-center justify-center gap-2">
          <h2 className="text-[28px] md:text-[36px] xl:text-[50px] font-extrabold text-gray-900 drop-shadow-lg">
            {t('experience.title')}
          </h2>
          <motion.div
            initial={{ rotate: -20 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Route size={40} className="text-[#FF5555]" />
          </motion.div>
        </div>
        <p className="text-gray-600 mt-3 text-lg md:text-xl">
          {t('experience.subtitle')}
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {experiences.map((exp) => (
          <motion.button
            key={exp.id}
            onClick={() => setSelectedExperience(exp.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={`
              flex flex-col items-center justify-center p-4 rounded-xl shadow-md w-[150px] md:w-[180px] lg:w-[200px]
              transition-all duration-500 focus:outline-none text-center font-medium cursor-pointer
              ${
                selectedExperience === exp.id
                  ? 'bg-[#FF5555] text-white shadow-xl'
                  : 'bg-white text-gray-800 hover:bg-[#FF5555] hover:text-white'
              }
            `}
          >
            <div className="mb-2">{exp.icon}</div>
            <h3 className="text-md md:text-lg">{exp.title}</h3>
            {exp.subtitle && (
              <p className="text-xs md:text-sm">{exp.subtitle}</p>
            )}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.2 }}
          className="mt-10 bg-white p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-semibold text-gray-900">
            {selected.title}
          </h3>
          <p className="text-gray-800 text-justify mt-2">
            {selected.description[0]}
          </p>
          <p className="text-gray-800 text-justify mt-2">
            {selected.description[1]}
          </p>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}
