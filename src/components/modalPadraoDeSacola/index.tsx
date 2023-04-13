import Image from "next/image";
import iconRobo from "../../../public/Icon_Robo.svg";
import { HiOutlineShoppingBag } from "react-icons/hi";

const ModalPadraoDeSacola = () => {
  return (
    <div className="flex flex-col w-[25%] h-screen bg-branco-primario drop-shadow-md">
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
      <form className="flex justify-center ">
        <label
          htmlFor="iva"
          className="border-roxo-primario border-[.2rem] w-[100] h-[4rem] rounded-[10rem]"
        >
          <input
            type="number"
            id="iva"
            className="bg-transparent w-[100] h-[4rem] focus:outline-lime-500 focus:outline-[.2rem] focus:rounded-full focus:bg-transparent"
          />
        </label>
        <label
          htmlFor="iva"
          className="border-roxo-primario border-[.2rem] w-[100] h-[4rem] rounded-[10rem]"
        >
          <input
            type="number"
            id="iva"
            className="bg-transparent w-[100] h-[4rem] focus:outline-lime-500 focus:outline-[.2rem] focus:rounded-full focus:bg-transparent"
          />
        </label>
        <label
          htmlFor="iva"
          className="border-roxo-primario border-[.2rem] w-[100] h-[4rem] rounded-[10rem]"
        >
          <input
            type="number"
            id="iva"
            className="bg-transparent w-[100] h-[4rem] focus:outline-lime-500 focus:outline-[.2rem] focus:rounded-full focus:bg-transparent"
          />
        </label>
        <label
          htmlFor="iva"
          className="border-roxo-primario border-[.2rem] w-[100] h-[4rem] rounded-[10rem]"
        >
          <input
            type="number"
            id="iva"
            className="bg-transparent w-[100] h-[4rem] focus:outline-lime-500 focus:outline-[.2rem] focus:rounded-full focus:bg-transparent"
          />
        </label>
        <label
          htmlFor="iva"
          className="border-roxo-primario border-[.2rem] w-[100] h-[4rem] rounded-[10rem]"
        >
          <input
            type="number"
            id="iva"
            className="bg-transparent w-[100] h-[4rem] focus:outline-lime-500 focus:outline-[.2rem] focus:rounded-full focus:bg-transparent"
          />
        </label>
        <button></button>
      </form>
    </div>
  );
};
export default ModalPadraoDeSacola;
