import express, {Request, Response} from "express"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/ping", (req: Request, res: Response) => {
    res.status(200).send("pong")
  })

  type Bill = {
      value: number,
      date: string,
      description: string
  }

  type User = {
      name: string,
      cpf: string,
      birthDate: string,
      balance: number,
      extract: Bill[] 
    }

  const users: User[] = [
    {
        name: "jv",
        cpf: "66655544487",
        birthDate: "23/12/2000",
        balance: 0,
        extract: []
    },
  ]

app.post("/labebank/create", (req: Request, res: Response) => {
    const name = req.body.name
    const cpf = req.body.cpf
    const birthDate = req.body.birthDate

    const correctBirthDate = new Date(birthDate).getTime() / (1000 * 60 *60 * 24 * 30 * 12)
    const currentYear = new Date().getTime() / (1000 * 60 *60 * 24 * 30 * 12)

    try {
        if(name && cpf && birthDate){
            const existentUser = users.find(u => u.cpf === cpf)
            if(existentUser){
                throw new Error("This account already exist")
            }
            if(currentYear - correctBirthDate < 18){
                throw new Error("You must be over 18 to create an account")
            }
        const newUser = {
            name,
            cpf,
            birthDate,
            balance: 0,
            extract: [],
        }
        users.push(newUser)
        res.status(200).send({
            message: "success",
            users: users
        })
        } else if(!name || !cpf || !birthDate){
            throw new Error("One or more parameter missing")
        }
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})

app.get("/labebank/balanceQuantity", (req: Request, res: Response) => {
    const name = req.query.name
    const cpf = req.query.cpf
    try {
       const existentUser = users.find(u => u.cpf === cpf && u.name === name)
        if(!existentUser){
            throw new Error("This account doesn't exist")
        }
        if(!name || !cpf){
            throw new Error("You must specify your name and cpf")
        }
        res.status(200).send({
            balance: existentUser.balance
        })
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})

app.put("/labebank/balance", (req: Request, res: Response) => {
    const name = req.query.name
    const cpf = req.query.cpf
    const addedValue: number = req.body.addedValue
    try {
       const existentUser = users.find(u => u.cpf === cpf && u.name === name)
       if(!addedValue || addedValue === 0){
           throw new Error("You must insert a valid value")
       }
        if(!existentUser){
            throw new Error("This account doesn't exist")
        }
        if(!name || !cpf){
            throw new Error("You must specify your name and cpf")
        }
        const newValue = existentUser.balance + addedValue
        if(newValue < existentUser.balance){
            throw new Error("You can only add money")
        }
        existentUser.balance = newValue
        res.status(200).send({
            message: "success",
            user: existentUser })
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})

app.put("/labebank/bills", (req:Request, res: Response) => {
    const value = req.body.value
    const description = req.body.description
    let date = req.body.date

    const name = req.query.name
    const cpf = req.query.cpf

    let data = new Date();
    let day = String(data.getDate()).padStart(2, "0");
    let month = String(data.getMonth() + 1).padStart(2, '0');
    let year = data.getFullYear();
    let currentDate = day + '/' + month + '/' + year as string

    const currentYear = new Date().getTime() / (1000 * 60 *60 * 24 * 30 * 12)
    const correctedDate = new Date(date).getTime() / (1000 * 60 *60 * 24 * 30 * 12)

    try {
        const existentUser = users.find(u => u.cpf === cpf && u.name === name)
        if(!existentUser){
            throw new Error("This account doesn't exist")
        }
        if(!value || !description){
            throw new Error("You must specify a value and a description")
        } if (!date){
            date = currentDate
        } if(value > existentUser.balance){
            throw new Error("You can't pay this bill, your balance is too low")
        } if(correctedDate < currentYear){
            throw new Error("You can't pay this bill in a day before today")
        }

        const newBill: Bill = {
            value: value,
            date: date,
            description: description
        }

        existentUser.extract.push(newBill)
        existentUser.balance -= value 
        res.status(200).send({
            message: "success",
            user: existentUser })
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})

app.put("/labebank/internalTransfer", (req: Request, res: Response) => {
    const myName = req.query.myName
    const myCpf = req.query.myCpf
    const cpf = req.body.cpf as string
    const name = req.body.name as string
    const value = req.body.value

    try {
        const myUser = users.find(u=> u.cpf === myCpf && u.name === myName)
        const receiverUser = users.find(u=> u.cpf === cpf && u.name === name)
        if(!myUser){
            throw new Error("Your account doesn't exist")
        }
        if(!receiverUser){
            throw new Error("The receiver's account doesn't exist")
        }
        if(!name || !myCpf || !cpf){
            throw new Error("You need to specify your cpf and the name and cpf of who will receive the money")
        }
        if(myUser.balance < value){
            throw new Error("You can't pay this, your balance is too low")
        }
        myUser.balance -= value
        receiverUser.balance += value
        res.status(200).send({
            message: "success",
            users: {myUser, receiverUser} })
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})

app.get("/users", (req:Request, res: Response) => {
    try {
        res.status(200).send({users: users})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})

app.listen(3003, () => {
    console.log('Server is running at port 3003')
  })