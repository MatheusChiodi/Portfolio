import { useState } from 'react';

export default function Header() {
    // se o tamanho da tela for maior que 1024 entao useState fica como true
    // se o tamanho da tela for menor que 1024 entao useState fica como false
    var status = false;

    if (window.innerWidth > 1024) {
        status = true;
    }

    const [isOpen, setIsOpen] = useState(status);

    function toggleMenu(){
        setIsOpen(!isOpen);
    }

    return (
        <header>
            <nav className="flex items-center justify-between flex-wrap  p-2 px-6 lg:border-none border-b border-b-[#44475A] rounded-b-[20px]">
                <div className="block lg:hidden w-[100%]">
                    <div className="flex justify-between flex-row w-[100%]">
                        <div className="flex justify-cemter p-4 w-6/12">
                            <p className="bg-[#FF5555] text-white w-[40px] h-[39px] mx-auto rounded-[80px] flex items-center justify-center">
                                M
                            </p>
                        </div>
                        <div className="flex justify-center p-4 w-6/12">
                            <button className="flex items-center px-3 py-2 border rounded text-gray border-[#44475A] hover:text-[#FF5555] hover:border-[#FF5555] transition-all" onClick={toggleMenu}>
                                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                            </button>
                        </div>
                    </div>
                    
                </div>
                {isOpen ? (
                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto" id="menu">
                    <div className="lg:w-[50%] w-full text-center lg:text-left">
                        <a href="#responsive-header" className="text-lg block mt-1 lg:mt-0 lg:inline-block text-gray font-medium lg:mr-4 mr-0">
                        About
                        </a>
                        <a href="#responsive-header" className="text-lg block mt-1 lg:mt-0 lg:inline-block text-gray font-medium lg:mr-4 mr-0 mb-0">
                        Portfolio
                        </a>
                        <a href="#responsive-header" className="text-lg block mt-1 lg:mt-0 lg:inline-block text-gray font-medium">
                        Experience
                        </a>
                    </div>
                    <div className="px-2 w-[50%] text-center hidden lg:block">
                        <p className="bg-[#FF5555] text-white w-[40px] h-[39px] mx-auto rounded-[80px] flex items-center justify-center">
                            M
                        </p>
                    </div>
                    <div className="lg:w-[50%] lg-[100%] text-center lg:text-right mt-2">
                        <a href="#" className="inline-block text-sm px-7 py-1 leading-none border rounded-xl border-[#44475A] text-white font-medium bg-gray">Contact</a>
                    </div>
                </div>
                ) : (null)}
            </nav>
        </header>
    )
}
  
  