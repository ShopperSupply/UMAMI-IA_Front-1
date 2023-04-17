import { createContext, useContext, useState } from "react";

interface IdataProvider {
  children: React.ReactNode;
}

interface IdataContext {
  errors: [
    error_type: {
      id: number;
      group: string;
      title: string;
      description: string;
      severity: number;
      collector: string;
    },
    coor: string,
    sheet: string
  ];
  addError: {
    error_type: {
      id: number;
      group: string;
      title: string;
      description: string;
      severity: number;
      collector: string;
    };
    coor: string;
    sheet: string;
  };
}

const dataContext = createContext<IdataContext>({
  errors: [],
  addError: {
    error_type: {
      id: 0,
      group: "",
      title: "",
      description: "",
      severity: 0,
      collector: "",
    },
    coor: "",
    sheet: "",
  },
});

export const DataProvider = ({ children }: IdataProvider) => {
  const [errors, setErrors] = useState([{}]);

  const addError = (newError: IdataProvider) => {
    setErrors([...errors, newError]);
  };

  return (
    // setContent é utilizado para definir qual componente deverar ser exibido quando o data for aberto.
    <dataContext.Provider
      value={{
        errors: {
          error_type: {
            id: 0,
            group: "",
            title: "",
            description: "",
            severity: 0,
            collector: "",
          },
          coor: "",
          sheet: "",
        },
        addError: {
          error_type: {
            id: 0,
            group: "",
            title: "",
            description: "",
            severity: 0,
            collector: "",
          },
          coor: "",
          sheet: "",
        },
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export const useData = () => useContext(dataContext);
