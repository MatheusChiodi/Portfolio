import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { GraduationCap } from 'lucide-react';
import certificates from '../context/certificates';
import CertificateModal from './CertificateModal';

export default function CertificatesCarousel() {
  const { t } = useTranslation();
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <motion.section
      className="w-full py-16 px-6 bg-gray-100 rounded-3xl text-gray-900 shadow-lg mt-10"
      id="Certificates"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -20 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-center"
      >
        <div className="flex flex-wrap items-center gap-2 justify-center">
          <h2 className="text-[30px] md:text-[20px] lg:text-[30px] xl:text-[60px] font-extrabold text-gray-900 drop-shadow-2xl text-center">
            {t('certificates.title')}
          </h2>
          <GraduationCap
            size={40}
            className="text-[#FF5555] text-[30px] md:text-[25px] lg:text-[30px] xl:text-[60px] pt-2"
          />
        </div>

        <p className="text-gray-600 mt-2 lg:text-[25px] text-[20px]">
          {t('certificates.subtitle')}
        </p>
      </motion.div>

      <motion.div
        ref={carousel}
        className="overflow-hidden mt-8 cursor-grab justify-center flex space-x-6"
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          className="flex space-x-6"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          animate={{ x: [0, -width, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        >
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              className="bg-white rounded-xl p-4 transition-all duration-300 min-w-[250px] md:min-w-[300px] flex flex-col items-center justify-between"
              onClick={() => setSelectedCertificate(certificate)}
            >
              <img
                src={`./` + certificate.image}
                alt={certificate.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-3">
                {certificate.title}
              </h3>
              <p className="text-gray-500 text-sm">{certificate.issuer}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </motion.section>
  );
}
