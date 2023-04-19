import { HiCheck, HiDownload, HiPlus, HiOutlineTrash } from "react-icons/hi";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { useData } from "@/providers/dataProvider";
import { useModal } from "@/providers/modaisProvider";
import ModalEnvioErros from "../modalEnvioErros";


const ModalAprovacaoErros = () => {
  const { errorsTypes, addError } = useData();
  const { showModal, setContent } = useModal();

  return (
    <div className={`flex flex-row-reverse ${errorsTypes ? "hidden" : ""} `}>
      <div className=" flex flex-col justify-between items-center w-[25%] h-screen bg-branco-primario drop-shadow-md">
        <div className="overflow-y-auto flex flex-col w-[100%] text-roxo-primario text-[1.2rem] font-semibold">
          {errorsTypes?.map((error, i) => {
            return (
              <div
                className="flex justify-between items-center bg-branco-secundario p-5 my-2 mx-4 rounded-md"
                key={i}
              >
                <div
                  className={`rounded-full shadow-inner bg-severity-${error.error_type?.severity} w-[2.3rem] h-[2.3rem]`}
                  title={`Erro de relevancia ${error.error_type?.severity}`}
                ></div>
                <div className="text-center">
                  <p>{error.sheet}</p>
                  <p>{error.coor}</p>
                </div>
                <p className="w-[60%] text-center">{error.error_type?.title}</p>
                <HiOutlineTrash size="2rem" className="cursor-pointer" />
              </div>
            );
          })}
        </div>
        <div className="flex items-center content-center justify-center w-[100%] py-6 gap-3">
          <div className="drop-shadow-md rounded-full font-bold bg-branco-primario text-roxo-primario p-4 cursor-pointer">
            <HiArrowUturnLeft size="2rem" fontWeight="900" />
          </div>
          <div onClick={() => {
            showModal();
            setContent(ModalEnvioErros)
          }} className="drop-shadow-md rounded-full bg-roxo-primario text-branco-primario p-4 cursor-pointer">
            <HiPlus size="2rem" />
          </div>
          <div className="drop-shadow-md rounded-full bg-roxo-primario text-branco-primario p-4 cursor-pointer">
            <HiCheck size="2rem" />
          </div>
          <div className="drop-shadow-md rounded-full bg-branco-primario text-roxo-primario p-4 cursor-pointer">
            <HiDownload size="2rem" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAprovacaoErros;
