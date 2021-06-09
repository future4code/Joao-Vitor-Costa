import { Request, Response } from "express";
import getData from "../data/getData"
import getUserById from "../data/userById"

export default async function getUser(req: Request,res: Response): Promise<void> {
   try {
       const token = req.headers.authorization as string
       const tokenData = getData(token)

       const user = await getUserById(tokenData.id)

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