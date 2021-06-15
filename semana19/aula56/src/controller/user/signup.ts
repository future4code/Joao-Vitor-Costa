import { Request, Response } from "express";
import { signupBusiness } from "../../business/user/signupBusiness";
import { signupInputDTO } from "../../model/user";

export const signup = async (
   req: Request,
   res: Response
) => {
   try {
      const { name, nickname, email, password, role } = req.body as signupInputDTO

      const userData = {name, nickname, email, password, role} 

      const token: string = await signupBusiness(userData)

      res
         .status(201)
         .send({
            message: "Usuário criado!",
            token
         })

   } catch (error) {
      res.status(400).send(error.message)
   }
}