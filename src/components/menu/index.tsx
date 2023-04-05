import Image from "next/image";
import { HiOutlineUserGroup } from "react-icons/hi";

const Menu = () => {
  return (
    <div className="fixed w-[21.2rem] h-screen drop-shadow-xl">
      <h1>Shopper Supplay</h1>
      <ul>
        <li>
          <HiOutlineUserGroup color="#5F4B8B" />
          Curadores
        </li>
        <li>
          <Image src="" alt="" />
          Qualidade
        </li>
        <li>
          <Image src="" alt="" />
          Permissoes
        </li>
        <li>
          <Image src="" alt="" />
          Erros
        </li>
      </ul>
      <div>
        <label
          htmlFor="dropzone-file"
          className="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-roxo-primario p-6 text-center"
        >
          <h2 className="mt-4 text-xl text-roxo-primario font-medium tracking-wide">
            Revisar planilha
          </h2>
          <p className="mt-2 tracking-wide">
            Arraste e soute ou clique, para enviar uma planilha para revisão.
          </p>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
        <ul>
          <li>
            <Image src="" alt="" />
            Padrão de Sacola
          </li>
          <li>
            <Image src="" alt="" />
            Help
          </li>
          <div>
            <input type="checkbox" />
            <button>User</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
