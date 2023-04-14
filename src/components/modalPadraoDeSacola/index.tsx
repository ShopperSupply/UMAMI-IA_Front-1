import Image from "next/image";
import iconRobo from "../../../public/Icon_Robo.svg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiOutlineArrowUpTray } from "react-icons/hi2";

const ModalPadraoDeSacola = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[3rem] w-[25%] h-screen bg-branco-primario drop-shadow-md">
      <Image src={iconRobo} alt="Incone robô de qualidade Shopper" />
      <p className="text-roxo-primario text-[1.8rem] text-center">
        Você deseja alterar o padrão de sacola. Aqui está!
      </p>
      <div className="flex justify-center items-center gap-[1.5rem]">
        <HiOutlineShoppingBag color="#5F4B8B" size="3rem" />
        <p className="text-roxo-primario text-[1.8rem] text-center">
          Padrão de Sacola
        </p>
      </div>
      <form className="flex justify-center items-center flex-col gap-[1.8rem]">
        <label
          htmlFor="iva"
          className="border-roxo-primario border-[.2rem] w-[80%] h-[4rem] rounded-[10rem] flex justify-between items-center text-[1.8rem] text-roxo-primario font-semibold  px-[1rem]"
        >
          IVA
          <input
            type="number"
            id="iva"
            min="0"
            defaultValue="0"
            className="bg-transparent text-[1.8rem] text-roxo-primario w-[85%] h-[4rem] focus:outline-none text-end "
          />
        </label>
        <label
          htmlFor="peso"
          className="border-roxo-primario border-[.2rem] w-[80%] h-[4rem] rounded-[10rem] flex justify-between items-center text-[1.8rem] text-roxo-primario font-semibold  px-[1rem]"
        >
          Peso
          <input
            type="number"
            id="peso"
            min="0"
            defaultValue="200"
            className="bg-transparent text-[1.8rem] text-roxo-primario w-[85%] h-[4rem] focus:outline-none text-end "
          />
          g
        </label>
        <label
          htmlFor="altura"
          className="border-roxo-primario border-[.2rem] w-[80%] h-[4rem] rounded-[10rem] flex justify-between items-center text-[1.8rem] text-roxo-primario font-semibold  px-[1rem]"
        >
          Altura
          <input
            type="number"
            id="altura"
            min="0"
            defaultValue="17"
            className="bg-transparent text-[1.8rem] text-roxo-primario w-[85%] h-[4rem] focus:outline-none text-end "
          />
          cm
        </label>
        <label
          htmlFor="largura"
          className="border-roxo-primario border-[.2rem] w-[80%] h-[4rem] rounded-[10rem] flex justify-between items-center text-[1.8rem] text-roxo-primario font-semibold  px-[1rem]"
        >
          Largura
          <input
            type="number"
            id="largura"
            min="0"
            defaultValue="5"
            className="bg-transparent text-[1.8rem] text-roxo-primario w-[85%] h-[4rem] focus:outline-none text-end "
          />
          cm
        </label>
        <label
          htmlFor="comprimento"
          className="border-roxo-primario border-[.2rem] w-[80%] h-[4rem] rounded-[10rem] flex justify-between items-center text-[1.8rem] text-roxo-primario font-semibold  px-[1rem]"
        >
          Comprimento
          <input
            type="number"
            id="comprimento"
            min="0"
            defaultValue="40"
            className="bg-transparent text-[1.8rem] text-roxo-primario w-[85%] h-[4rem] focus:outline-none text-end "
          />
          cm
        </label>

        <button
          className="p-[1.5rem] bg-roxo-primario rounded-full drop-shadow-md"
          title="Enviar"
        >
          <HiOutlineArrowUpTray color="#FFFFFF" size="2.7rem" />
        </button>
      </form>
    </div>
  );
};
export default ModalPadraoDeSacola;
