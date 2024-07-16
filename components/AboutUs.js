import Image from "next/image";

export default function AboutUs() {

    return (
        <div className="w-full shadow-inner-custom-1 bg-[#CCCCCC]/[0.2] py-[40px] text-[#313131]">
            <div className="w-full max-w-[1000px] mx-auto px-[5px] text-left flex flex-wrap">
                <div className="mx-auto w-full">  
                    <div className="w-full ml-auto">
                        <div className="min-w-[350px] w-fit font-medium text-[22px] xs:text-[26px] sm:text-[30px] lg:text-[35px]">
                            Sobre nós
                        </div>
                        <div className="w-full min-w-[360px] mt-[18px] text-[15px] xs:text-[15px] sm:text-[15px] lg:text-[16px]">
                            <div>Na <b>RM Depositário</b>, nossa missão é garantir a segurança e a integridade dos bens apreendidos, proporcionando soluções completas e personalizadas para a custódia judicial. Com mais de 25 anos de experiência, nossa equipe está comprometida em oferecer um serviço excepcional, ouvindo suas necessidades e fornecendo orientação especializada.</div> 
                            <div className="mt-[5px] hidden sm:block">Nosso compromisso com a excelência é evidente em cada aspecto de nosso trabalho, desde a guarda e administração de bens até a demolição e venda conforme necessário. Atuamos em todo o território nacional, assegurando que nossos serviços estejam sempre acessíveis e eficientes.</div>
                        </div>
                    </div>                     
                </div>
            </div>
        </div>
    );

}