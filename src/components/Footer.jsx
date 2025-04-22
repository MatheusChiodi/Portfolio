import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Links internos
  const internalLinks = [
    { to: 'About', text: t('footer.link1') },
    { to: 'Projects', text: t('footer.link2') },
    { to: 'Certificates', text: t('footer.link3') },
    { to: 'Experience', text: t('footer.link4') },
    { to: 'YoutubeSection', text: t('footer.link5') },
  ];

  const resumeLink =
  i18n.language === 'en'
    ? 'https://matheuschiodi.github.io/Portfolio/curriculum/matheus-chiodi-en.pdf'
    : 'https://matheuschiodi.github.io/Portfolio/curriculum/matheus-chiodi-ptBr.pdf';

  // Links externos (Redes Sociais)
  const externalLinks = [
    {
      href: 'https://www.linkedin.com/in/matheus-chiodi/',
      icon: 'fab fa-linkedin',
      title: 'Linkedin',
    },
    {
      href: 'https://github.com/MatheusChiodi',
      icon: 'fab fa-github',
      title: 'Github',
    },
    {
      href: 'https://www.youtube.com/@MChiodiDev',
      icon: 'fab fa-youtube',
      title: 'Youtube',
    },
    {
      href: resumeLink,
      icon: 'far fa-id-card',
      title: 'Currículo',
    },
  ];

  const handleNavigate = (section) => {
    if (location.pathname === '/') {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document
          .getElementById(section)
          ?.scrollIntoView({ behavior: 'smooth' });
      }, 1000);
    }
  };

  return (
    <motion.footer
      className="flex flex-wrap justify-between items-center bg-gray-900/90 backdrop-blur-lg text-white rounded-t-2xl p-6 w-[98%] mx-auto shadow-2xl border border-gray-700 mt-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
      }}
    >
      <div className="flex flex-col justify-center items-center text-center text-[#F8F8F2] md:w-[33.3%] w-[100%]">
        <motion.h2
          className="font-bold text-xl bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          &lt; Matheus Chiodi /&gt;
        </motion.h2>

        <motion.div
          className="text-[1.8rem] flex justify-center gap-4 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.3 } }}
        >
          {externalLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.title}
              className="hover:text-[#FF5555]"
              whileHover={{
                scale: 1.2,
                textShadow: '0px 0px 8px rgba(255, 85, 85, 0.7)',
              }}
            >
              <i className={link.icon}></i>
            </motion.a>
          ))}
        </motion.div>

        <p className="text-sm mt-2">
          <a
            href="mailto:mchiodidev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF5555]"
          >
            mchiodidev@gmail.com
          </a>
        </p>
      </div>

      <div className="flex flex-col justify-center items-center text-center text-[#F8F8F2] md:w-[33.3%] w-[100%] mt-5 md:mt-0">
        <h2 className="font-bold text-lg text-[#FF5555]">{t('footer.info')}</h2>
        {internalLinks.map((info, index) => (
          <motion.p
            key={index}
            className="text-sm"
            whileHover={{
              scale: 1.05,
              color: '#FF5555',
              transition: { duration: 0.3 },
            }}
          >
            <button
              onClick={() => handleNavigate(info.to)}
              className="cursor-pointer hover:text-[#FF5555] transition-colors duration-300"
              aria-label={info.text}
            >
              {info.text}
            </button>
          </motion.p>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center text-center text-[#F8F8F2] md:w-[33.3%] w-[100%] mt-5 md:mt-0">
        <h2 className="font-bold text-lg text-[#FF5555]">{t('footer.tec')}</h2>
        {[
          'React JS, React Native, Node JS',
          'Codeigniter 3, SQL e PHP',
          'HTML, CSS e Javascript',
        ].map((tech, index) => (
          <motion.p
            key={index}
            className="text-sm text-[#F8F8F2]"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            {tech}
          </motion.p>
        ))}
      </div>
    </motion.footer>
  );
}
