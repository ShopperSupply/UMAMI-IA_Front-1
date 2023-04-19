import { NextPage } from "next";
import Image from "next/image";
import Seo from "@/components/seo";
import icon_Robo from "../../public/Icon_Robo.svg"

const Login: NextPage = () => {
  return (
    <>
      <Seo
        title="UMAMI IA"
        description="Robo de qualidade para verificação de planilhas"
      />
      <main className="bg-branco-secundario h-screen flex justify-between">
        <div className="flex flex-col justify-center items-center w-[65%] px-[10%]">
          <Image
            src={icon_Robo}
            alt="Mascote qualidade Shopper"
            className="w-[25%] pb-[3rem] drop-shadow-xl"
          />
          <h1 className="text-[4rem] font-bold text-roxo-secundario drop-shadow-sm">
            OLA ME CHAMO{" "}
            <span className="text-severity-2 cursor-pointer drop-shadow-sm hover:animate-pulse">
              SUPP
            </span>
          </h1>
          <h2 className="text-[3.5rem] font-bold text-center text-roxo-secundario drop-shadow-sm ">
            ROBÔ QUE AUXILIA NA QUALIDADE SHOPPER SUPPLY
          </h2>
        </div>
        <div className="bg-branco-primario w-[35%] drop-shadow-lg flex flex-col justify-end items-center ">
          <form className="w-[100%] pb-[50%] flex flex-col justify-around items-center gap-5">
            <input
              type="email"
              placeholder="exemplo@mail.com"
              className="w-[60%] rounded-full border-roxo-primario px-[1rem] border-[.2rem] h-[4rem] text-[1.8rem] text-roxo-primario focus:border-roxo-primario focus:outline-none"
            />
            <input
              type="password"
              placeholder="senha"
              className="w-[60%] rounded-full border-roxo-primario px-[1rem] border-[.2rem] h-[4rem] text-[1.8rem] text-roxo-primario focus:border-roxo-primario focus:outline-none"
            />
            <button className="bg-roxo-primario text-branco-primario text-[1.5rem] px-8 py-3 rounded-full ">
              Entrar
            </button>
          </form>
            <span>© 2023 Shopper Supply™ - Todos os direitos reservados.</span>
        </div>
      </main>
    </>
  );
};
export default Login;
