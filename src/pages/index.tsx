import { NextPage } from "next";
import Seo from "@/components/seo";

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="UMAMI IA"
        description="Robo de qualidade para verificação de planilhas"
      />
      <main className=" flex justify-center items-center w-screen h-screen bg-pink-500 first-letter ">
        <h1 className="text-Roxo1 text-[4rem] font-bold underline">Hello world!</h1>
      </main>
    </>
  );
};
export default Home;
