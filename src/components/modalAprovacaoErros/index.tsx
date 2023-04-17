import Image from "next/image";
import iconRobo from "../../../public/Icon_Robo.svg";
import { HiCheck, HiDownload, HiPlus, HiOutlineTrash } from "react-icons/hi";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { errors } from "./db";
import { useModal } from "@/providers/modaisProvider";

const ModalAprovacaoErros = () => {
  return (
    <div
      className={`flex flex-row-reverse ${errors.length > 0 ? "" : "hidden"}`}
    >
      <div className="p-4 flex flex-col justify-center items-center gap-[3rem] w-[25%] h-screen bg-branco-primario drop-shadow-md">
        <div className="overflow-y-auto flex flex-col h-[90vh] w-[100%]">
          {errors?.map((erro, i) => {
            return (
              <div className="flex" key={i}>
                <div
                  className={`rounded-full bg-severity-2 w-[2.3rem] h-[2.3rem]`}
                ></div>
                <div>
                  <p>{erro.sheet}</p>
                  <p>{erro.coor}</p>
                </div>
                <p>{erro.error_type.title}</p>
                <HiOutlineTrash />
              </div>
            );
          })}
        </div>
        <div className="flex">
          <div className="drop-shadow-md rounded-full font-bold bg-branco-primario text-roxo-primario p-4 cursor-pointer">
            <HiArrowUturnLeft size="2rem" fontWeight="900" />
          </div>
          <div className="drop-shadow-md rounded-full bg-roxo-primario text-branco-primario p-4 cursor-pointer">
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
      <div className="h-screen w-3/4 backdrop-blur-sm bg-black bg-opacity-25"></div>
    </div>
  );
};
export default ModalAprovacaoErros;
