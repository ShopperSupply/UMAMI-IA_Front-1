import { IFormLogin } from "@/interfaces/form";
import { createContext, useContext, useEffect, useState } from "react";

interface IUserProvider {
  children: React.ReactNode;
}

interface IUserContext {
  user?: IFormLogin;
  setUser: (user: IFormLogin) => void;

  token?: string;
  setToken: (token: string) => void;

  auth: boolean;
  setAuth: (auth: boolean) => void;
}

const ModalContext = createContext<IUserContext>({
  user: {
    username: "",
    email: "",
    password: "",
  },
  setUser: () => {},

  token: "",
  setToken: () => {},

  auth: false,
  setAuth: () => {},
});

export const UserProvider = ({ children }: IUserProvider) => {

  
  const [user, setUser] = useState<IFormLogin>({ password: "" });
  const [token, setToken] = useState<string>();
  const [auth, setAuth] = useState<boolean>(false);
  
  useEffect(()=>{
    setToken(sessionStorage.getItem("UMAMI@TOKEN") || "")
    token ? setAuth(true) : setAuth(false);
  },[token])


  return (
    // setContent é utilizado para definir qual componente deverar ser exibido quando o modal for aberto.
    <ModalContext.Provider
      value={{
        user,
        setUser,

        token,
        setToken,

        auth,
        setAuth,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useUser = () => useContext(ModalContext);
