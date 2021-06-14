// 2.c && 4

import { Request, Response } from "express";
import generateId from "../services/idGenerator"
import { generateToken } from "../services/tokenGenerator";
import createUsers from "../data/createUsers"

const createUser = async (req: Request, res: Response) => {
   try {
      const id = generateId()
      const { email, password } = req.body

      if(!email || !email.includes("@")){
         throw new Error("Invalid email")
      }

      if(password.length < 6){
         throw new Error("Invalid password")
      }

      await createUsers(id, email, password)

      const token: string = generateToken({ id })

      res.send({token})
   } catch (error) {
      res.send({message: error.message})
   }
};

export default createUser;