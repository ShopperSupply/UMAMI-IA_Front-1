import { createContext, useContext, useEffect, useState } from "react";
import { IErrosTypes, IErroLogBody, IErrorLog } from "../interfaces/errors";
import { ICurator } from "../interfaces/people";
import { IPlace } from "../interfaces/place";
import { IBag } from "@/interfaces/bagpattern";
import { getCurators, getErrorTypes } from "@/services/get";
import { useUser } from "./userProvider";

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

  excelFile: Blob | null;
  setExcelFile: React.Dispatch<React.SetStateAction<Blob | null>>;
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
  const [errorsTypes, setErrors] = useState([
    {
      id: 0,
      group: "",
      title: "",
      description: "",
      severity: 0,
      collector: "",
    },
  ]);
  const [errorsLog, setErrorsLog] = useState<IErrorLog[]>([]);
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
  const [excelFile, setExcelFile] = useState<Blob | null>(null);
  const { token, auth } = useUser();

  useEffect(() => {
    if (auth) {
      getCurators(token || "", setCurators);
      getErrorTypes(token || "", setErrors);
    }
  }, [auth, token]);

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
        setExcelFile,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
