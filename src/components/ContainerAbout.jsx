import { motion } from 'framer-motion';

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const title = 'My Name is';
  const name = 'Matheus Chiodi';

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.6 } }}
        className="px-[20px] w-full mt-[80px] lg:mb-0 mb-3 lg:h-screen h-auto lg:max-h-[380px] m-0 p-0 md:flex"
        id="ContainerAbout"
      >
        <div className="m-0 p-0">
          <h1 className="md:text-[45px] lg:text-[40px] xl:text-[60px] text-[30px] text-center md:text-left">
            {title}
          </h1>

          <h1 className="md:text-[45px] lg:text-[45px] text-[30px] text-center md:text-left font-medium text-[#44475a]">
            <span className="text-[#FF5555] font-medium">&lt;</span>
            {name}
            <span className="text-[#FF5555] font-medium"> /</span>
            <span className="text-[#FF5555] font-medium">&gt;</span>
          </h1>

          <motion.p
            className="text-center md:text-[20px] lg:text-[25px] xl:text-[30px] text-[15px] md:text-left text-[#44475a]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.6 } }}
          >
            I am a professional programmer{' '}
            <span className="text-[#FF5555] font-bold">Fullstack</span> with
            more than 2 years of experience
          </motion.p>

          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <p className="lg:mt-[50px] mt-[30px] text-center md:text-left md:text-[20px] lg:text-[25px] xl:text-[30px] text-[15px]">
              <motion.a
                className="inline-block px-7 py-2 leading-none border rounded-xl border-[#FF5555] text-white font-bold bg-[#FF5555]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.2 } }}
                style={{
                  boxShadow:
                    '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
                }}
              >
                React Native
              </motion.a>
              <motion.a
                className="mt-2 lg:mt-0 mx-3 inline-block px-7 py-2 leading-none border rounded-xl border-[#6272A4] text-white font-bold bg-[#6272A4]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.4 } }}
                style={{
                  boxShadow:
                    '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
                }}
              >
                ReactJS
              </motion.a>
            </p>
            <p
              className="mt-3 text-center md:text-left md:text-[20px] lg:text-[25px] xl:text-[30px] text-[15px]"
              id="ContainerTwo"
            >
              <motion.a
                className="inline-block px-7 py-2 leading-none border rounded-xl border-[#FFB86C] text-white font-bold bg-[#FFB86C]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.6 } }}
                style={{
                  boxShadow:
                    '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
                }}
              >
                CodeIgniter 3
              </motion.a>
              <motion.a
                className="inline-block mx-3 px-7 py-2 leading-none border rounded-xl border-[#BD93F9] text-white font-bold bg-[#BD93F9]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.8 } }}
                style={{
                  boxShadow:
                    '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
                }}
              >
                Php
              </motion.a>
              <motion.a
                className="lg:mt-3 mt-2 inline-block px-7 py-2 leading-none border rounded-xl text-white  border-[#282A36] font-bold bg-[#282A36]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1 } }}
                style={{
                  boxShadow:
                    '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
                }}
              >
                SQL
              </motion.a>
            </p>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="hidden lg:flex"
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.2 } }}
            src="./perfil1.png"
            className="w-[100%] h-[100%] rounded-[20px]"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="hidden md:flex lg:hidden"
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.2 } }}
            src="./perfil2.png"
            className="w-[100%] h-[100%] rounded-[20px]"
          />
        </motion.div>
      </motion.div>
    </>
  );
}
