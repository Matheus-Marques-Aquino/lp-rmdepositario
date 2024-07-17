import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faBalanceScale,
  faLock,
  faClipboard,
  faHome,
  faTruckMoving,
} from "@fortawesome/free-solid-svg-icons";

export default function Servicos() {
  return (
    <div className="bg-[#313131]">
      <div className="container mx-auto py-12">
        <h2 className="mx-auto text-3xl justify-center items-center text-white text-center mb-8">
          Serviços
        </h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-1/2 md:w-1/6 p-4 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FontAwesomeIcon
                icon={faGavel}
                className="text-4xl text-[#313131]"
              />
              <p className="mt-2">Despejo Judicial</p>
            </div>
          </div>
          <div className="w-1/2 md:w-1/6 p-4 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FontAwesomeIcon
                icon={faBalanceScale}
                className="text-4xl text-[#313131]"
              />
              <p className="mt-2">Falências</p>
            </div>
          </div>
          <div className="w-1/2 md:w-1/6 p-4 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FontAwesomeIcon
                icon={faLock}
                className="text-4xl text-[#313131]"
              />
              <p className="mt-2">Penhora de Bens</p>
            </div>
          </div>
          <div className="w-1/2 md:w-1/6 p-4 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FontAwesomeIcon
                icon={faClipboard}
                className="text-4xl text-[#313131]"
              />
              <p className="mt-2">Depositário Judicial</p>
            </div>
          </div>
          <div className="w-1/2 md:w-1/6 p-4 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FontAwesomeIcon
                icon={faHome}
                className="text-4xl text-[#313131]"
              />
              <p className="mt-2">Reintegração de Posse</p>
            </div>
          </div>
          <div className="w-1/2 md:w-1/6 p-4 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FontAwesomeIcon
                icon={faTruckMoving}
                className="text-4xl text-[#313131]"
              />
              <p className="mt-2">Transporte / Mudança</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
