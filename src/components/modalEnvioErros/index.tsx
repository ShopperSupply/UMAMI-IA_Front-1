import Image from "next/image";
import iconRobo from "../../../public/Icon_Robo.svg";
import Select, { OptionTypeBase } from "react-select";
import { useState } from "react";

const ModalEnvioErros = () => {
  // esse modal precisa receber um provider com um array com todos os curadores ativos, erros de QA, Cliente, Shopping, ABBR e Loja.

  interface Icurador {
    id: number;
    name: string;
    level: number;
  }

  interface Ioptions {
    id: number;
    name: string;
    label: string;
  }

  const curadores: Icurador[] = [
    {
      id: 1,
      name: "Alex Lanção",
      level: 2,
    },
    {
      id: 2,
      name: "Alonso",
      level: 2,
    },
    {
      id: 3,
      name: "Raquel",
      level: 2,
    },
    {
      id: 4,
      name: "Thais",
      level: 2,
    },
    {
      id: 5,
      name: "Alex Lanção",
      level: 2,
    },
    {
      id: 6,
      name: "Alonso",
      level: 2,
    },
    {
      id: 7,
      name: "Raquel",
      level: 2,
    },
    {
      id: 8,
      name: "Thais",
      level: 2,
    },
  ];

  const [selectedOption, setSelectedOption] = useState<object>();

  const options: Ioptions[] = curadores.map((curador: Icurador) => ({
    id: curador.id,
    name: curador.name,
    label: curador.name,
  }));

  const handleChange = (selectedOption: OptionTypeBase) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-[3rem] w-[25%] h-screen bg-branco-primario drop-shadow-md">
      <Image src={iconRobo} alt="Incone robô de qualidade Shopper" />
      <p className="text-roxo-primario text-[1.8rem] text-center">
        Aqui você pode cadastrar um ou mais erros, tenha certeza de que todas as
        informações estão corretas.
      </p>
      <form className="flex flex-col justify-center items-center w-[85%]">
        {/* <select className="text-[1.8rem] w-[100%] h-[4rem] rounded-full px-[1rem] border-roxo-primario border-[.2rem] focus:outline-none text-roxo-primario">
            <option value="defult" >Curador responsavel</option>
          {curadores.map((curador, index) => (
            <option key={index} className="text-[1.8rem]">
              {curador.name}
            </option>
          ))}
        </select> */}
        <Select
          options={options}
          onChange={handleChange}
          className="w-[100%] rounded-full border-roxo-primario border-[.2rem] h-[4rem] text-[1.8rem] text-roxo-primario "
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              background: "none",
              borderColor: state.isFocused ? "transparent" : "transparent",
              outlineColor:
                state.isFocused || state.
                  ? "transparent"
                  : "transparent",
            }),
          }}
        />
      </form>
    </div>
  );
};
export default ModalEnvioErros;
