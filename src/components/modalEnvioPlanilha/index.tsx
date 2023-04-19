import { IFormEnvioError } from "@/interfaces/form";
import { useModal } from "@/providers/modaisProvider";
import { useData } from "@/providers/dataProvider";
import Icon_Robo from "../../../public/Icon_Robo.svg";
import Image from "next/image";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ModalEnvioPlanilha = () => {
  const { curators, places, errorsTypes, addError } = useData();
  const { hideModal } = useModal();

  const schema = yup.object().shape({
    curator: yup.string().required("Campo Obrigatório"),
    error_type: yup.string().required("Campo Obrigatório"),
    client: yup.string().required("Campo Obrigatório"),
    abbr: yup
      .string()
      .required("Campo obrigatório")
      .max(3, "A abreviação do projeto precisa ter 3 caracteres"),
    mall: yup.string().required("Campo Obrigatório"),
    place: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormEnvioError>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormEnvioError> = (data) => {
    const findCurator = () => {
      const curator = curators.find(
        (curador) => curador.name?.toLowerCase() == data.curator.toLowerCase()
      );

      return curator?.id;
    };
    const idCurator = findCurator();

    // if (errorType) {
    //   const body: IErrorLog = {
    //     error_type: errorType,
    //     coor: data.coor,
    //     sheet: data.sheet
    //   }

    //   addError(body)
  };

  return (
    <>
      <div
        className={`w-[25%] h-screen bg-branco-primario flex flex-col justify-around items-center z-10`}
      >
        <Image src={Icon_Robo} alt="Supp"></Image>
        <p className="text-roxo-primario text-xl">
          Preciso de mais informações antes de validar a planilha.
        </p>
        <div
          className={`flex flex-col justify-center items-center w-[90%] ${
            errors ? "gap-2" : "gap-4"
          }`}
        >
          <label className="w-[80%]">
            <input
              {...register("curator")}
              list="curatores"
              placeholder={
                errors.curator ? "Insira o curador responsavel" : "Alex Lanção"
              }
              title="Curador"
              className={`w-[100%] rounded-full ${
                errors.curator
                  ? "border-red-600 focus:border-red-700"
                  : "border-roxo-primario"
              } px-[1rem] border-[.2rem] h-[4rem] text-[1.8rem] text-roxo-primario focus:border-roxo-primario focus:outline-none`}
            />
            {errors.curator && (
              <span className="text-red-600 pl-5">
                {errors.curator.message}
              </span>
            )}
            <datalist id="curatores">
              {curators.map((curator) => {
                return <option key={curator.id} value={curator.name} />;
              })}
            </datalist>
          </label>
          <div className="flex felx-col w-[80%] gap-2">
            <label className="flex flex-col w-[70%]">
              <input
                {...register("client")}
                list="client"
                placeholder="ALSO"
                title="Cliente"
                className={`text-center w-[100%] rounded-full ${
                  errors.client
                    ? "border-red-600 focus:border-red-700"
                    : "border-roxo-primario"
                } px-[1rem] border-[.2rem] h-[4rem] text-[1.8rem] text-roxo-primario focus:border-roxo-primario focus:outline-none`}
              />
              {errors?.client && (
                <span className="text-red-600 pl-5">
                  {errors.client.message}
                </span>
              )}
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
            </label>
            <label className="flex flex-col w-[50%]">
              <input
                {...register("abbr")}
                list="abbr"
                placeholder="SDB"
                title="Abreviação do projeto"
                className={`text-center w-[100%] rounded-full ${
                  errors.abbr
                    ? "border-red-600 focus:border-red-700"
                    : "border-roxo-primario"
                } px-[1rem] border-[.2rem] h-[4rem] text-[1.8rem] text-roxo-primario focus:border-roxo-primario focus:outline-none`}
              />
              {errors?.abbr && (
                <span className="text-red-600 pl-5">{errors.abbr.message}</span>
              )}
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
            </label>
          </div>
          <div className="flex felx-col w-[80%] gap-2">
            <label className="flex flex-col w-[50%]">
              <input
                {...register("mall")}
                list="mall"
                placeholder="Shopping da Bahia"
                title="Shopping"
                className={`text-center w-[100%] rounded-full ${
                  errors.mall
                    ? "border-red-600 focus:border-red-700"
                    : "border-roxo-primario"
                } px-[1rem] border-[.2rem] h-[4rem] text-[1.8rem] text-roxo-primario focus:border-roxo-primario focus:outline-none`}
              />
              {errors?.mall && (
                <span className="text-red-600 pl-5">{errors.mall.message}</span>
              )}
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
            </label>
            <label className="flex flex-col w-[50%]">
              <input
                {...register("place")}
                list="place"
                placeholder="Ri Happy"
                title="Loja"
                className={`text-center w-[100%] rounded-full ${
                  errors.place
                    ? "border-red-600 focus:border-red-700"
                    : "border-roxo-primario"
                } px-[1rem] border-[.2rem] h-[4rem] text-[1.8rem] text-roxo-primario focus:border-roxo-primario focus:outline-none`}
              />
              {errors?.place && (
                <span className="text-red-600 pl-5">
                  {errors.place.message}
                </span>
              )}
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
            </label>
          </div>
        </div>
        <div className="">
          <div className="flex">
            <HiOutlineShoppingBag color="#5F4B8B" />
            <h2 className="text-lg text-roxo-primario font-semibold">
              Padrão de Sacola
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-roxo-primario text-opacity-35">IVA</p>
              <p className="text-roxo-primario text-opacity-35">Peso</p>
              <p className="text-roxo-primario text-opacity-35">Altura</p>
              <p className="text-roxo-primario text-opacity-35">Largura</p>
              <p className="text-roxo-primario text-opacity-35">Comprimento</p>
            </div>
            <div>
              <p className="text-roxo-primario text-opacity-35">IVA</p>
              <p className="text-roxo-primario text-opacity-35">Peso</p>
              <p className="text-roxo-primario text-opacity-35">Altura</p>
              <p className="text-roxo-primario text-opacity-35">Largura</p>
              <p className="text-roxo-primario text-opacity-35">Comprimento</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <div className="w-15 h-6 shadow-lg rounded">Manual</div>
          <div className="w-15 h-6 bg-roxo-primario rounded">Sistemica</div>
        </div>
      </div>
    </>
  );
};
export default ModalEnvioPlanilha;
