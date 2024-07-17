import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faWarehouse,
  faTruckMoving,
  faTruckLoading,
  faDolly,
  faTools,
  faTruckRamp,
  faTruckPickup,
  faTruckMonster, // ícone para a retroescavadeira
} from "@fortawesome/free-solid-svg-icons";

export default function InfoSection() {
  return (
    <div className="bg-[#313131] py-12 m-10 rounded-lg">
      <div className="container mx-auto">
        <h2 className="text-3xl text-white text-center mb-8">Frota</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4 flex justify-start md:justify-center">
            <ul className="list-none space-y-4">
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faTruck}
                  className="mr-4 p-2 border-2 border-white rounded-full text-white text-3xl"
                />
                <span className="text-white">Caminhão Baú Porte Médio</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faWarehouse}
                  className="mr-4 p-2 border-2 border-white rounded-full text-white text-3xl"
                />
                <span className="text-white">Caminhão Baú Porte Grande</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faTruckMoving}
                  className="mr-4 p-2 border-2 border-white rounded-full text-white text-3xl"
                />
                <span className="text-white">Caminhões Carroceria</span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 p-4 flex justify-start md:justify-center">
            <ul className="list-none space-y-4">
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faTruckLoading}
                  className="mr-4 p-2 border-2 border-white rounded-full text-white text-3xl"
                />
                <span className="text-white">Caminhão Munk</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faDolly}
                  className="mr-4 p-2 border-2 border-white rounded-full text-white text-3xl"
                />
                <span className="text-white">Carreta Carroceria e Baú</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faTools}
                  className="mr-4 p-2 border-2 border-white rounded-full text-white text-3xl"
                />
                <span className="text-white">Empilhadeira</span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 p-4 flex justify-start md:justify-center">
            <ul className="list-none space-y-4">
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faTruckMonster}
                  className="mr-4 p-2 border-2 border-white rounded-full text-white text-3xl"
                />
                <span className="text-white">Retroescavadeira</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faTruckPickup}
                  className="mr-4 p-2 border-2 border-white rounded-full text-white text-3xl"
                />
                <span className="text-white">Caminhão Plataforma</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faTruck}
                  className="mr-4 p-2 border-2 border-white rounded-full text-white text-3xl"
                />
                <span className="text-white">Caminhão Guincho</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
