//Sessão de informações sobre a empresa minimalista e responsiva

import imageManager from "./img/img";
const stats = [
  { name: " De Mercado", value: "8 Anos" },
  { name: "De Cotações", value: "+ de 1 Milhão" },
  { name: "Contratos", value: "+ de 100 Mil" },
  { name: "Clientes Ativos", value: "+ de 30 Mil" },
];

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32  ">
      {/*<img
        loading="lazy"
        src="./img/img1.png"
        alt="Background Sessão Sobre a Prime Secure"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />*/}
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#313131] to-[#000] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#313131] to-[#000] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Por que a RM Depositário?
          </h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Na RM Depositário, nossa missão é garantir a segurança e a
            integridade dos bens apreendidos, proporcionando soluções completas
            e personalizadas para a custódia judicial. Com mais de 25 anos de
            experiência, nossa equipe está comprometida em oferecer um serviço
            excepcional, ouvindo suas necessidades e fornecendo orientação
            especializada. Nosso compromisso com a excelência é evidente em cada
            aspecto de nosso trabalho, desde a guarda e administração de bens
            até a demolição e venda conforme necessário. Atuamos em todo o
            território nacional, assegurando que nossos serviços estejam sempre
            acessíveis e eficientes.
          </p>
        </div>
      </div>
    </div>
  );
}
