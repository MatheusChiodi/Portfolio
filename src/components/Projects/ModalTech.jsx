const ModalTech = ({
  language,
  toggleModal,
  interfaceTexts,
  selectTechnology,
}) => {
  return (
    <div className="flex justify-center items-center fixed inset-0 bg-gray-900 bg-opacity-75 z-50 overflow-y-auto transition-opacity ease-out duration-300">
      <div className="relative bg-[#44475A] rounded-lg mx-auto mt-10 w-[300px] overflow-hidden shadow-xl">
        <div className="pt-2 pb-3">
          <div className="flex justify-between items-center border-b pb-1 px-2">
            <p className="text-[#F8F8F2]">{interfaceTexts[language].title}</p>
            <button
              className="text-[#F8F8F2] hover:text-[#FF5555] transition-colors duration-300"
              onClick={toggleModal}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.293 5.707a1 1 0 010 1.415L13.414 12l4.879 4.879a1 1 0 11-1.414 1.415L12 13.414l-4.879 4.88a1 1 0 11-1.415-1.414L10.586 12 5.707 7.121a1 1 0 111.414-1.414L12 10.586l4.879-4.879a1 1 0 011.414 0z" />
              </svg>
            </button>
          </div>
          <div className="mt-2">
            <div className="flex justify-center items-center">
              <button
                className="inline-block px-2 py-1 leading-none border rounded-xl border-[#FF5555] text-white font-bold bg-[#ea4e4e] hover:brightness-125"
                onClick={() => selectTechnology('React Native')}
              >
                React Native
              </button>
              <button
                className="inline-block px-2 py-1 leading-none border rounded-xl border-[#6272A4] text-white font-bold bg-[#6272A4] ml-2 hover:brightness-125"
                onClick={() => selectTechnology('ReactJS')}
              >
                ReactJS
              </button>
            </div>
            <div className="flex justify-center items-center mt-2">
              <button
                className="inline-block px-2 py-1 leading-none border rounded-xl border-[#FFB86C] font-bold bg-[#FFB86C] text-[#282A36] hover:brightness-125"
                onClick={() => selectTechnology('HTML, CSS e JavaScript')}
              >
                HTML, CSS e JavaScript
              </button>
            </div>
            <div className="flex justify-center items-center mt-2">
              <button
                className="inline-block px-2 py-1 me-2 leading-none border rounded-xl border-[#339933] font-bold bg-[#339933] text-[#282A36] hover:brightness-125"
                onClick={() => selectTechnology('NodeJS')}
              >
                NodeJS
              </button>
              <button
                className="inline-block px-2 py-1 leading-none border rounded-xl border-[#BD93F9] font-bold bg-[#BD93F9] text-[#282A36] hover:brightness-125"
                onClick={() => selectTechnology('')}
              >
                {interfaceTexts[language].subtitle}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalTech;
