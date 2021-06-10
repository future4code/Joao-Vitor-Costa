import { Request, Response } from "express";
import getDataByToken from "../data/functionGetData";
import getUserById from "../data/functionGetUserById";

const getUser = async(req:Request, res:Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string
        const tokenData = getDataByToken(token)
        const user = await getUserById(tokenData.id)
        
        res.send({id: user.id, name: user.name, email: user.email})
    } catch (error) {
        res.send({message: error.message})
    }
}

export default getUser;