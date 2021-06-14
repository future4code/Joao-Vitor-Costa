import { Request, Response } from "express";
import getData from "../data/getData"
import getUserById from "../data/userById"

export default async function getUserData(req: Request,res: Response): Promise<void> {
   try {
       const token = req.headers.authorization as string

       const authenticationData = getData(token)

       const user = await getUserById(authenticationData.id)

        res.send({id: user.id, email: user.email})
   } catch (error) {
    res.send({message: error.message})
   }
}