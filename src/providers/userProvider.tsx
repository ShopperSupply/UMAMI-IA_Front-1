import { createContext, useContext, useState } from "react";

interface IUserProvider {
  children: React.ReactNode;
}

interface IUserContext {
  
}

const ModalContext = createContext<IUserContext>({
 
});

export const ModalProvider = ({ children }: IUserProvider) => {
  //token

  //função de login - chamar o service.post.login e passar e o retorno disso vai virar token

  //user data (nome, email, username e o resto que tem em user na request)

  //função de logout - por enquanto nao

 

  return (
    // setContent é utilizado para definir qual componente deverar ser exibido quando o modal for aberto.
    <ModalContext.Provider
      value={{
        
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
