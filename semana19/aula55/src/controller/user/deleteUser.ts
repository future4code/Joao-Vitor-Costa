import { Request, Response } from "express"
import { deleteUserBusiness } from "../../business/user/deleteUserBusiness"

export const deleteUser = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      const id = req.params.id as string
      const token = req.headers.authorization as string 
    
    await deleteUserBusiness(id, token)

      res.send({message: 'Usuário deletado'})

   } catch (error) {
      res.status(400).send(error.message)
   }
}