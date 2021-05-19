import express, {Request, Response} from "express"
import cors from "cors"
import { countries } from "./countries"

const app = express()

app.use(express.json())
app.use(cors())

type country = {
    id: Number,
    name: string,
    capital: string,
    continent: string
}

app.get("/countries/all", (req: Request, res: Response)=>{
    const result = countries.map(country => ({
        id: country.id,
        name: country.name
    }))
    res
    .status(200)
    .send(result);
});

app.get("/countries/search", (req: Request, res: Response) => {
    const name = req.query.name as string
    const capital = req.query.capital as string 
    const continent = req.query.continent as string
    let result: country[] = countries

    try{
    if( name || capital || continent){
    if (name) {
        result = result.filter(
           country => country.name.toLowerCase().includes(name.toLowerCase())
        )
     }
     if (capital) {
        result = result.filter(
           country => country.capital.toLowerCase().includes(capital.toLowerCase())
        )
     }
     if (continent) {
        result = result.filter(
           country => country.continent.toLowerCase().includes(continent.toLowerCase())
        )
     }
     res.status(200).send(result)
    } else {
        throw new Error("You must specify you search")
    }}
    catch(error){
        res.status(400).send({message: error.message})
     }
})

app.put("/countries/edit/:id", (req: Request, res: Response) => {
 let name = req.body.name as string
 let capital = req.body.capital as string
 const id = Number(req.params.id)
 try{
 if(id){
 
 countries.find((country) => {
     if(country.id === id){
         country.name = name,
         country.capital = capital
     } else {
        throw new Error("nao especificado")
     }
 })
 res.status(200).send({message: "succes"})
} else {
    throw new Error("You must specify a country")
}
}catch(error) {
    res.status(400).send({message: error.message})
}
})

app.get("/countries/:id", (req: Request, res: Response)=>{
    try{
        if(isNaN(Number(req.params.id))){
            throw new Error("Id must be a number")
        }
        const id = Number(req.params.id)

        const result = countries.find((country => country.id === id))

        if(!result) {
            throw new Error("Could not find country with specified id")
        }
        res
        .status(200)
        .send(result);
    } catch(error) {
        res.status(400).send({message: error.message})
    }
});

app.listen(3003, ()=>{
    console.log("Server is running at http://localhost:3003");
});