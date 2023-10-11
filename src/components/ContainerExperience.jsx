import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Experience() {
  const [isStory, setIsStory] = useState(1);
  const [isStoryActive, setIsStoryActive] = useState(1);

  // funcao mudar de historia
  function alternStory(id) {
    setIsStory(id);
    setIsStoryActive(id);
  }

  const translations = {
    en: {
      title: 'Timeline',
      line1_title: 'IFSP - Araraquara',
      line2_title: 'First job',
      line3_title: 'Curses Infinit',
      line1_text1:
        'During my years of study at the Federal Institute of Araraquara, I completed a technical course integrated with high school, which lasted four years. It was during this time that I had my first exposure to and learned programming languages, including HTML, CSS, PHP, SQL, JavaScript, AJAX and jQuery.',
      line1_text2:
        'This course provided me with a solid foundation of both basic and technological knowledge. As part of my course completion, I developed a special project. The primary goal of this project was to integrate and apply the knowledge acquired throughout my education. I chose to create an initiative aimed at the non-profit organization "Parque Vivo". In this project, I managed to combine my technical and academic learnings, contributing significantly to a relevant and beneficial cause for the community. Not only did this experience solidify my knowledge, but it also allowed me to witness firsthand the practical possibilities of applying technology to impactful social projects.',
      line2_text1:
        'As I embarked on the journey of my first job as a Fullstack Developer, I notice that each line of code I write is imbued with effort, continuous learning, and a commitment to excellence. My responsibilities are weighty; they involve crafting vital institutional websites, developing crucial systems for file management, and implementing platforms that rigorously comply with LGPD.',
      line2_text2:
        'This position demands not only refined technical skill in languages such as CodeIgniter, JavaScript, SQL, PHP, HTML5, and CSS but also a deep operational understanding of the practical issues end-users face. I am the one who optimizes and maintains websites running seamlessly, and I am the intervener when unexpected bugs arise, diligently working to resolve each issue and ensure a flawless user experience.',
      line3_text1:
        'Upon concluding my studies at the Federal Institute, I embraced the perpetual and captivating journey of learning. With dedicated effort, I engaged in various courses offered by platforms like Dio, significantly sharpening and broadening my skills.',
      line3_text2:
        "Presently, my focus is sharpening my proficiency in React Js and React Native. This continuous investment in self-knowledge and improvement extends beyond gaining technical skills. It's about fostering a resilient and innovative mindset capable of navigating and surmounting the challenges presented by the dynamic and ever-evolving professional landscape I am part of.",
    },
    pt: {
      title: 'Jornada',
      line1_title: 'IFSP - Araraquara',
      line2_title: 'Primeiro emprego',
      line3_title: 'Cursos Infinitos',
      line1_text1:
        'Durante meus anos de estudo no Instituto Federal de Araraquara, concluí um curso técnico integrado ao ensino médio, que durou quatro anos. Foi durante esse período que tive minha primeira exposição e aprendi linguagens de programação, incluindo HTML, CSS, PHP, SQL, JavaScript, AJAX e jQuery.',
      line1_text2:
        'Este curso me proporcionou uma base sólida de conhecimentos básicos e tecnológicos. Como parte da conclusão do meu curso, desenvolvi um projeto especial. O objetivo principal deste projeto era integrar e aplicar os conhecimentos adquiridos ao longo da minha educação. Escolhi criar uma iniciativa voltada para a organização sem fins lucrativos "Parque Vivo". Neste projeto, consegui combinar meus aprendizados técnicos e acadêmicos, contribuindo significativamente para uma causa relevante e benéfica para a comunidade. Essa experiência não apenas solidificou meu conhecimento, mas também me permitiu testemunhar em primeira mão as possibilidades práticas de aplicar a tecnologia a projetos sociais impactantes.',
      line2_text1:
        'Ao embarcar na jornada do meu primeiro emprego como Desenvolvedor Fullstack, percebo que cada linha de código que escrevo está impregnada de esforço, aprendizado contínuo e compromisso com a excelência. Minhas responsabilidades são pesadas; eles envolvem a criação de sites institucionais vitais, o desenvolvimento de sistemas cruciais para o gerenciamento de arquivos e a implementação de plataformas que cumprem rigorosamente a LGPD.',
      line2_text2:
        'Esta posição exige não apenas habilidade técnica refinada em linguagens como CodeIgniter, JavaScript, SQL, PHP, HTML5 e CSS, mas também uma compreensão operacional profunda das questões práticas enfrentadas pelos usuários finais. Sou eu quem otimiza e mantém sites funcionando perfeitamente, e sou o interventor quando surgem bugs inesperados, trabalhando diligentemente para resolver cada problema e garantir uma experiência perfeita para o usuário.',
      line3_text1:
        'Ao concluir meus estudos no Instituto Federal, abracei a jornada perpétua e cativante do aprendizado. Com esforço dedicado, participei de vários cursos oferecidos por plataformas como Dio, afiando e ampliando significativamente minhas habilidades.',
      line3_text2:
        'Atualmente, meu foco é aprimorar minha proficiência em React Js e React Native. Este investimento contínuo em autoconhecimento e melhoria vai além da aquisição de habilidades técnicas. Trata-se de promover uma mentalidade resiliente e inovadora capaz de navegar e superar os desafios apresentados pelo cenário profissional dinâmico e em constante evolução do qual faço parte.',
    },
  };

  const [language, setLanguage] = useState('pt');

  const renderHighlightedText = (text) => {
    const wordsToHighlight = [
      'CodeIgniter,',
      'HTML,',
      'HTML5,',
      'HTML5',
      'CSS,',
      'CSS',
      'PHP,',
      'SQL,',
      'JavaScript,',
      'AJAX',
      'jQuery.',
      'Fullstack',
      'Developer,',
      'LGPD.',
      'React',
      'Js',
      'React',
      'Native.',
      'Dio,',
      'Desenvolvedor',
      'Fullstack,',
      'LGPD.',
      'My',
      'responsibilities',
      'Minhas',
      'responsabilidades',
      '"Parque',
      'Vivo".',
      'Instituto',
      'Institute',
      'Federal',

    ];

    const tokens = text.split(/(\s+)/).map((word) => {
      if (wordsToHighlight.includes(word)) {
        return <span style={{ color: '#ff5555' }}>{word}</span>;
      }
      return word;
    });

    return tokens;
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.4 } }}
        className="mx-auto px-[20px] w-full mt-[90px] xl:mt-[120px] lg:mb-0 mb-3 m-0 p-0"
        id="ContainerExperience"
      >
        <p className="text-[50px] font-semibold hidden lg:block">
          {translations[language].title}
        </p>
        <div className="block lg:hidden">
          <div className=""></div>
          <div className="w-[100%] ml-auto flex justify-between items-center mt-[-30px] lineInitial2">
            <p className="text-[30px] md:text-[50px] font-semibold mt-[-15px] md:mt-[-25px] bg-[#f8f8f2] pe-1 text-[#44475a]">
              {translations[language].title}
            </p>
            <div
              className="w-[60px] h-[60px] rounded-[50%] flex justify-center items-center"
              style={{
                backgroundColor: isStoryActive === 1 ? '#ff5555' : '#44475a',
                boxShadow:
                  '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}
            >
              <button
                className="absolute w-[50px] h-[50px] bg-white rounded-[50%] overflow-hidden"
                onClick={() => alternStory(1)}
              >
                <img src="ifsp.jpg" className="w-[100%] h-[100%]" />
              </button>
            </div>
            <div
              className="w-[60px] h-[60px] rounded-[50%] flex items-center justify-center"
              style={{
                backgroundColor: isStoryActive === 2 ? '#ff5555' : '#44475a',
                boxShadow:
                  '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}
            >
              <button
                className="absolute w-[50px] h-[50px] bg-white rounded-[50%] overflow-hidden p-2 flex items-center justify-center"
                onClick={() => alternStory(2)}
              >
                <img src="FISistemas.png" className="w-[100%] h-[100%]" />
              </button>
            </div>
            <div
              className="w-[60px] h-[60px] bg-[#44475a] rounded-[50%] flex items-center justify-center"
              style={{
                backgroundColor: isStoryActive === 3 ? '#ff5555' : '#44475a',
                boxShadow:
                  '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}
            >
              <button
                className="absolute w-[50px] h-[50px] bg-white rounded-[50%] overflow-hidden"
                onClick={() => alternStory(3)}
              >
                <img src="infinit.jpeg" className="w-[100%] h-[100%]" />
              </button>
            </div>
          </div>
        </div>
        <div className="lineInitial hidden lg:block">
          <div
            className="w-[100px] h-[100px] rounded-[50%] mt-[-20px] ml-[85px] flex items-center justify-center"
            style={{
              backgroundColor: isStoryActive === 1 ? '#ff5555' : '#44475a',
              boxShadow:
                '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
          >
            <button
              className="absolute w-[90px] h-[90px] bg-white rounded-[50%] overflow-hidden"
              onClick={() => alternStory(1)}
            >
              <img src="ifsp.jpg" className="w-[100%] h-[100%]" />
            </button>
          </div>
        </div>

        <div className="lg:flex-row flex-col flex w-100 ">
          <div className="pl-[40px] mt-[-140px] hidden lg:block">
            <div className="line1"></div>
            <div className="line2">
              <div
                className="w-[100px] h-[100px] rounded-[50%] mt-[30px] ml-[-50px]  flex items-center justify-center"
                style={{
                  backgroundColor: isStoryActive === 2 ? '#ff5555' : '#44475a',
                  boxShadow:
                    '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
                }}
              >
                <button
                  className="absolute w-[90px] h-[90px] bg-white rounded-[50%] overflow-hidden p-2 flex items-center justify-center"
                  onClick={() => alternStory(2)}
                >
                  <img src="FISistemas.png" className="w-[100%] h-[100%]" />
                </button>
              </div>
            </div>
            <div className="line3">
              <div
                className="w-[100px] h-[100px] bg-[#44475a] rounded-[50%] mt-[30px] ml-[200px]  flex items-center justify-center"
                style={{
                  backgroundColor: isStoryActive === 3 ? '#ff5555' : '#44475a',
                  boxShadow:
                    '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
                }}
              >
                <button
                  className="absolute w-[90px] h-[90px] bg-white rounded-[50%] overflow-hidden"
                  onClick={() => alternStory(3)}
                >
                  <img src="infinit.jpeg" className="w-[100%] h-[100%]" />
                </button>
              </div>
            </div>
            <div className="line4">
              <i className="fas fa-arrow-down iconArrow"></i>
            </div>
          </div>

          {isStory === 1 && (
            <div className="lg:pl-[80px] lg:mt-0 mt-[150px]">
              <h1 className="text-[30px] md:text-[50px] mt-[-120px] m-0 p-0 flex items-center">
                {(translations[language].line1_title)}
              </h1>
              <p className="m-0 p-0 text-[10px] md:text-[20px] mt-[-12px]">
                (2017 - 2021)
              </p>
              <p className="text-[20px] xl:text-[30px] mt-3">
                {renderHighlightedText(translations[language].line1_text1)}
              </p>
              <p className="text-[20px] xl:text-[30px] mt-3">
                {renderHighlightedText(translations[language].line1_text2)}
              </p>
            </div>
          )}
          {isStory === 2 && (
            <div className="lg:pl-[80px] lg:mt-0 mt-[150px]">
              <h1 className="text-[30px] md:text-[50px] mt-[-120px] m-0 p-0 flex items-center">
                {(translations[language].line2_title)}
              </h1>
              <p className="m-0 p-0 text-[10px] md:text-[20px] mt-[-5px] lg:mt-[-10px]">
                (2021 - Present)
              </p>
              <p className="text-[20px] xl:text-[30px] mt-3">
                {renderHighlightedText(translations[language].line2_text1)}
              </p>
              <p className="text-[20px] xl:text-[30px] mt-3">
                {renderHighlightedText(translations[language].line2_text2)}
              </p>
            </div>
          )}
          {isStory === 3 && (
            <div className="lg:pl-[80px] lg:mt-0 mt-[150px]">
              <h1 className="text-[30px] md:text-[50px] mt-[-120px]">
                {(translations[language].line3_title)}
              </h1>
              <p className="text-[20px] xl:text-[30px]">
                {renderHighlightedText(translations[language].line3_text1)}
              </p>
              <p className="text-[20px] xl:text-[30px] mt-3">
                {renderHighlightedText(translations[language].line3_text2)}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}
