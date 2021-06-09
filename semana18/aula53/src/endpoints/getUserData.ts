import { Request, Response } from "express";
import getData from "../data/getData"
import getUserById from "../data/userById"
import { USER_ROLES } from "../types";

export default async function getUserData(req: Request,res: Response): Promise<void> {
   try {
       const token = req.headers.authorization as string

       const authenticationData = getData(token)

       if(authenticationData.role !== USER_ROLES.NORMAL){
         throw new Error("Only 'NORMAL' users are allowed")
      }

       const user = await getUserById(authenticationData.id)
       
       const correctUser = {
         id: user.id, 
         email: user.email, 
         password: user.password, 
         role: user.role, 
         cep: user.cep, 
         street: user.logradouro, 
         number: user.numero, 
         complement: user.complemento, 
         bairro: user.bairro, 
         cidade: user.cidade, 
         estado: user.estado
      }

        res.send(correctUser)

   } catch (error) {
    res.send({message: error.message})
   }
}