const HighlightKeywords = (text) => {
  const keywords = [
    'HTML',
    'CSS',
    'JavaScript',
    'ReactJS',
    'React Native',
    'NextJS',
    'MySQL',
    'PHP',
    'Ajax',
    'Google Play Store',
    'TailwindCSS',
    'Node.js',
    'Rocketseat',
  ];

  return text.split(/(\s+)/).map((word, index) =>
    keywords.includes(word.replace(/[^a-zA-Z]/g, '')) ? (
      <span key={index} style={{ color: '#ff5555' }}>
        {word}
      </span>
    ) : (
      word
    )
  );
};

export default HighlightKeywords;
