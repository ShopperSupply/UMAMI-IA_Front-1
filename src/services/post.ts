import api from "./"
import { IFormLogin } from "@/interfaces/form"

export function login(data?: IFormLogin){
    const response = api.post("/login/", data)
    .then(res => res.data)

    return response
}