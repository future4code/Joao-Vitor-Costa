import { Request, Response } from "express";
import getDataByToken from "../data/functionGetData";
import getUserById from "../data/functionGetUserById";

const getOthersProfile = async(req:Request, res:Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string
        const id = req.params.id
        if(!token){
            throw new Error("You are not allowed to do this.")
        }
        const tokenData = getDataByToken(token)

        if(!tokenData){
            throw new Error("You must have an authorization")
        }

        const user = await getUserById(id)

        res.send({id , name: user.name, email: user.email})
    } catch (error) {

        let messageErr = error.message

        if(error.message.includes("jwt malformed")){
            messageErr = "invalid token"
        } if (error.message.includes("undefined")){
            messageErr = "This user doesn't exist"
        }

        res.send({message: messageErr})
    }
}

export default getOthersProfile;