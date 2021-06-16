import { Request, Response } from "express"
import { getAllBusiness } from "../../business/user/getAllBusiness"

export const allUsers = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
    const token = req.headers.authorization as string
    const users = await getAllBusiness(token)

      res.send({users})
   } catch (error) {
      res.status(400).send(error.message)
   }
}