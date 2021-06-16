import {Request, Response} from "express"
import signUpBusiness from "../../business/user/signUpBusiness"

export const signUp = async (req:Request, res:Response) => {
    try {
        const {name, email, password, role} = req.body

        const token: string = await signUpBusiness({name, email, password, role})

        res.send({message: "Usuário criado!", token})
    } catch (error) {
        res.status(400).send(error.message)
    }
}