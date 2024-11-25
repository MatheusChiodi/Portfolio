const HighlightKeywords = (text) => {
  const keywords = [
    'HTML',
    'CSS',
    'JavaScript',
    'ReactJS',
    'React',
    'Native',
    'NextJS',
    'MySQL',
    'PHP',
    'Ajax',
    'Google Play Store',
    'TailwindCSS',
    'Node.js',
    'NodeJS',
    'Rocketseat',
  ];

  // Expressão regular para remover caracteres indesejados
  const cleanWord = (word) => word.replace(/["',.!?;:()]/g, '').trim();

  return text.split(/(\s+)/).map((word, index) => {
    const cleanedWord = cleanWord(word);
    return keywords.includes(cleanedWord) ? (
      <span key={index} style={{ color: '#ff5555' }}>
        {word}
      </span>
    ) : (
      word
    );
  });
};

export default HighlightKeywords;
