
import { ICurator } from "@/interfaces/people";
import api from "./"
import { IErrosTypes } from "@/interfaces/errors";

export function getCurators(token: string, setCurators: React.Dispatch<React.SetStateAction<ICurator[]>>){
    // Mostrar curadores.
    const curatores = api
      .get("/curadores", {
        headers: {
          Authorization: "Token " + token,
        },
      })
      .then((res) => setCurators(res.data)).catch(err => console.error(err));
}

export function getErrorTypes(token: string, setErrorTypes: React.Dispatch<React.SetStateAction<IErrosTypes[]>>){
    api.get("/erros", {
      headers: {
        Authorization: "Token " + token,
      },
    }).then(res => setErrorTypes(res.data))
}

