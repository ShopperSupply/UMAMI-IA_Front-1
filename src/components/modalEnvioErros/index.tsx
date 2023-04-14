import Image from "next/image";
import iconRobo from "../../../public/Icon_Robo.svg";
import Select, { SingleValue } from "react-select";
import OptionTypeBase from "react-select";
import { useState } from "react";
import { curadores, errosTypes, places } from "./db";

const ModalEnvioErros = () => {
  // esse modal precisa receber um provider com um array com todos os curadores ativos, erros de QA, Cliente, Shopping, ABBR e Loja.

  interface IoptionsEerrosTypes {
    id: number;
    group: string;
    title: string;
    description: string;
    severity: number;
    collector: string;
    label: string;
  }
  interface IoptionsCuradores {
    id: number;
    name: string;
    label: string;
  }

  interface IoptionsPlaces {
    id: string;
    client: string;
    mall: string;
    abbr: string;
    name: string;
    is_active: boolean;
    label: string;
  }

  const [selectedOptionState, setSelectedOptionState] = useState<
    IoptionsEerrosTypes[] | IoptionsCuradores[] | IoptionsPlaces[] | null
  >([]);

  // Funções responsaveis com formatar o objeto e adicionar o campo label.
  const optionsCuradores: IoptionsCuradores[] = curadores.map((curador) => ({
    ...curador,
    label: curador.name,
  }));

  const optionsPlacesCliente: IoptionsPlaces[] = places.map((place) => ({
    ...place,
    label: place.client,
  }));
   const optionsPlacesProject: IoptionsPlaces[] = places.map((place) => ({
     ...place,
     label: place.abbr,
   }))

  const optionsErrosTypes: IoptionsEerrosTypes[] = errosTypes.map((error) => ({
    ...error,
    label: `${error.group} | ${error.title}`,
  }));

  const handleChange = (
    selectedOption: SingleValue<
      IoptionsEerrosTypes | IoptionsCuradores | IoptionsPlaces
    >
  ) => {
    setSelectedOptionState(banana => [...banana, selectedOption]);
    return true;
  };
  console.log(selectedOptionState);
  return (
    <div className="flex flex-col justify-center items-center gap-[3rem] w-[25%] h-screen bg-branco-primario drop-shadow-md">
      <Image src={iconRobo} alt="Incone robô de qualidade Shopper" />
      <p className="text-roxo-primario text-[1.8rem] text-center">
        Aqui você pode cadastrar um ou mais erros, tenha certeza de que todas as
        informações estão corretas.
      </p>
      <form className="flex flex-col justify-center items-center w-[85%]">
        <Select
          options={optionsCuradores}
          onChange={handleChange}
          className="w-[100%] rounded-full border-roxo-primario border-[.2rem] h-[4rem] text-[1.8rem] text-roxo-primario before:border-none after:border-none hover:none"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              background: "transparent",
              border: 0,
              boxShadow: "none",
            }),
          }}
        />
        <Select
          options={optionsErrosTypes}
          onChange={handleChange}
          className="w-[100%] rounded-full border-roxo-primario border-[.2rem] h-[4rem] text-[1.8rem] text-roxo-primario before:border-none after:border-none hover:none"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              background: "none",
              border: 0,
              boxShadow: "none",
            }),
          }}
        />
        <fieldset>
          <Select
            options={optionsPlacesCliente}
            onChange={handleChange}
            className="w-[100%] rounded-full border-roxo-primario border-[.2rem] h-[4rem] text-[1.8rem] text-roxo-primario before:border-none after:border-none hover:none"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                background: "none",
                border: 0,
                boxShadow: "none",
              }),
            }}
          />
        </fieldset>
      </form>
    </div>
  );
};
export default ModalEnvioErros;
