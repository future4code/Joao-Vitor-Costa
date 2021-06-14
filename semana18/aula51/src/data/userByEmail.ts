import { Request, Response } from "express";
import * as jwt from "jsonwebtoken"
import connection from "../connection";

export default async function getUserByEmail(email: string): Promise<any> {
   const result = await connection
   .select("*")
   .from("User")
   .where({email})
   
   return result[0] 
}