import { FaCheckCircle } from "react-icons/fa";

export default function MiniCard() {
  return (
    <div className="w-[300px] bg-white flex items-center p-4 rounded-lg shadow-lg">
      <FaCheckCircle className="text-green-500 text-2xl mr-4" />
      <span className="text-black text-lg">Cobrimos qualquer oferta</span>
    </div>
  );
}
