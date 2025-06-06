import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { GraduationCap } from 'lucide-react';
import certificates from '../context/certificates';
import CertificateModal from './CertificateModal';

export default function CertificatesCarousel() {
  const { t } = useTranslation();
  const [containerWidth, setContainerWidth] = useState(0);
  const carousel = useRef(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      if (carousel.current) {
        setContainerWidth(
          carousel.current.scrollWidth - carousel.current.offsetWidth
        );
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const duplicatedCertificates = [...certificates, ...certificates];
  const loopDistance = containerWidth / 2;

  return (
    <motion.section
      className="w-full py-16 lg:px-6 px-2 bg-gray-100 rounded-3xl text-gray-900 shadow-lg"
      id="Certificates"
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
        <div className="flex flex-wrap items-center gap-2 justify-center">
          <h2 className="text-[25px] md:text-[20px] lg:text-[35px] xl:text-[50px] font-extrabold text-gray-900 drop-shadow-2xl text-center">
            {t('certificates.title')}
          </h2>
          <GraduationCap
            size={40}
            className="text-[#FF5555] text-[30px] md:text-[25px] lg:text-[35px] xl:text-[50px] pt-2"
          />
        </div>
        <p className="text-gray-600 mt-2 lg:text-[25px] text-[20px]">
          {t('certificates.subtitle')}
        </p>
      </motion.div>

      <div className="relative mt-6 w-full overflow-hidden rounded-md">
        <div className="animate-marquee flex w-max gap-4 px-4">
          {duplicatedCertificates.map((certificate, index) => (
            <motion.div
              key={`${certificate.id}-${index}`}
              className="bg-white rounded-xl p-4 transition-all duration-300 min-w-[250px] md:min-w-[300px] flex flex-col items-center justify-between mx-3 cursor-pointer"
              onClick={() => {
                setSelectedCertificate(certificate);
                setIsPaused(true);
              }}
            >
              <img
                src={`./${certificate.image}`}
                alt={certificate.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-3">
                {certificate.title}
              </h3>
              <p className="text-gray-500 text-sm">{certificate.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => {
            setSelectedCertificate(null);
            setTimeout(() => setIsPaused(false), 500);
          }}
        />
      )}
    </motion.section>
  );
}
