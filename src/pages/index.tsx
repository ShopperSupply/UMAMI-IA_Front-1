import { NextPage } from "next";
import Seo from "@/components/seo";
import Menu from "@/components/menu";
import Modal from "@/components/modal";

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="UMAMI IA"
        description="Robo de qualidade para verificação de planilhas"
      />
      <main className="bg-branco-secundario">
        <Menu />
        <Modal />
      </main>
    </>
  );
};
export default Home;
