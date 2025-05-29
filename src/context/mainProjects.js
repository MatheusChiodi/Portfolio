import { useTranslation } from 'react-i18next';

const mainProjects = () => {
  const { t } = useTranslation();

  return {
    categories: [
      {
        name: 'React Native',
        projects: [
          {
            id: 'rn1',
            title: t('projects.reactNative.GerenciadorCartoes.title'),
            description: t(
              'projects.reactNative.GerenciadorCartoes.description'
            ),
            link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.Invest',
            image: '/cardmanager.png',
          },
          {
            id: 'rn2',
            title: t('projects.reactNative.Bibliotrack.title'),
            description: t('projects.reactNative.Bibliotrack.description'),
            link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.Bibliotrack',
            image: '/bibliotrack.png',
          },
          {
            id: 'rn3',
            title: t('projects.reactNative.FitForge.title'),
            description: t('projects.reactNative.FitForge.description'),
            link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.FitForge',
            image: '/fitforge.png',
          },
        ],
      },
      {
        name: 'React JS',
        projects: [
          {
            id: 'rj1',
            title: t('projects.reactJS.windows.title'),
            description: t('projects.reactJS.windows.description'),
            link: 'https://matheuschiodi.github.io/windows/',
            image: '/windows.png',
          },
          {
            id: 'rj2',
            title: t('projects.reactJS.ExpressoDesign.title'),
            description: t('projects.reactJS.ExpressoDesign.description'),
            link: 'https://matheuschiodi.github.io/ExpressoDesign/',
            image: '/ExpressoDesign.png',
          },
          {
            id: 'rj3',
            title: t('projects.reactJS.InfraDraw.title'),
            description: t('projects.reactJS.InfraDraw.description'),
            link: 'https://mchiodi-infradraw.vercel.app/',
            image: '/infradraw.png',
          },
        ],
      },
    ],
  };
};

export default mainProjects;
