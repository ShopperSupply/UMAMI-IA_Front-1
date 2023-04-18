import Image from "next/image";
import iconRobo from "../../../public/Icon_Robo.svg";
import { useData } from "@/providers/dataProvider";
import { HiArrowCircleUp, HiXCircle } from "react-icons/hi";


const ModalEnvioErros = () => {
  const {curators, places, errors, addError} =useData() 
  return (
    <div className="flex flex-col justify-center items-center gap-[3rem] w-[25%] h-screen bg-branco-primario drop-shadow-md px-5">
      <Image src={iconRobo} alt="Incone robô de qualidade Shopper" />
      <p className="text-roxo-primario text-[1.8rem] text-center">
        Aqui você pode cadastrar um ou mais erros, tenha certeza de que todas as
        informações estão corretas.
      </p>
      <form className="flex flex-col justify-center items-center w-[90%] gap-4">
        <label className="w-[100%]">
          <input
            list="curatores"
            placeholder="Alex Lanção"
            title="Curador"
            className="w-[100%] rounded-full border-roxo-primario px-[1rem] border-[.2rem] h-[4rem] text-[1.8rem] text-roxo-primario focus:border-roxo-primario focus:outline-none"
          />
          <datalist id="curatores">
            {curators.map((curator) => {
              return <option key={curator.id} value={curator.name} />;
            })}
          </datalist>
        </label>

        <label className="w-[100%]">
          <input
            list="errorTypes"
            placeholder="CODIGO | Codigo Fora do padrão"
            title="Erro cometido"
            className="w-[100%] rounded-full border-roxo-primario px-[1rem] border-[.2rem] h-[4rem] text-[1.8rem] text-roxo-primario focus:border-roxo-primario focus:outline-none"
          />
          <datalist id="errorTypes">
            {errors.map((error) => {
              return (
                <option
                  key={error.error_type?.id}
                  value={`${error.error_type?.group} | ${error.error_type?.title}`}
                />
              );
            })}
          </datalist>
        </label>
        <div className="flex w-[100%] gap-2">
          <input
            placeholder="A8"
            title="Coordenada onde o erro foi encontrado"
            className="text-center w-[45%] rounded-full border-roxo-primario px-[1rem] border-[.2rem] h-[4rem] text-[1.8rem] text-roxo-primario focus:border-roxo-primario focus:outline-none"
          />
          <label className="w-[100%]">
            <input
              list="sheet"
              placeholder="SKU"
              title="Pagina onde o erro foi encontrado"
              className=" text-center w-[100%] rounded-full border-roxo-primario px-[1rem] border-[.2rem] h-[4rem] text-[1.8rem] text-roxo-primario focus:border-roxo-primario focus:outline-none"
            />
            <datalist id="sheet">
              <option value="SKU">Skus</option>
              <option value="PROD">Produto</option>
              <option value="ESPT">Especificações</option>
            </datalist>
          </label>
        </div>
        <fieldset className="flex flex-col gap-4 mt-10">
          <div className="flex w-[100%] gap-2">
            <input
              list="client"
              placeholder="ALSO"
              title="Cliente"
              className="text-center w-[100%] rounded-full border-roxo-primario px-[1rem] border-[.2rem] h-[4rem] text-[1.8rem] text-roxo-primario focus:border-roxo-primario focus:outline-none"
            />
            <datalist id="client">
              {places
                .reduce((clientesUnicos: any, item) => {
                  if (!clientesUnicos.includes(item.client)) {
                    clientesUnicos.push(item.client);
                  }
                  return clientesUnicos;
                }, [])
                .map((place: string, index: number) => {
                  return <option key={index} value={place} />;
                })}
            </datalist>
            <input
              list="abbr"
              placeholder="SDB"
              title="Abreviação do projeto"
              className="text-center w-[50%] rounded-full border-roxo-primario px-[1rem] border-[.2rem] h-[4rem] text-[1.8rem] text-roxo-primario focus:border-roxo-primario focus:outline-none"
            />
            <datalist id="abbr">
              {places
                .reduce((clientesUnicos: any, item) => {
                  if (!clientesUnicos.includes(item.abbr)) {
                    clientesUnicos.push(item.abbr);
                  }
                  return clientesUnicos;
                }, [])
                .map((place: string, index: number) => {
                  return <option key={index} value={place} />;
                })}
            </datalist>
          </div>
          <div className="flex felx-col w-[100%] gap-2">
            <input
              list="mall"
              placeholder="Shopping da Bahia"
              title="Shopping"
              className="text-center w-[100%] rounded-full border-roxo-primario px-[1rem] border-[.2rem] h-[4rem] text-[1.8rem] text-roxo-primario focus:border-roxo-primario focus:outline-none"
            />
            <datalist id="mall">
              {places
                .reduce((clientesUnicos: any, item) => {
                  if (!clientesUnicos.includes(item.mall)) {
                    clientesUnicos.push(item.mall);
                  }
                  return clientesUnicos;
                }, [])
                .map((place: string, index: number) => {
                  return <option key={index} value={place} />;
                })}
            </datalist>
            <input
              list="place"
              placeholder="Ri Happy"
              title="Loja"
              className="text-center w-[100%] rounded-full border-roxo-primario px-[1rem] border-[.2rem] h-[4rem] text-[1.8rem] text-roxo-primario focus:border-roxo-primario focus:outline-none"
            />
            <datalist id="place">
              {places
                .reduce((clientesUnicos: any, item) => {
                  if (!clientesUnicos.includes(item.name)) {
                    clientesUnicos.push(item.name);
                  }
                  return clientesUnicos;
                }, [])
                .map((place: string, index: number) => {
                  return <option key={index} value={place} />;
                })}
            </datalist>
          </div>
        </fieldset>

        <div>
          <button type="submit" title="Enviar" className="pt-16 drop-shadow-md">
            <HiArrowCircleUp color="#5F4B8B" size="7rem" />
          </button>
          <button title="Fechar" className="pt-16 drop-shadow-md">
            <HiXCircle color="#5F4B8B" size="7rem" />
          </button>
        </div>
      </form>
    </div>
  );
};
export default ModalEnvioErros;
