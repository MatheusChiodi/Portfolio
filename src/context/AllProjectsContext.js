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
            title: t('projects.reactNative.dualGame.title'),
            description: t('projects.reactNative.dualGame.description'),
            link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.dualgame',
            image: '/dualgame.png',
          },
          {
            id: 3,
            title: t('projects.reactNative.PomodoroPrimeTimer.title'),
            description: t(
              'projects.reactNative.PomodoroPrimeTimer.description'
            ),
            link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.PomodoroPrimeTimer',
            image: '/pomodoro_prime_timer.png',
          },
          {
            id: 4,
            title: t('projects.reactNative.RegistroTreinamento.title'),
            description: t(
              'projects.reactNative.RegistroTreinamento.description'
            ),
            link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.TrainingRecord',
            image: '/trainingrecord.png',
          },
          {
            id: 5,
            title: t('projects.reactNative.GerenciadorCartoes.title'),
            description: t(
              'projects.reactNative.GerenciadorCartoes.description'
            ),
            link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.Invest',
            image: '/cardmanager.png',
          },
          {
            id: 6,
            title: t('projects.reactNative.PortfolioMobile.title'),
            description: t('projects.reactNative.PortfolioMobile.description'),
            link: 'https://github.com/MatheusChiodi/App-Portfolio',
            image: '/portfolioMobile.png',
          },
          {
            id: 7,
            title: t('projects.reactNative.Bibliotrack.title'),
            description: t('projects.reactNative.Bibliotrack.description'),
            link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.Bibliotrack&hl=pt_BR&',
            image: '/bibliotrack.png',
          },
          {
            id: 8,
            title: t('projects.reactNative.FitForge.title'),
            description: t('projects.reactNative.FitForge.description'),
            link: 'https://play.google.com/store/apps/details?id=com.matheuschiodi.FitForge',
            image: '/fitforge.png',
          },
          {
            id: 9,
            title: t('projects.reactNative.DailyDone.title'),
            description: t('projects.reactNative.DailyDone.description'),
            link: 'https://github.com/MatheusChiodi/Aplicativo-DailyDone',
            image: '/dailydone.png',
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
            title: t('projects.reactJS.projectShop.title'),
            description: t('projects.reactJS.projectShop.description'),
            link: 'https://matheuschiodi.github.io/Project-Shop/',
            image: '/projectShop.png',
          },
          {
            id: 3,
            title: t('projects.reactJS.ProjetoJogoVelha.title'),
            description: t('projects.reactJS.ProjetoJogoVelha.description'),
            link: 'https://matheuschiodi.github.io/tic-tac-toe/',
            image: '/tic_tac_toe.png',
          },
          {
            id: 4,
            title: t('projects.reactJS.NLWSpacetime.title'),
            description: t('projects.reactJS.NLWSpacetime.description'),
            link: 'https://matheuschiodi.github.io/NLW-Spacetime-not-Prisma/',
            image: '/spacetime.png',
          },
          {
            id: 5,
            title: t('projects.reactJS.RegistroTreinamento.title'),
            description: t('projects.reactJS.RegistroTreinamento.description'),
            link: 'https://matheuschiodi.github.io/Training/',
            image: '/trainingrecordweb.png',
          },
          {
            id: 6,
            title: t('projects.reactJS.NovoSpotifyBeta.title'),
            description: t('projects.reactJS.NovoSpotifyBeta.description'),
            link: 'https://matheuschiodi.github.io/spotify/',
            image: '/spotify.png',
          },
          {
            id: 7,
            title: t('projects.reactJS.AjudaLink.title'),
            description: t('projects.reactJS.AjudaLink.description'),
            link: 'https://matheuschiodi.github.io/HelpLinks/',
            image: '/helplink.png',
          },
          {
            id: 8,
            title: t('projects.reactJS.ShopSupplements.title'),
            description: t('projects.reactJS.ShopSupplements.description'),
            link: 'https://matheuschiodi.github.io/shop-supplements/',
            image: '/shop-supplements.png',
          },
          {
            id: 9,
            title: t('projects.reactJS.ExpressoDesign.title'),
            description: t('projects.reactJS.ExpressoDesign.description'),
            link: 'https://matheuschiodi.github.io/ExpressoDesign/',
            image: '/ExpressoDesign.png',
          },
        ],
      },

      {
        id: 3,
        name: 'NodeJS',
        projects: [
          {
            id: 1,
            title: t('projects.NodeJS.QRCodesGenerator.title'),
            description: t('projects.NodeJS.QRCodesGenerator.description'),
            link: 'https://github.com/MatheusChiodi/Gerador-de-QR-Codes-para-E-commerces',
            image: '/geradorQrcodeNodeJs.png',
          },
          {
            id: 2,
            title: t('projects.NodeJS.PodcastsManager.title'),
            description: t('projects.NodeJS.PodcastsManager.description'),
            link: 'https://github.com/MatheusChiodi/Gerenciador-de-Podcasts',
            image: '/gerenciadorPodcasts.png',
          },
          {
            id: 3,
            title: t('projects.NodeJS.CryptoApi.title'),
            description: t('projects.NodeJS.CryptoApi.description'),
            link: 'https://github.com/MatheusChiodi/crypto-api',
            image: '/crypto-api.png',
          },
          {
            id: 10,
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
        name: 'HTML, CSS e JavaScript',
        projects: [
          {
            id: 1,
            title: t('projects.HTMLCSSJavaScript.TCCParqueVivo.title'),
            description: t(
              'projects.HTMLCSSJavaScript.TCCParqueVivo.description'
            ),
            link: 'https://github.com/MatheusChiodi/TccParqueVivoV1',
            image: '/parquevivo.png',
          },
        ],
      },
    ],
  };
};

export default AllProjectsContext;
