import { Request, Response } from "express";
import generateId from "../services/idGenerator"
import { generateToken } from "../services/tokenGenerator";
import functionSignUp from "../data/functionSignUp";
import {createHash} from "../services/hashManager"

const signUp = async (req: Request, res: Response) => {
    try {
        const id = generateId()

        const {email, password, name} = req.body

        if(!email || !password || !name){
            throw new Error("You must specify 'email', 'password' and 'name'")
        }

        if(!email.includes("@")){
            throw new Error("Invalid e-mail")
        }

        const hashPassword = createHash(password)

        await functionSignUp(id, email, hashPassword, name)

        const token: string = generateToken({id})

        res.send({access_token: token})
    } catch (error) {
        res.send({message: error.message})
    }
}

export default signUp;