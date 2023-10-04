import { motion } from 'framer-motion';

export default function ContainerAbout() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div
      className="px-6 w-full mt-[80px] lg:mb-0 mb-3 lg:h-screen h-auto lg:max-h-[550px] m-0 p-0"
      id="ContainerAbout"
    >
      <div className="m-0 p-0 md:grid md:grid-cols-2">
        <div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="md:text-[45px] lg:text-[50px] xl:text-[60px] text-[30px] text-center md:text-left"
          >
            <motion.h1
              className="m-0 p-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
            >
              My name is
            </motion.h1>
            <motion.h1
              className="m-0 p-0 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.8 } }}
            >
              <span className="text-[#FF5555] font-medium">&lt;</span>
              Matheus Chiodi
              <span className="text-[#FF5555] font-medium"> /</span>
              <span className="text-[#FF5555] font-medium">&gt;</span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="m-0 p-0"
          >
            <motion.p
              className="text-center md:text-[20px] lg:text-[25px] xl:text-[30px] text-[15px] md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1.1 } }}
            >
              I am a professional programmer{' '}
              <span className="text-[#FF5555] font-medium">Fullstack</span> with
              more than 2 years of experience
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <p className="lg:mt-[50px] mt-[30px] text-center md:text-left md:text-[20px] lg:text-[25px] xl:text-[30px] text-[15px]">
              <motion.a
                className="inline-block px-7 py-2 leading-none border rounded-xl border-[#F1FA8C] text-gray font-bold bg-[#F1FA8C]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1.4 } }}
              >
                React Native
              </motion.a>
              <motion.a
                className="mx-3 inline-block px-7 py-2 leading-none border rounded-xl border-[#FFB86C] text-gray font-bold bg-[#FFB86C]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1.7 } }}
              >
                ReactJS
              </motion.a>
            </p>
            <p
              className="mt-3 text-center md:text-left md:text-[20px] lg:text-[25px] xl:text-[30px] text-[15px]"
              id="ContainerTwo"
            >
              <motion.a
                className="inline-block px-7 py-2 leading-none border rounded-xl border-[#44475A] text-white font-bold bg-[#44475A]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 2 } }}
              >
                php
              </motion.a>
              <motion.a
                className="inline-block mx-3 px-7 py-2 leading-none border rounded-xl border-[#FF5555] text-gray font-bold bg-[#FF5555]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 2.3 } }}
              >
                SQL
              </motion.a>
              <motion.a
                className="lg:mt-3 md:mt-2 mt-1 inline-block px-7 py-2 leading-none border rounded-xl text-white  border-[#44475A] font-bold bg-[#44475A]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 2.6 } }}
              >
                SQL
              </motion.a>
            </p>
          </motion.div>
        </div>
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="hidden lg:flex">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.9 } }}
            src="./perfil1.png"
            className="w-[100%] h-[100%] rounded-[20px]"
          />
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="hidden md:flex lg:hidden">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.9 } }}
            src="./perfil2.png"
            className="w-[100%] h-[100%] rounded-[20px]"
          />
        </motion.div>
      </div>
    </div>
  );
}
