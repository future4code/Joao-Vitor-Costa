import { Request, Response } from "express";
import { createPostBusiness } from "../../business/post/createPostBusiness";

export const createPost = async (
   req: Request,
   res: Response
) => {
   try {

      const { photo, description, created_at, type } = req.body

      const postData = { photo, description, created_at, type }

      await createPostBusiness(postData)

      res.status(201).end()

   } catch (error) {

      res.statusMessage = error.message
      res.status(500).end()
   }
}