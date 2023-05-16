import { useState } from 'react';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    };
    return (
        <>
        {isOpen && (
            <div className="flex justify-center items-center fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity ease-out duration-300 z-10 overflow-y-auto">
                <div className="relative bg-[#44475A] rounded-lg mx-auto mt-10 max-w-[250px] overflow-hidden shadow-xl">
                    <div className="px-6 pt-2 pb-3">
                        <div className="flex justify-end items-center">
                            <button className="text-[#F8F8F2] hover:text-[#FF5555] focus:outline-none focus:text-gray-400" aria-label="Close" id="closeContact" onClick={handleClose}>
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M18.2929 5.70711C18.6834 6.09763 18.6834 6.7308 18.2929 7.12132L13.1213 12.2929L18.2929 17.4645C18.6834 17.855 18.6834 18.4882 18.2929 18.8787C17.9024 19.2692 17.2692 19.2692 16.8787 18.8787L12.7071 13.7071L7.53553 18.8787C7.14503 19.2692 6.51184 19.2692 6.12132 18.8787C5.7308 18.4882 5.7308 17.855 6.12132 17.4645L11.2929 12.2929L6.12132 7.12132C5.7308 6.7308 5.7308 6.09763 6.12132 5.70711C6.51184 5.31658 7.14503 5.31658 7.53553 5.70711L12.7071 10.8787L16.8787 6.70711C17.2692 6.31658 17.9024 6.31658 18.2929 6.70711Z"/>
                                </svg>
                            </button>
                        </div>
                        <div className="">
                            <div className="main">
                                <div className="up">
                                    <a href="mailto:matheuschiodi20@gmail.com" target="_blank" rel="noopener noreferrer" className="card1 hover:text-[#F8F8F2]" title="E-mail">
                                        <i className="fas fa-at e-mail text-[25px]"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/matheus-chiodi-b484581aa" target="_blank" rel="noopener noreferrer" className="card2 hover:text-[#F8F8F2]" title="Linkedin">
                                        <i className="fab fa-linkedin-in linkedin text-[25px]"></i>
                                    </a>
                                </div>
                                <div className="down">
                                    <a href="https://github.com/MatheusChiodi" target="_blank" rel="noopener noreferrer" className="card3 hover:text-[#F8F8F2]">
                                        <i className="fab fa-github-square github text-[25px]"></i>
                                    </a>
                                    <a href="https://api.whatsapp.com/send/?phone=5516988400100&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="card4 hover:text-[#F8F8F2]">
                                        <i className="fab fa-whatsapp whatsapp text-[25px] font-bold"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </>
        
    )
}

export default Contact
  
  