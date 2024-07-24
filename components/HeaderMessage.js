import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import MiniCard from "./subcomponents/MiniCard";

export default function HeaderMessage() {
  return (
    <div className="max-w-[520px] mx-auto h-fit text-center lg:max-w-[490px] xs:mx-0 text-white mr-2">
      <div className="max-w-[450px] text-[22px] font-semibold leading-[28px] tracking-[0.025rem] lg:text-[35px] lg:leading-[35px] mx-auto">
        RM Depositário
      </div>
      <div className="text-[16px] font-normal leading-[20px] mt-[15px] mb-[40px]">
        <div className="hidden lg:block"></div>
        <div className="mt-[5px] mb-[5px]">
          Fazemos contrato exclusivo para prestação de serviço em todo Brasil
        </div>
        <div className="flex justify-center mt-[20px]">
          <a href="tel:+5511999731913">
            <button className="bg-green-500 text-black py-3 px-6 rounded-full flex items-center justify-center space-x-2 text-lg font-semibold hover:bg-green-600">
              <FontAwesomeIcon icon={faPhoneAlt} className="w-5 h-5" />
              <span>Ligar Agora</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
