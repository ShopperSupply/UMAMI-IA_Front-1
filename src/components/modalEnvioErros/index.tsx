import Image from "next/image";
import iconRobo from "../../../public/Icon_Robo.svg";
import Select, { SingleValue } from "react-select";
import OptionTypeBase from "react-select";
import { useState } from "react";
import { curadores, errosTypes, places } from "./db";

const ModalEnvioErros = () => {
  // esse modal precisa receber um provider com um array com todos os curadores ativos, erros de QA, Cliente, Shopping, ABBR e Loja.

  const [curatorValue, setCuratorValue] = useState("");

  const onChange = (event : any) => {
    setCuratorValue(event.target.value);
  };

  const onClick = (event: any) => {
    setCuratorValue(event)
  }

  // Funções responsaveis com formatar o objeto e adicionar o campo label.
 
  return (
    <div className="flex flex-col justify-center items-center gap-[3rem] w-[25%] h-screen bg-branco-primario drop-shadow-md">
      <Image src={iconRobo} alt="Incone robô de qualidade Shopper" />
      <p className="text-roxo-primario text-[1.8rem] text-center">
        Aqui você pode cadastrar um ou mais erros, tenha certeza de que todas as
        informações estão corretas.
      </p>
      <form className="flex flex-col justify-center items-center w-[85%]">
        <div>
          <input
            type="text"
            value={curatorValue}
            onChange={onChange}
            className="w-[100%] rounded-full border-roxo-primario px-[1rem] border-[.2rem] h-[4rem] text-[1.8rem] text-roxo-primario focus:border-roxo-primario focus:outline-none"
          />
          <div
            className={`${
              curatorValue ? "border-[.2rem] border-roxo-primario" : " "
            } transition-transform rounded-lg mt-[.5rem] drop-shadow-lg z-10 absolute w-[80%]`}
          >
            {curadores
              .filter((curador) => {
                const searchTerm = curatorValue.toLocaleLowerCase();
                const fullname = curador.name.toLowerCase();

                return searchTerm && fullname.startsWith(searchTerm);
              })
              .map((curador) => (
                <div
                  key={curador.id}
                  onClick={() => onClick(curador.name)}
                  className="relative text-[1.8rem]  px-[1rem] text-roxo-primario hover:bg-roxo-primario hover:text-branco-primario cursor-pointer"
                >
                  {curador.name}
                </div>
              ))}
          </div>
        </div>

        <div>
          <input
            type="text"
            value={curatorValue}
            onChange={onChange}
            className="w-[100%] rounded-full border-roxo-primario px-[1rem] border-[.2rem] h-[4rem] text-[1.8rem] text-roxo-primario focus:border-roxo-primario focus:outline-none"
          />
          <div
            className={`${
              curatorValue ? "border-[.2rem] border-roxo-primario" : " "
            } transition-transform rounded-lg mt-[.5rem] drop-shadow-lg z-10 absolute w-[80%]`}
          >
            {curadores
              .filter((curador) => {
                const searchTerm = curatorValue.toLocaleLowerCase();
                const fullname = curador.name.toLowerCase();

                return searchTerm && fullname.startsWith(searchTerm);
              })
              .map((curador) => (
                <div
                  key={curador.id}
                  onClick={() => onClick(curador.name)}
                  className="relative text-[1.8rem]  px-[1rem] bg-white text-roxo-primario hover:bg-roxo-primario hover:text-branco-primario cursor-pointer"
                >
                  {curador.name}
                </div>
              ))}
          </div>
        </div>
      </form>
    </div>
  );
};
export default ModalEnvioErros;
