import { ISheet } from "@/interfaces/sheet";
import api from "./"
import { IFormLogin, IFormPlanilha } from "@/interfaces/form"

export function login(data?: IFormLogin){
    const response = api.post("/login/", data)
    .then(res => res.data)

    return response
}

export function validate(token?: string, body?: IFormPlanilha){
 console.log(body)
  const response: Promise<ISheet> = api
    .post("/planilha", body, {
      headers: {
        Authorization: "Token " + token,
      },
    })
    .then((res) => {
        console.log("Validations successful")
        console.log(res)
    })
    .catch((err) => console.error(err));
  return response;
}