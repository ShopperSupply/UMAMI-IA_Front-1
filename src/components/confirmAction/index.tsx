import Image from "next/image";
import Icon_Robo from "../../../public/Icon_Robo.svg";
import { IConfirmAction } from "@/interfaces/form";

const ConfirmAction = ({ message }: IConfirmAction) => {
  return (
    <div className="bg-branco secundario">
      <div>
        <Image src={Icon_Robo} alt="Supp" />
        <h4>Supp</h4>
      </div>
      <p>{message}</p>
      <div>
        <button>Sim</button>
        <button>Não</button>
      </div>
    </div>
  );
};

export default ConfirmAction;
