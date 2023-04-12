import { NextPage } from "next";
import Seo from "@/components/seo";
import Menu from "@/components/menu";
import { useState } from "react";
import Modal from "@/components/modal";
import { useModal } from "@/providers/modaisProvider";

const Home: NextPage = () => {
 
  
  
  return (
    <>
      <Seo
        title="UMAMI IA"
        description="Robo de qualidade para verificação de planilhas"
      />
      <main className="bg-branco-secundario">
        <Menu />
        
      </main>
    </>
  );
};
export default Home;
