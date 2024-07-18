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
import About from "../components/about";
import InfoSection from "@/components/info-section";
import Servicos from "@/components/servicos";
import ContactSection from "@/components/contact";

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
      <div className="h-[60px] border-b-[1px] border-b-[#000] border-opacity-10 flex shadow-lg bg-[#212121] sticky top-0 z-[1000]">
        <div className="w-full max-w-[1000px] h-full mx-auto flex items-center px-4">
          <div className="w-[130px] flex-shrink-0">
            <img
              src={"/imgs/Logo-RM.png"}
              className="w-auto h-auto my-auto"
              alt="Logo RM"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center text-white ml-auto">
            <div className="text-center sm:text-left">
              <div className="font-normal text-[10px] sm:text-[8px] leading-[20px] flex items-center justify-center sm:justify-start">
                <FaPhoneAlt className="w-[18px] h-[13px] mr-[5px] my-auto" />
                <a href="tel:+5511988746387" className="whitespace-nowrap">
                  (11) 9.8874-6387
                </a>
              </div>
              <div className="font-normal text-[10px] sm:text-[8px] leading-[20px] flex items-center justify-center sm:justify-start">
                <FaPhoneAlt className="w-[18px] h-[13px] mr-[5px] my-auto" />
                <a href="tel:+5511999731913" className="whitespace-nowrap">
                  (11) 9.9973-1913
                </a>
              </div>
            </div>
            <div className="font-normal text-[10px] sm:text-[8px] leading-[20px] flex items-center cursor-pointer mt-2 sm:mt-0 sm:ml-5">
              <IoIosMail className="w-[18px] h-[16px] my-auto mr-[4px]" />
              <a
                href="mailto:rmdepositario@gmail.com"
                className="whitespace-nowrap"
              >
                rmdepositario@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full py-[40px] bg-[#FFFFFF] bg-[url('/imgs/background-2.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay */}
        <div className="relative w-full max-w-[1000px] mx-auto lg:flex">
          <div className="w-fit h-fit mt-auto mb-[40px] mx-auto px-[8px] lg:mr-auto lg:ml-0 xs:px-0">
            <HeaderMessage />
          </div>
          <div className="w-fit my-auto mx-auto px-[8px] lg:mx-0 xs:px-0">
            <Form selectValue={selectValue} onSelectChange={onSelectChange} />
          </div>
        </div>
      </div>
      <div className="w-full z-10">
        <Servicos />
        <FirstRow />
        <SecondRow
          updateSelect={(value) => {
            onSelectChange(value);
            scrollToTop();
          }}
        />

        <InfoSection />
        <NewsLetter />
        <About />
        <ContactSection />
        <Footer />
      </div>
      <Link
        href="https://api.whatsapp.com/send/?phone=11999731913"
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
