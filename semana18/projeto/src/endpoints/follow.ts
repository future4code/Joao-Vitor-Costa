import { Request, Response } from "express";
import getDataByToken from "../data/functionGetData";
import functionFollow from "../data/functionFollow";

const follow = async(req:Request, res: Response):Promise<void> => {
    try {
        const token = req.headers.authorization

        if(!token){
            throw new Error("invalid token")
        }

        const userData = getDataByToken(token)

        const user_id = req.body.user_id

        const my_id = userData.id

        if(!my_id){
            throw new Error("Invalid token")
        }

        if(!user_id){
            throw new Error("This user don't exist")
        }
        
        await functionFollow(my_id, user_id)

        res.send("Followed successfully")
    } catch (error) {
        res.send({message: error.message})
    }
}

export default follow;

