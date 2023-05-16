const ContainerPortfolio = () => {
    return (
        <div className="w-full mx-auto m-0 p-0 lg:mb-[-80px] mb-0 lg:mt-0 mt-10" id="ContainerPortfolio">
            <div className="w-full lg:bg-slate-700 lg:pb-[100px] pt-[10px]">
                <div className="w-[95%] mx-auto m-0 p-0">
                    <div className="title text-center mb-2 mt-2">
                        <div className="border-[1.5px] border-[#FF5555] mb-[-17px]"></div>
                        <span className="font-bold font-lg px-1 bg-[#F8F8F2] lg:bg-slate-700 lg:text-[#F8F8F2] text-[#44475A] ">
                            My Projects
                        </span>
                    </div>
                    <div className="grid md:grid-cols-2 mx-auto m-0 p-0 w-full my-[5px] justify-center items-center">
                        <div className="w-[250px] h-[250px] mb-[10px] lg:bg-white bg-slate-700 rounded-t-[20px] rounded-b-[20px] card mx-auto">
                            <div className="rounded-br-[40px] h-[140px] rounded-t-[20px] imgCard">
                                <img src="./recriando_home_instagram.png" alt="image" className="w-full rounded-br-[40px] h-[140px] text-[#F8F8F2] rounded-t-[20px] rounded-b-[-200px]"/>
                            </div>
                            <div className="rounded-br-[40px] h-[140px] lg:text-[#44475A] text-[#F8F8F2] rounded-b-[20px] textCard">
                                <p className="w-full text-center font-medium text-[20px] text-[#FF5555] mt-2">
                                    Home do Instagram
                                </p>
                                <div className="m-0 p-0 text-[16px]">
                                    <p className="w-full text-center">
                                    Project was created for learning purposes and knowledge
                                    </p>
                                    <p className="restTextCard w-full text-center mt-4">
                                        <a href="https://matheuschiodi.github.io/Recriando-Home-Instagram/" target="_blank" rel="noopener noreferrer" className="text-[#F8F8F2] lg:text-[#44475A] hover:text-[#FF5555]">
                                            <i className="fas fa-eye"></i>
                                        </a>
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="w-[250px] h-[250px] mb-[10px] lg:bg-white bg-slate-700 rounded-t-[20px] rounded-b-[20px] card mx-auto">
                            <div className="rounded-br-[40px] h-[140px] rounded-t-[20px] imgCard">
                                <img src="./projectShop.png" alt="image" className="w-full rounded-br-[40px] h-[140px] text-[#F8F8F2] rounded-t-[20px] rounded-b-[-200px]"/>
                            </div>
                            <div className="rounded-br-[40px] h-[140px] lg:text-[#44475A] text-[#F8F8F2] rounded-b-[20px] textCard">
                                <p className="w-full text-center font-medium text-[20px] text-[#FF5555] mt-2">
                                    Project Shop
                                </p>
                                <div className="m-0 p-0 text-[16px]">
                                    <p className="w-full text-center">
                                    
                                    </p>
                                    <p className="restTextCard w-full text-center mt-4">
                                        <a href="https://matheuschiodi.github.io/Project-Shop/" target="_blank" rel="noopener noreferrer" className="text-[#F8F8F2] lg:text-[#44475A] hover:text-[#FF5555]">
                                            <i className="fas fa-eye"></i>
                                        </a>
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContainerPortfolio
  
  