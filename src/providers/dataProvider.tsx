import { createContext, useContext, useState } from "react";
import {IErrorResponse} from "../interfaces/errors"
import { ICurator } from "../interfaces/people"; 
import { IPlace } from "../interfaces/place"; 

interface IDataProvider {
  children: React.ReactNode;
}
interface IDataContext {
  errorsTypes: IErrorResponse[]
  addError: (newError: IDataProvider) => void;

  curators: ICurator[],

  places: IPlace[],
}

const DataContext = createContext<IDataContext>({
  errorsTypes: [{}],
  addError: () => {},

  curators: [{}],
  places: [{}]
});

export const DataProvider = ({ children }: IDataProvider) => {
  const [errorsTypes, setErrors] = useState([{}]);
  const [curators, setCurators] = useState([{}])
  const [places, setPlace] = useState([{}])

  const addError = (newError: IDataProvider) => {
    setErrors([...errorsTypes, newError]);
  };

  return (
    <DataContext.Provider
      value={{
        errorsTypes,
        addError,

        curators,

        places
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
