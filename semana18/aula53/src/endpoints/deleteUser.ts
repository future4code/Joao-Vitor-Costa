import { Request, Response } from "express";
import deleteUser from "../data/deleteUser";
import getData from "../data/getData";

const deleteUsers = async (req: Request, res: Response) => {
   try {
      const token = req.headers.authorization as string
      const id = req.query.id as string

      const authenticatonData = getData(token)

      if(authenticatonData.role !== "ADMIN"){
          throw new Error("You are not allowed")
      }

      await deleteUser(id)

      res.send("User deleted")
   } catch (error) {
      res.send({message: error.message})
   }
};

export default deleteUsers;