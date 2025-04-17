import { useTranslation } from 'react-i18next';

const youtubeVideos = () => {
  const { t } = useTranslation();

  return {
    videos: [
      {
        id: 1,
        title: t('youtubeVideos.video1.title'),
        description: t('youtubeVideos.video1.description'),
        link: 'https://www.youtube.com/embed/K2xeAGMn0xQ?si=S0u43o5k2v9IAQbd',
      },
      {
        id: 2,
        title: t('youtubeVideos.video2.title'),
        description: t('youtubeVideos.video2.description'),
        link: 'https://www.youtube.com/embed/UE3Xjw8DkwU?si=redwJBLh6tWuED4j',
      },
      {
        id: 3,
        title: t('youtubeVideos.video3.title'),
        description: t('youtubeVideos.video3.description'),
        link: 'https://www.youtube.com/embed/2RcTF8tznnQ?si=QgMlwmA0Ss2a2bmW',
      },
    ],
  };
};

export default youtubeVideos;
