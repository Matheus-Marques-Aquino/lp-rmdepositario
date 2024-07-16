import MapContainer from "./subcomponents/Map";

import Link from 'next/link';

import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    const address = {
        street: 'Rua João Accioli',
        number: '114',
        complement: '',
        neiborhood: 'Jardim Maringa',
        city: 'São Paulo',
        state: 'SP',
        cep: '03524-000',
        geolocation: {
            lat: -23.546221, 
            lng: -46.514290
        } 
    };

    return (
        <div className="w-full mt-[60px] bg-[#f8f8f8] border-t-[#000] shadow-lg py-[40px] text-[#313131]">
            <div className="w-full max-w-[1000px] mx-auto px-[15px] text-left flex">                
                <div className="w-full h-full max-h-[220px] rounded-md flex">
                    <div className="sm:hidden sm:border-[1px] sm:border-[#E5E5E5] sm:rounded-[10px] hidden">
                        <MapContainer 
                            markers={[{...address.geolocation}]} 
                            geolocation={address.geolocation} 
                            style={{width: "200px", height: "200px", maxHeight: "220px", overflow: 'hidden', position: 'relative', borderRadius: '10px', display: "none"}} 
                            containerStyle={{width: "200px", height: "200px", maxHeight: "220px", overflow: 'hidden', position: 'relative', borderRadius: '10px'}} 
                        />
                    </div>
                    <div className="w-fit text-[#313131] px-[15px] my-auto">
                        <div className="font-semibold text-[18px] leading-[24px] hidden">
                            Endereço:
                        </div>
                        <div className="font-normal text-[16px] leading-[20px] mt-[10px] hidden">
                            {address.street}, {address.number} - {address.neiborhood}
                        </div>
                        <div className="font-normal text-[16px] leading-[20px] mt-[5px] hidden">
                            {address.city} - {address.state} 
                        </div>
                        <div className="font-normal text-[16px] leading-[20px] mt-[5px] hidden">
                            CEP: {address.cep}
                        </div>
                        <div className="font-semibold text-[18px] leading-[24px] mt-[10px]">
                            Contato:
                        </div>
                        <div className="font-normal text-[15px] sm:text-[16px] leading-[20px] mt-[5px] flex">
                            <FaPhoneAlt className="w-[18px] h-[14px] mr-[5px] my-auto"/>
                            <div>(11) 9.8874-6387</div>
                        </div>
                        <div className="font-normal text-[15px] sm:text-[16px] leading-[20px] mt-[5px] flex">
                            <FaPhoneAlt className="w-[18px] h-[14px] mr-[5px] my-auto"/>
                            <div>(11) 9.9973-1913</div>
                        </div>
                        <div className="font-normal text-[15px] sm:text-[16px] leading-[20px] mt-[5px] flex cursor-pointer">
                            <IoIosMail className="w-[18px] h-[18px] mr-[5px] my-auto"/>
                            <div>rmdepositario@gmail.com</div>
                        </div>
                    </div>
                    <div className="w-fit text-[#313131] flex ml-auto hidden">
                        <div className="cursor-pointer leading-[35px]">
                            <FaFacebookSquare className="text-[#2050b3] h-[35px] w-[35px] hover:opacity-70 transition ease-in-out duration-500"/>
                        </div>
                        <div className="cursor-pointer leading-[35px] ml-[15px]">
                            <Link href="" rel="noopener noreferrer" target="_blank">
                                <div className="h-[35px] w-[35px] bg-[#E1306C] flex rounded-[10px] hover:opacity-70 transition ease-in-out duration-500">
                                    <FaInstagram className="text-white h-[29px] w-[29px] m-auto"/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-[16px] pt-[35px]  max-w-[1000px] mx-auto text-center">
                © RM Depositário LTDA. Todos os direitos reservados. CNPJ: 48.136.785/0001-50
            </div>
        </div>
    );

}