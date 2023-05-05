export default function ContainerOne() {
    return (
        <div className="px-6 w-full mt-[80px]">
            <div className="md:text-[45px] text-[30px] text-center md:text-left">
                <h1 className="m-0 p-0">
                    My name is
                </h1>
                <h1 className="m-0 p-0 font-medium">
                    <span className="text-[#FF5555] font-medium">&lt;</span>
                    Matheus Chiodi 
                    <span className="text-[#FF5555] font-medium"> /</span>
                    <span className="text-[#FF5555] font-medium">&gt;</span>
                </h1>
            </div>
            <p className="text-center md:text-[20px] text-[15px] md:text-left">
                I am a professional programmer with <br/>
                more than 2 years of experience 
            </p>
            <p className="mt-[30px] text-center md:text-left">
                <a className="inline-block text-sm px-7 py-2 leading-none border rounded-xl border-[#FF5555] text-gray font-bold bg-[#FF5555]">
                    SQL
                </a>
                <a className="mt-3 mx-3 inline-block text-sm px-7 py-2 leading-none border rounded-xl border-[#FFB86C] text-gray font-bold bg-[#FFB86C]">
                    CodeIgniter 3
                </a>
            </p>
            <p className="mt-3 text-center md:text-left">
                <a className="inline-block text-sm px-7 py-2 leading-none border rounded-xl border-[#44475A] text-white font-bold bg-[#44475A]">
                    php
                </a>
                <a className="mx-3 inline-block text-sm px-7 py-2 leading-none border rounded-xl border-[#F1FA8C] text-gray font-bold bg-[#F1FA8C]">
                    javascript
                </a>
            </p>
        </div>
    )
}
  
  