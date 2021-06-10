import { Request, Response } from "express";
import getDataByToken from "../data/functionGetData";
import getUserById from "../data/functionGetUserById";

const getMyUser = async(req:Request, res:Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string
        if(!token){
            throw new Error("You are not allowed to do this.")
        }
        const tokenData = getDataByToken(token)

        const user = await getUserById(tokenData.id)

        res.send({id: user.id, name: user.name, email: user.email})
    } catch (error) {

        let messageErr = error.message

        if(error.message.includes("jwt malformed")){
            messageErr = "This user doesn't exist"
        }

        res.send({message: messageErr})
    }
}

export default getMyUser;