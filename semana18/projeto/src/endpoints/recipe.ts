import { Request, Response } from "express";
import functionGetRecipe from "../data/functionGetRecipe";
import getDataByToken from "../data/functionGetData";

const getRecipe = async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const token = req.headers.authorization

        if(!token){
            throw new Error("invalid token")
        }

        const userData = getDataByToken(token)

        const recipe = await functionGetRecipe(id)

        const date = new Date(recipe[0].createAt).toISOString()

        const onlyDate = date.split("T")

        const splittedDate = onlyDate[0].split("-")

        const correctedDate = `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`

        recipe[0].createAt = correctedDate
        
        res.send(recipe[0])
    } catch (error) {
        res.send({message: error.message})
    }
}

export default getRecipe;