import { useTranslation } from 'react-i18next';

const AllProjectsContext = () => {
  const { t } = useTranslation();

  return {
    technology: [
      {
        id: 1,
        name: 'React Native',
        projects: [
          {
            id: 1,
            title: t('projects.reactNative.futuroGarantido.title'),
            description: t('projects.reactNative.futuroGarantido.description'),
            link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.FuturoGarantido',
            image: '/futurogarantido.png',
          },
          {
            id: 2,
            title: t('projects.reactNative.Bibliotrack.title'),
            description: t('projects.reactNative.Bibliotrack.description'),
            link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.Bibliotrack&hl=pt_BR&',
            image: '/bibliotrack.png',
          },
          {
            id: 3,
            title: t('projects.reactNative.FitForge.title'),
            description: t('projects.reactNative.FitForge.description'),
            link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.FitForge',
            image: '/fitforge.png',
          },
          {
            id: 4,
            title: t('projects.reactNative.DailyDone.title'),
            description: t('projects.reactNative.DailyDone.description'),
            link: 'https://github.com/MatheusChiodi/Aplicativo-DailyDone',
            image: '/dailydone.png',
          },
          {
            id: 5,
            title: t('projects.reactNative.dualGame.title'),
            description: t('projects.reactNative.dualGame.description'),
            link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.dualgame',
            image: '/dualgame.png',
          },
          {
            id: 6,
            title: t('projects.reactNative.PomodoroPrimeTimer.title'),
            description: t(
              'projects.reactNative.PomodoroPrimeTimer.description'
            ),
            link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.PomodoroPrimeTimer',
            image: '/pomodoro_prime_timer.png',
          },
          {
            id: 7,
            title: t('projects.reactNative.GerenciadorCartoes.title'),
            description: t(
              'projects.reactNative.GerenciadorCartoes.description'
            ),
            link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.Invest',
            image: '/cardmanager.png',
          },
        ],
      },
      {
        id: 2,
        name: 'ReactJS',
        projects: [
          {
            id: 1,
            title: t('projects.reactJS.windows.title'),
            description: t('projects.reactJS.windows.description'),
            link: 'https://matheuschiodi.github.io/windows/',
            image: '/windows.png',
          },
          {
            id: 2,
            title: t('projects.reactJS.ShopSupplements.title'),
            description: t('projects.reactJS.ShopSupplements.description'),
            link: 'https://matheuschiodi.github.io/shop-supplements/',
            image: '/shop-supplements.png',
          },
          {
            id: 3,
            title: t('projects.reactJS.ExpressoDesign.title'),
            description: t('projects.reactJS.ExpressoDesign.description'),
            link: 'https://matheuschiodi.github.io/ExpressoDesign/',
            image: '/ExpressoDesign.png',
          },
          {
            id: 4,
            title: t('projects.reactJS.FlagCustomizer.title'),
            description: t('projects.reactJS.FlagCustomizer.description'),
            link: 'https://matheuschiodi.github.io/Flag-Customizer/',
            image: '/FlagCustomizer.png',
          },
          {
            id: 5,
            title: t('projects.reactJS.MChiodiTools.title'),
            description: t('projects.reactJS.MChiodiTools.description'),
            link: 'https://mchiodi-tools.vercel.app/',
            image: '/mchioditools.png',
          },
          {
            id: 6,
            title: t('projects.reactJS.InfraDraw.title'),
            description: t('projects.reactJS.InfraDraw.description'),
            link: 'https://mchiodi-infradraw.vercel.app/',
            image: '/infradraw.png',
          },
        ],
      },

      {
        id: 3,
        name: 'NodeJS',
        projects: [
          
          {
            id: 1,
            title: t('projects.NodeJS.PodcastsManager.title'),
            description: t('projects.NodeJS.PodcastsManager.description'),
            link: 'https://github.com/MatheusChiodi/Gerenciador-de-Podcasts',
            image: '/gerenciadorPodcasts.png',
          },
          {
            id: 2,
            title: t('projects.NodeJS.CryptoApi.title'),
            description: t('projects.NodeJS.CryptoApi.description'),
            link: 'https://github.com/MatheusChiodi/crypto-api',
            image: '/crypto-api.png',
          },
          {
            id: 3,
            title: t('projects.NodeJS.TaskManager.title'),
            description: t('projects.NodeJS.TaskManager.description'),
            link: 'https://github.com/MatheusChiodi/Task-Manager',
            image: '/TaskManager.jpg',
          },
          {
            id: 4,
            title: t('projects.NodeJS.URLShortener.title'),
            description: t('projects.NodeJS.URLShortener.description'),
            link: 'https://github.com/MatheusChiodi/url-shortener',
            image: '/url-shortener.jpg',
          },
        ],
      },
      {
        id: 4,
        name: 'VSCode Extensions',
        projects: [
          {
            id: 1,
            title: t('projects.VScodeExtensions.hydration-reminder.title'),
            description: t(
              'projects.VScodeExtensions.hydration-reminder.description'
            ),
            link: 'https://marketplace.visualstudio.com/items?itemName=MChiodi.hydration-reminder',
            image: '/hydration-reminder.png',
          },
          {
            id: 2,
            title: t('projects.VScodeExtensions.Snake-in-VSCode.title'),
            description: t(
              'projects.VScodeExtensions.Snake-in-VSCode.description'
            ),
            link: 'https://marketplace.visualstudio.com/items?itemName=MChiodi.snake-in-vscode',
            image: '/snake-in-VSCode.png',
          },
        ],
      },
    ],
  };
};

export default AllProjectsContext;
