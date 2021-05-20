import express, { Request, Response } from 'express'
import cors from 'cors'

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

type User = {
  id: number,
  name: string,
  email: string,
  type: UserType,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: UserType.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: UserType.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: UserType.ADMIN,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: UserType.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: UserType.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: UserType.NORMAL,
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())



// 1. a) O método get, visto que eu só preciso pegar os dados.
// b) "/users" uma vez que é muito autoexplicativo
app.get("/users/all", (req: Request, res: Response) => {
  res.status(200).send(users)
})

// 4. a) Nada.
// b) Não, visto que a intenção do endpoint é criar um novo usuário, o put seria melhor caso quisesse alterar informações do usuário
app.post("/users/create", (req: Request, res: Response) => {
  try{
    const {id, name, email, type, age} = req.body
    const newUser: User = {
      id,
      name,
      email,
      type,
      age
    }
    users.push(newUser)
    res.status(200).send({
      message: "New user succesfuly created",
      user: newUser
    })
  } catch (error) {
    res.status(400).send({message: error.message})
  }
})

app.put("/users/create", (req: Request, res: Response) => {
  try{
    const {id, name, email, type, age} = req.body
    const newUser: User = {
      id,
      name,
      email,
      type,
      age
    }
    users.push(newUser)
    res.status(200).send({
      message: "New user succesfuly created",
      user: newUser
    })  } catch (error) {
    res.status(400).send({message: error.message})
  }
})

// 2. a) Por query, por facilitar a interação do usuário.
// b) Utilizando o enum
app.get("/users/type", (req: Request, res: Response) => {
  const type = req.query.type as string | undefined
  try{
    if(type){
    const newUser = users.filter(u => u.type.toLowerCase() === type.toLowerCase())
      if(type.toLowerCase() === UserType.NORMAL.toLowerCase() || type.toLowerCase() === UserType.ADMIN.toLowerCase()){
        res.status(200).send(newUser)
      }
     else{
        throw new Error("This type don't exist")
      }
    } else {
      throw new Error("You must specify a type")
    }
  } catch (error) {
    res.status(400).send({message: error.message})
  }
})

// 3. a) Query.
app.get("/users/name", (req: Request, res: Response) => {
  const name = req.query.name as string
  try{
   if(name){
     const newUser = users.find(u => u.name.toLowerCase() === name.toLowerCase())
     if(!newUser){
      throw new Error("This person don't exist")
     } else {
      res.status(200).send(newUser)
     }
   } else {
    throw new Error("You must specify a person")
   }
  } catch (error) {
    res.status(400).send({message: error.message})
  }
})

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
