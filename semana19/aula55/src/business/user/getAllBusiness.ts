    import { getTokenData } from "../../services/authenticator"
import { selectAllUsers } from "../../data/user/selectAllUsers"

export const getAllBusiness = async(token: string) => {
    if(!token){
        throw new Error("Você deve ter um token")
    }

    const userData = await getTokenData(token)

    if(!userData){
        throw new Error("Seu token é inválido")
    }

    const users = await selectAllUsers()

    return users
}