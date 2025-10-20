import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

const useAllProjectsContext = () => {
  const { t } = useTranslation();

  return useMemo(
    () => ({
      technology: [
        {
          id: 1,
          name: 'React Native',
          projects: [
            {
              id: 1,
              title: t('projects.reactNative.futuroGarantido.title'),
              description: t(
                'projects.reactNative.futuroGarantido.description'
              ),
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
          name: 'React.js',
          projects: [
            {
              id: 1,
              title: t('projects.React.js.windows.title'),
              description: t('projects.React.js.windows.description'),
              link: 'https://matheuschiodi.github.io/windows/',
              image: '/windows.png',
            },
            {
              id: 2,
              title: t('projects.React.js.ShopSupplements.title'),
              description: t('projects.React.js.ShopSupplements.description'),
              link: 'https://matheuschiodi.github.io/shop-supplements/',
              image: '/shop-supplements.png',
            },
            {
              id: 3,
              title: t('projects.React.js.ExpressoDesign.title'),
              description: t('projects.React.js.ExpressoDesign.description'),
              link: 'https://matheuschiodi.github.io/ExpressoDesign/',
              image: '/ExpressoDesign.png',
            },
            {
              id: 4,
              title: t('projects.React.js.FlagCustomizer.title'),
              description: t('projects.React.js.FlagCustomizer.description'),
              link: 'https://matheuschiodi.github.io/Flag-Customizer/',
              image: '/FlagCustomizer.png',
            },
            {
              id: 5,
              title: t('projects.React.js.MChiodiTools.title'),
              description: t('projects.React.js.MChiodiTools.description'),
              link: 'https://mchiodi-tools.vercel.app/',
              image: '/mchioditools.png',
            },
            {
              id: 6,
              title: t('projects.React.js.InfraDraw.title'),
              description: t('projects.React.js.InfraDraw.description'),
              link: 'https://mchiodi-infradraw.vercel.app/',
              image: '/infradraw.png',
            },
            {
              id: 7,
              title: t('projects.React.js.MChiodiNews.title'),
              description: t('projects.React.js.MChiodiNews.description'),
              link: 'https://mchiodi-news.vercel.app/',
              image: '/mchiodinews.png',
            },
            {
              id: 8,
              title: t('projects.React.js.KnowledgeHub.title'),
              description: t('projects.React.js.KnowledgeHub.description'),
              link: 'https://knowledge-hub-matheuschiodis-projects.vercel.app/',
              image: '/knowledgehub.png',
            },
            {
              id: 9,
              title: t('projects.React.js.MChiodiFocus.title'),
              description: t('projects.React.js.MChiodiFocus.description'),
              link: 'https://mchiodi-focus.vercel.app/',
              image: '/mchiodi-focus.png',
            },
            {
              id: 10,
              title: t('projects.React.js.MoveStore.title'),
              description: t('projects.React.js.MoveStore.description'),
              link: 'https://move-store.vercel.app/',
              image: '/movestore.jpg',
            },
          ],
        },
        {
          id: 3,
          name: 'Node.js',
          projects: [
            {
              id: 1,
              title: t('projects.Node.js.PodcastsManager.title'),
              description: t('projects.Node.js.PodcastsManager.description'),
              link: 'https://github.com/MatheusChiodi/Gerenciador-de-Podcasts',
              image: '/gerenciadorPodcasts.png',
            },
            {
              id: 2,
              title: t('projects.Node.js.CryptoApi.title'),
              description: t('projects.Node.js.CryptoApi.description'),
              link: 'https://github.com/MatheusChiodi/crypto-api',
              image: '/crypto-api.png',
            },
            {
              id: 3,
              title: t('projects.Node.js.TaskManager.title'),
              description: t('projects.Node.js.TaskManager.description'),
              link: 'https://github.com/MatheusChiodi/Task-Manager',
              image: '/TaskManager.jpg',
            },
            {
              id: 4,
              title: t('projects.Node.js.URLShortener.title'),
              description: t('projects.Node.js.URLShortener.description'),
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
    }),
    [t]
  );
};

export default useAllProjectsContext;
