import Image from "next/image";


const CustomCard = ({url, title, content}) => {
    
    return(
        
        <div className="bg-white w-full p-[5px] max-w-[180px] min-w-[100px] shadow-lg rounded-lg xs:p-[12px] text-center">
            <div className="w-fit h-fit mx-auto">
                <img
                    src={url}
                    className="w-[60px] h-[60px] mx-auto sm:w-[60px] sm:h-[60px] opacity-60"
                />
            </div>
            <div className="w-fit h-[40px] text-[14px] font-medium text-[#313131] mx-auto mt-auto md:text-[14px] m-auto mt-3">
                {title}
            </div>
        </div>
    );
}

export default function FirstRow() { 

    return (
        <div className="bg-[#F8F8F8] shadow-inner-custom-1 w-full py-[40px] text-[#313131]">
            <div className="w-fit mx-auto font-medium text-[22px] xs:text-[26px] sm:text-[30px] md:text-[35px]">
                Características do nosso trabalho
            </div>
            <div className="w-fit font-normal mx-auto mt-[5px] text-[15px] xs:text-[16px] sm:text-[18px] md:text-[20px]">
                O nosso compromisso com a qualidade é coisa séria!
            </div>
            <div className="w-fit mx-auto gap-x-[15px] gap-y-[5px] xs:gap-y-[25px] pt-[40px] flex flex-wrap justify-center items-center">
                <div className="w-fit gap-x-[5px] flex mx-[5px] xs:gap-x-[15px] xs:mx-0 h-full">
                    <CustomCard 
                        url="/icons/1.png" 
                        title="Mais de 25 anos de experiência no mercado"
                    />
                    <CustomCard 
                        url="/icons/2.png" 
                        title="Empresa pioneira em São Paulo" 
                    />
                </div>
                <div className="w-fit gap-x-[5px] flex mx-[5px] xs:gap-x-[15px] xs:mx-0 h-full">
                    <CustomCard 
                        url="/icons/4.png" 
                        title="Atuação em todo o território nacional" 
                    />
                    <CustomCard 
                        url="/icons/3.png" 
                        title="Serviços especializados para você" 
                    />
                </div>
            </div>
        </div>
    );
}
