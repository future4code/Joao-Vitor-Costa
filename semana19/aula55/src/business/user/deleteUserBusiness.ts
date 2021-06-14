import { getTokenData } from "../../services/authenticator"
import { deleteUserData } from "../../data/user/deleteUserData"

export const deleteUserBusiness = async(id: string, token: string) => {
    if(!id){
        throw new Error("Você deve especificar um token")
    }

    if(!token){
        throw new Error("Você deve estar logado")
    }

    const userData = await getTokenData(token)

    if(!userData){
        throw new Error("Seu token é inválido")
    }

    if(userData.role !== "ADMIN"){
        throw new Error("Você não tem permissão para realizar essa operação")
    }

    await deleteUserData(id)
}