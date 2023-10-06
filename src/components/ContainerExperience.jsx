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

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.4 } }}
        className="mx-auto px-[20px] w-full mt-[90px] xl:mt-[120px] lg:mb-0 mb-3 m-0 p-0"
        id="ContainerExperience"
      >
        <p className="text-[50px] font-semibold hidden lg:block">Timeline</p>
        <div className="block lg:hidden">
          <div className=""></div>
          <div className="w-[100%] ml-auto flex justify-between items-center mt-[-30px] lineInitial2">
            <p className="text-[30px] md:text-[50px] font-semibold mt-[-15px] md:mt-[-25px] bg-[#f8f8f2] pe-1 text-[#44475a]">
              Timeline
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
                IFSP - Araraquara{' '}
              </h1>
              <p className="m-0 p-0 text-[10px] md:text-[20px] mt-[-12px]">
                (2017 - 2021)
              </p>
              <p className="text-[20px] xl:text-[30px] mt-3">
                During my years of study at the Federal Institute of Araraquara,
                I completed a technical course integrated with high school,
                which lasted four years. It was during this time that I had my
                first exposure to and learned programming languages, including
                <span className="text-[#ff5555]"> HTML</span>,
                <span className="text-[#ff5555]"> CSS</span>,
                <span className="text-[#ff5555]"> PHP</span>,
                <span className="text-[#ff5555]"> SQL</span>,
                <span className="text-[#ff5555]"> JavaScript</span>,
                <span className="text-[#ff5555]"> AJAX</span> and
                <span className="text-[#ff5555]"> jQuery</span>.
              </p>
              <p className="text-[20px] xl:text-[30px] mt-3">
                This course provided me with a solid foundation of both basic
                and technological knowledge. As part of my course completion, I
                developed a{' '}
                <span className="text-[#ff5555]"> special project</span>. The
                primary goal of this project was to integrate and apply the
                knowledge acquired throughout my education. I chose to create an
                initiative aimed at the{' '}
                <span className="text-[#ff5555]">
                  {' '}
                  non-profit organization "Parque Vivo"
                </span>
                . In this project, I managed to combine my technical and
                academic learnings, contributing significantly to a relevant and
                beneficial cause for the community. Not only did this experience
                solidify my knowledge, but it also allowed me to witness
                firsthand the practical possibilities of applying technology to
                impactful social projects.
              </p>
            </div>
          )}
          {isStory === 2 && (
            <div className="lg:pl-[80px] lg:mt-0 mt-[150px]">
              <h1 className="text-[30px] md:text-[50px] mt-[-120px] m-0 p-0 flex items-center">
                First job{' '}
              </h1>
              <p className="m-0 p-0 text-[10px] md:text-[20px] mt-[-5px] lg:mt-[-10px]">
                (2021 - Present)
              </p>
              <p className="text-[20px] xl:text-[30px] mt-3">
                As I embarked on the journey of my first job as a Fullstack
                Developer, I notice that each line of code I write is imbued
                with effort, continuous learning, and a commitment to
                excellence.{' '}
                <span className="text-[#ff5555]">My responsibilities</span> are
                weighty; they involve crafting vital institutional websites,
                developing crucial systems for file management, and implementing
                platforms that rigorously comply with LGPD.
              </p>
              <p className="text-[20px] xl:text-[30px] mt-3">
                This position demands not only refined technical skill in
                <span className="text-[#ff5555]"> languages such as </span>{' '}
                CodeIgniter, Web Development, JavaScript, SQL, PHP, HTML5, and
                CSS but also a deep operational understanding of the practical
                issues end-users face. I am the one who optimizes and maintains
                websites running seamlessly, and I am the intervener when
                unexpected bugs arise, diligently working to resolve each issue
                and ensure a flawless user experience.
              </p>
            </div>
          )}
          {isStory === 3 && (
            <div className="lg:pl-[80px] lg:mt-0 mt-[150px]">
              <h1 className="text-[30px] md:text-[50px] mt-[-120px]">
                Curses Infinit
              </h1>
              <p className="text-[20px] xl:text-[30px]">
                Upon concluding my studies at the Federal Institute, I embraced
                the perpetual and captivating journey of learning. With
                dedicated effort, I engaged in various courses offered by
                platforms like Dio, significantly sharpening and broadening my
                skills.
              </p>
              <p className="text-[20px] xl:text-[30px] mt-3">
                Presently, <span className="text-[#ff5555]">my focus</span> is
                sharpening my proficiency in{' '}
                <span className="text-[#ff5555]">React Js</span> and{' '}
                <span className="text-[#ff5555]">React Native</span>. This
                continuous investment in self-knowledge and improvement extends
                beyond gaining technical skills. It's about fostering a
                resilient and innovative mindset capable of navigating and
                surmounting the challenges presented by the dynamic and
                ever-evolving professional landscape I am part of.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}
