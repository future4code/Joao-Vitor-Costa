import express, { Express, Request, Response } from "express"
import knex from "knex"
import cors from "cors"
import dotenv from "dotenv"
import { AddressInfo } from "net"

dotenv.config()

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express()
app.use(express.json())
app.use(cors())

app.get("/user", async(req:Request, res:Response) => {
   try {
      const name = req.query.name
      const result = await connection.raw(`
      SELECT id, name, email, type FROM aula48_exercicio WHERE name = "${name}";
      `)
      res.send(result[0])
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
})

app.get("/users/:type", async (req:Request, res:Response) => {
   try {
      const type = req.params.type as string
      const result = await connection.raw(`
      SELECT id, name, email, type FROM aula48_exercicio WHERE type = "${type}"
      `)
      res.send(result[0])
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
})

app.get("/search/user", async(req:Request, res:Response) => {
   try {
      const name = req.query.name as string
      const type = req.query.type as string 
      const orderBy = req.query.orderBy as string || "email" 
      const orderType = req.query.orderType as string || "asc"
   
      const result = await connection.raw(`
      SELECT * FROM aula48_exercicio WHERE name LIKE "${name}" OR type LIKE "${type}" ORDER BY ${orderBy} ${orderType}
      `)
      if(!result[0].length){
         throw new Error("User not found")
      }
      res.send(result[0])
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
})

app.get("/limitedusers", async(req:Request, res: Response) => {
   try {
      const page = Number(req.query.page) || 1
      const result = await connection.raw(`
      SELECT * FROM aula48_exercicio LIMIT 5 OFFSET ${5 * (page - 1)}
      `)
      res.send({
         result: result[0],
         page
      })
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
})

app.get("/allservices", async(req:Request, res:Response) => {
   try {
      const name = req.query.name as string 
      const type = req.query.type as string 
      const orderBy = req.query.orderBy as string || "name" 
      const orderType = req.query.orderType as string || "desc"
      const page = Number(req.query.page) || 1

      if(!name && !type){
         const result = await connection.raw(`
      SELECT * FROM aula48_exercicio ORDER BY ${orderBy} ${orderType} LIMIT 5 OFFSET ${5 * (page - 1)}
      `)
      res.send({
         result: result[0],
         page
      })
      }
      else{
         const result = await connection.raw(`
         SELECT * FROM aula48_exercicio WHERE name LIKE "${name}" OR type LIKE "${type}" ORDER BY ${orderBy} ${orderType} LIMIT 5 OFFSET ${5 * (page - 1)}
         `)
         if(!result[0].length){
            throw new Error("User not found")
         }
         res.send({
            result: result[0],
            page
         })
      }
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
})

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})
