import { useModal } from "@/providers/modaisProvider";
import Modal from "../modal";
import Icon_Robo from "../../../public/Icon_Robo.svg";
import Image from "next/image";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const ModalEnvioPlanilha = () => {
  const { isOpen } = useModal();

  return (
    <div
      className={`w-[25%] h-screen bg-branco-primario flex flex-col justify-around items-center z-10`}
    >
      <Image src={Icon_Robo} alt=""></Image>
      <p className="text-roxo-primario text-xl">
        Preciso de mais informações antes de validar a planilha.
      </p>
      <div className="flex flex-col w-3/4 items-center">
        <div>
          <input
            className="p-2 border border-roxo-primario rounded"
            type="text"
            placeholder="Curador Responsável"
          />
        </div>
        <div className="flex">
          <input
            className="p-2 w-1/2 border border-roxo-primario rounded"
            type="text"
            placeholder="Cliente"
          />
          <input
            className="p-2 w-1/2 border border-roxo-primario rounded"
            type="text"
            placeholder="Shopping"
          />
        </div>
        <div className="flex">
          <input
            className="p-2 w-1/3 border border-roxo-primario rounded"
            type="text"
            placeholder="ABBR"
          />
          <input
            className="p-2 w-2/3 border border-roxo-primario rounded"
            type="text"
            placeholder="Loja"
          />
        </div>
      </div>

      {/* <!-- Seção 3 --> */}
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
  );
};
export default ModalEnvioPlanilha;
