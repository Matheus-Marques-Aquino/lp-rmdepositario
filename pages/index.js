import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import Form from "../components/Form";
import HeaderMessage from "../components/HeaderMessage";
import FirstRow from "@/components/FirstRow";
import SecondRow from "@/components/SecondRow";
import AboutUs from "@/components/AboutUs";
import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/Footer";

import { FaWhatsapp } from "react-icons/fa6";
import { SERVER_DIRECTORY } from "next/dist/shared/lib/constants";

import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

export default function Home() {
  const [selectValue, setSelectValue] = useState("");

  useEffect(() => {
    document.title = "RM Depositário";
  }, []);

  const onSelectChange = (value) => {
    setSelectValue(value);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Para uma rolagem suave
    });
  };

  return (
    <main className="bg-white w-full">
      <div className="h-[60px] border-b-[1px] border-b-[#000] border-opacity-10 flex shadow-lg bg-[#212121] sticky top-0 z-[1000] ">
        <div className="w-full max-w-[1000px] h-full mx-auto flex">
          <div className="w-[130px] mx-[15px] my-auto flex">
            <img src={"/imgs/Logo-RM.png"} className="w-auto h-auto my-auto" />
          </div>
          <div className="w-fit my-auto text-white ml-auto flex">
            <div>
              <div className="font-normal text-[15px] sm:text-[12px] leading-[20px] flex">
                <FaPhoneAlt className="w-[18px] h-[13px] mr-[5px] my-auto" />
                <div>(11) 9.8874-6387</div>
              </div>
              <div className="font-normal text-[12px] sm:text-[12px] leading-[20px] mt-[0px] flex">
                <FaPhoneAlt className="w-[18px] h-[13px] mr-[5px] my-auto" />
                <div>(11) 9.9973-1913</div>
              </div>
            </div>
            <div className="font-normal text-[12px] sm:text-[12px] leading-[20px] flex cursor-pointer ml-5">
              <div className="flex h-fit">
                <IoIosMail className="w-[18px] h-[16px] my-auto mr-[4px]" />
                <div className="">rmdepositario@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex py-[40px] bg-[#FFFFFF] bg-[url('/imgs/background-1.png')] bg-cover bg-center bg-no-repeat">
        <div className="w-full max-w-[1000px] mx-auto lg:flex">
          <div className="w-fit h-fit mt-auto mb-[40px] mx-auto px-[8px] lg:mr-auto lg:ml-0 xs:px-0">
            <HeaderMessage />
          </div>
          <div className="w-fit my-auto mx-auto px-[8px] lg:mx-0 xs:px-0">
            <Form selectValue={selectValue} onSelectChange={onSelectChange} />
          </div>
        </div>
      </div>
      <div className="w-full z-10">
        <FirstRow />
        <SecondRow
          updateSelect={(value) => {
            onSelectChange(value);
            scrollToTop();
          }}
        />
        <AboutUs />
        <NewsLetter />
        <Footer />
      </div>
      <Link
        href="https://api.whatsapp.com/send/?phone=11988746387"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="fixed bottom-[25px] right-[25px] z-50 sm:w-[75px] sm:h-[75px] w-[60px] h-[60px] rounded-full bg-[#25D366] flex cursor-pointer hover:opacity-80 transition ease-in-out duration-500">
          <FaWhatsapp className="w-[40px] h-[40px] sm:w-[54px] sm:h-[54px] m-auto text-white" />
        </div>
      </Link>
    </main>
  );
}

/*
  Como são as persianas motoriadas?
  Como elas podem ser controladas?
  Você oferece somente o serviço de instalação?
  As persianas tem alguma garantia?
  Quais são as formas de pagamento?
  Parcelam em até quantas vezes?
  Parcelam em até quantas vezes sem juros?
  Endereço, numero de celular/telefone e email de contato?
  Redes sociais?
*/
