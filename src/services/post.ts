import { ISheetRequest } from "@/interfaces/sheet";
import api from "./";
import { IFormLogin } from "@/interfaces/form";

export function login(data?: IFormLogin) {
  const response = api.post("/login/", data).then((res) => res.data);

  return response;
}

export function validateSheet(token?: string, body?: FormData) {
  console.log(body);
  const response = api
    .post("/planilha/", body, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Token " + token,
      },
    })
    .then((res) => {
      console.log("Validations successful");
      console.log(res);
      return res;
    })
    .catch((err) => console.error(err));
  return response;
}
