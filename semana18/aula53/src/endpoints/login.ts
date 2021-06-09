import { Request, Response } from "express";
import userByEmail from "../data/userByEmail";
import { compareHash } from "../services/hashManager";
import { generateToken } from "../services/tokenGenerator";
import {USER_ROLES} from "../types"

export default async function login(req: Request,res: Response): Promise<void> {
   try {
       const {email, password, role} = req.body

       if (!role) {
        res.statusCode = 422
        throw new Error("Preencha o campo 'role'")
     }

     if(!(role in USER_ROLES)){
        throw new Error("'role' must be 'NORMAL' or 'ADMIN'")
     }

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

       if(!user){
        throw new Error("This user doesn't exist")
    }

    if(user.role !== role){
        throw new Error("Incorrect role")
    }

       const correctPassword: boolean = compareHash(password, user.password)

       if (!correctPassword) {
        throw new Error("Invalid Credentials")
     }
    
    const token = generateToken({id: user.id, role: user.role})

        res.send({token})
   } catch (error) {
    res.send({message: error.message})
   }
}