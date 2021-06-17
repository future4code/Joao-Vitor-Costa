import { Request, Response } from "express";
import { createPostBusiness } from "../../business/post/createPostBusiness";

export const createPost = async (
   req: Request,
   res: Response
) => {
   try {

      const { photo, description, created_at, type } = req.body

      const token = req.headers.authorization as string

      const postData = { photo, description, created_at, type }

      await createPostBusiness(postData, token)

      res.status(201).end()

   } catch (error) {

      res.statusMessage = error.message
      res.status(500).end()
   }
}