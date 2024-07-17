import MiniCard from "./subcomponents/MiniCard";

export default function HeaderMessage() {
  return (
    <div className="max-w-[420px] mx-auto h-fit  text-left  lg:max-w-[490px] xs:mx-0 text-white">
      <div className="max-w-[450px] text-[22px] font-semibold leading-[28px] tracking-[0.025rem] lg:text-[35px] lg:leading-[35px]">
        RM Depositário
      </div>
      <div className="text-[16px] font-normal leading-[20px] mt-[15px] mb-[40px]">
        <div className="hidden lg:block"></div>
        <div className="mt-[5px]  mb-[5px]">
          Fazemos contrato exclusivo para prestação de serviço em todo Brasil
        </div>
        <MiniCard />
      </div>
    </div>
  );
}
