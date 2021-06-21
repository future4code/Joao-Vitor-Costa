import { Request, Response } from "express";
import generateId from "../services/idGenerator"
import getDataByToken from "../data/functionGetData";
import getUserById from "../data/functionGetUserById";
import functionCreateRecipe from "../data/functionCreateRecipe";

const createRecipe = async (req: Request, res: Response) => {
    try {
        const id = generateId()

        const token = req.headers.authorization as string

        if(!token){
            throw new Error("Invalid token")
        }

        const userData = getDataByToken(token)

        const user = await getUserById(userData.id)

        const {description, title} = req.body

        if(!description || !title){
            throw new Error("You must specify 'title' and 'description'")
        }

        const d = new Date
        const currentYear: number = d.getFullYear()
        const currentMonth: number = d.getMonth() + 1
        const currentDay:number = d.getDate()

        const createAt = `${currentYear}-${currentMonth}-${currentDay}`

        await functionCreateRecipe(id, title, description, createAt, user.id)

        res.send("success")
    } catch (error) {
        res.send({message: error.message})
    }
}

export default createRecipe;