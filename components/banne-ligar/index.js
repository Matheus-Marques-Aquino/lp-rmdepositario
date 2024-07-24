import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import HeaderMessage from "../HeaderMessage";

export default function BannerLigar() {
  return (
    <div className="relative w-full py-[40px] bg-[#FFFFFF] bg-[url('/imgs/background-2.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay */}
      <div className="relative text-white text-5xl">
        <HeaderMessage />
      </div>
    </div>
  );
}
