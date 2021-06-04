import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";

app.get("/ping", (req: Request, res: Response) => { res.send("pong!") })

// 1
app.put("/user", async(req: Request, res: Response) => {
    try {
        const name = req.body.name
        const nickname = req.body.nickname
        const email = req.body.email
        const result = await connection.raw(`
        INSERT INTO Users (name, nickname, email)
        VALUES(
            "${name}",
            "${nickname}",
            "${email}"
        );
        `)
        res.status(200).send("success!")
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})

// 2 
const getUserById = async (id: string): Promise<any> => {
    const result = await connection("Users")
    .where("id", id);
    return result
}

app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const user = await getUserById(id)
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
})

// 3 
app.post("/user/edit/:id", async(req:Request, res:Response) => {
    try {
        const id = req.params.id
        const name = req.body.name
        const nickname = req.body.nickname

        if(name && nickname){
        const result = await connection.raw(`
        UPDATE Users SET name = "${name}", nickname = "${nickname}" WHERE
        id = ${id}
        ;
        `)
        } 
        else{
            throw new Error("You must specify a name and a nickname")
       }

        res.status(200).send("Succes!")

    } catch (error) {
        res.status(400).send({
            message: error.message,
    })
}})

//4
app.put("/task", async(req:Request, res:Response) => {
    try {
        const title = req.body.title
        const description = req.body.description
        const limitDate = req.body.limitDate
        const creatorUserId = req.body.creatorUserId

        const limitDateArray = limitDate.split("/")
        const limitDateCorrected = `${limitDateArray[2]}/${limitDateArray[1]}/${limitDateArray[0]}`

        const result = await connection.raw(`
        INSERT INTO Tasks (title, description, limitDate, creatorUserId)
        VALUES(
            "${title}",
            "${description}",
            "${limitDateCorrected}",
            ${creatorUserId}
        );
            `)

            res.status(200).send("success")
    } catch (error) {
        res.status(400).send({
            message: error.message
    })
}})

// 5
app.get("/task/:id", async(req:Request, res:Response) => {
    try {
        const id = req.params.id
        const result = await connection.raw(`
        SELECT Tasks.id, title, description, limitDate, status, creatorUserId, nickname  
        FROM Tasks 
        JOIN Users ON creatorUserId = Users.id
        WHERE Tasks.id = ${id};
        `)

        const date = new Date(result[0][0].limitDate).toISOString()
        const onlyDateArray = date.split("T")
        const splittedDate = onlyDateArray[0].split("-")
        const correctedDate = `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`

        result[0][0].limitDate = correctedDate

        res.status(200).send(result[0])
    } catch (error) {
        res.status(400).send({
            message: error.message
    })
    }
})

// 6
app.get("/users/all", async(req:Request, res:Response) => {
    try{
        const result = await connection.raw(`
        SELECT * FROM Users; 
        `)
        res.status(200).send(result[0])
    } catch (error) {
        res.status(400).send({
            message: error.message
    })
    }
})

// 7 
app.get("/task", async(req: Request, res:Response) => {
    try {
        const userId = req.query.userId
        const result = await connection.raw(`
        SELECT Tasks.id, title, description, limitDate, status, creatorUserId, nickname  
        FROM Tasks 
        JOIN Users ON creatorUserId = Users.id
        WHERE creatorUserId = ${userId};
        `)

        result[0].forEach((item: any) => {
        const date = new Date(item.limitDate).toISOString()
        const onlyDateArray = date.split("T")
        const splittedDate = onlyDateArray[0].split("-")
        const correctedDate = `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
        item.limitDate = correctedDate
        });

        res.send(result[0])
    } catch (error) {
        res.status(400).send({
            message: error.message
    })
}
})