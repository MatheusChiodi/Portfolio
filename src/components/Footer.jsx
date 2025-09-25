import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

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

  const externalLinks = [
    {
      href: 'https://www.linkedin.com/in/matheus-chiodi/',
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
    },
    {
      href: 'https://github.com/MatheusChiodi',
      icon: 'fab fa-github',
      title: 'GitHub',
    },
    {
      href: 'https://www.youtube.com/@MChiodiDev',
      icon: 'fab fa-youtube',
      title: 'YouTube',
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
      className="w-full mt-10 bg-[#1e1f29] text-[#F8F8F2] rounded-t-xl px-6 py-10 border-t border-[#44475a] shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Bloco de marca + ícones */}
        <div className='flex flex-col items-center'>
          <motion.h2
            className="text-2xl font-bold bg-gradient-to-r from-[#ff5555] to-pink-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            &lt; Matheus Chiodi /&gt;
          </motion.h2>

          <motion.div
            className="flex justify-center gap-4 text-2xl mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.4 } }}
          >
            {externalLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.title}
                className="hover:text-[#FF5555] transition"
                whileHover={{ scale: 1.15, rotate: 2 }}
              >
                <i className={link.icon}></i>
              </motion.a>
            ))}
          </motion.div>

          <p className="text-sm mt-3">
            <a
              href="mailto:mchiodidev@gmail.com"
              className="hover:text-[#FF5555] transition-colors"
            >
              mchiodidev@gmail.com
            </a>
          </p>
        </div>

        <div className='flex flex-col items-center'>
          <h2 className="text-lg font-semibold text-[#FF5555] mb-3">
            {t('footer.info')}
          </h2>
          <ul className="space-y-2 text-center">
            {internalLinks.map((info, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                className="transition-colors"
              >
                <button
                  onClick={() => handleNavigate(info.to)}
                  className="hover:text-[#FF5555] text-sm cursor-pointer"
                  aria-label={info.text}
                >
                  {info.text}
                </button>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col items-center'>
          <h2 className="text-lg font-semibold text-[#FF5555] mb-3">
            {t('footer.tec')}
          </h2>
          <ul className="space-y-2 text-sm text-center">
            {[
              'React.js, React Native, Node.js',
              'CodeIgniter 3, SQL e PHP',
              'HTML, CSS,  JavaScript e TypeScript',
            ].map((tech, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                className="transition"
              >
                {tech}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.footer>
  );
}
