import { Request, Response } from "express";
import getUserByEmail from "../data/functionUserByEmail";
import { compareHash } from "../services/hashManager";
import { generateToken } from "../services/tokenGenerator";

const login = async(req:Request, res: Response):Promise<void> => {
    try {
    const {email, password} = req.body

    if(!email || !password){
        throw new Error("You must specify 'email' and 'password'")
    }

    if(!email.includes("@")){
        throw new Error("Invalid e-mail")
    }

    const user = await getUserByEmail(email)

    if(!user){
        throw new Error("This user doesn't exist")
    }

    const checkPassword: boolean = compareHash(password, user.password)

    if(!checkPassword){
        throw new Error("Invalid Credentials")
    }

    const token = generateToken(user.id)

    res.send({access_token: token})
    } catch (error) {
        res.send({message: error.message})
    }
}

export default login;