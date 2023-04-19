import { createContext, useContext, useState } from "react";
import { IErrosTypes, IErroLogBody, IErrorLog } from "../interfaces/errors";
import { ICurator } from "../interfaces/people";
import { IPlace } from "../interfaces/place";
import { IBag } from "@/interfaces/bagpattern";

interface IDataProvider {
  children: React.ReactNode;
}
interface IDataContext {
  errorsTypes: IErrosTypes[];
  errorsLog: IErrorLog[];
  addError: (newError: IErrorLog) => void;

  curators: ICurator[];
  currentCurator: ICurator;
  setCurrentCurator: (curator: ICurator) => void;

  places: IPlace[];
  currentPlace: IPlace;
  setCurrentPlace: (place: IPlace) => void;

  currentBagPattern: IBag;
  setCurrentBagPattern: (bag: IBag) => void;

  excelFile: File | null;
  setExcelFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const DataContext = createContext<IDataContext>({
  errorsTypes: [
    {
      id: 0,
      group: "",
      title: "",
      description: "",
      severity: 0,
      collector: "",
    },
  ],
  errorsLog: [{}],
  addError: () => {},

  curators: [{}],
  currentCurator: {},
  setCurrentCurator: () => {},

  places: [{}],
  currentPlace: {},
  setCurrentPlace: () => {},

  currentBagPattern: {},
  setCurrentBagPattern: () => {
    {
    }
  },

  excelFile: null,
  setExcelFile: () => {},
});

export const DataProvider = ({ children }: IDataProvider) => {
  const [errorsTypes, setErrors] = useState([]);
  const [errorsLog, setErrorsLog] = useState([{}]);
  const [curators, setCurators] = useState([{}]);
  const [places, setPlace] = useState([{}]);

  const [currentCurator, setCurrentCurator] = useState({});
  const [currentPlace, setCurrentPlace] = useState({});
  const [currentBagPattern, setCurrentBagPattern] = useState<IBag>({
    iva: 0,
    width: 5,
    height: 17,
    weight: 200,
    length: 40,
  });
  const [excelFile, setExcelFile] = useState<File | null>(null);

  const addError = (newError: IErrorLog) => {
    setErrorsLog([...errorsLog, newError]);
  };

  return (
    <DataContext.Provider
      value={{
        errorsTypes,
        errorsLog,
        addError,

        curators,
        currentCurator,
        setCurrentCurator,

        places,
        currentPlace,
        setCurrentPlace,

        currentBagPattern,
        setCurrentBagPattern,

        excelFile,
        setExcelFile
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
