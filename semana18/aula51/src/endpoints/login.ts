import { Request, Response } from "express";
import userByEmail from "../data/userByEmail";
import { generateToken } from "../services/tokenGenerator";

export default async function login(req: Request,res: Response): Promise<void> {
   try {
       const {email, password} = req.body

        if(!email){
            throw new Error("Please fill email field")
        }

        if(!email.includes("@")){
            throw new Error("Invalid email")
         }

        if(!password){
            throw new Error("Please fill password field")
        }

       const user = await userByEmail(email)

    if(user.password !== password){
        throw new Error("Invalid password")
    }

    if(!user){
        throw new Error("This user doesn't exist")
    }

    const token = generateToken({id: user.id})

        res.send({token})
   } catch (error) {
    res.send({message: error.message})
   }
}