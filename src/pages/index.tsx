import { NextPage } from "next";
import Seo from "@/components/seo";
import Menu from "@/components/menu";
import Modal from "@/components/modal";
import ModalAprovacaoErros from "@/components/modalAprovacaoErros";
import ConfirmAction from "@/components/confirmAction";

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
        <ModalAprovacaoErros />
        <ConfirmAction message="O canal de venda informado, ainda não está cadastrado, deseja realizar um novo cadastro?" />
      </main>
    </>
  );
};
export default Home;
