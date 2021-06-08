import { Request, Response } from "express";
import getData from "../data/getData"
import getUserById from "../data/userById"
import { USER_ROLES } from "../types";

export default async function getUser(req: Request,res: Response): Promise<void> {
   try {
       const token = req.headers.authorization as string
       const tokenData = getData(token)
       const user = await getUserById(tokenData.id)

        res.send({id: user.id, email: user.email, password: user.password, role: user.role})
   } catch (error) {
    res.send({message: error.message})
   }
}