import axios from "axios"
import connection from "../connection"

export const createUserAddress = async(cep: string, id: string, number: string, complement: string): Promise<any> => {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
        await connection.raw(`
        INSERT INTO Address (user_id, cep, logradouro, numero, complemento, bairro, cidade, estado) 
        VALUES (
        "${id}",
        "${cep}",
        "${response.data.logradouro}",
        "${number}",
        "${complement}",
        "${response.data.bairro}",
        "${response.data.localidade}",
        "${response.data.uf}"
        )
        `)
}