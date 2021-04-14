import React, {useState} from "react"
import { useHistory, useParams } from "react-router-dom";
import axios from "axios"
import styled from "styled-components"
import {useProtectedPage} from "../hooks/useProtectedPages"
import {goToAdminHomePage} from "../routes/coordinator"
import {Button, Input} from "../components/Estilization"
import fundo from "../img/fundo.jpg"

const DivContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${fundo});
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  `

  const Option = styled.option`
  `

export const Select = styled.select`
width: 20.4vw;
height: 5vh;
outline: 0;
border: 2px solid white;
`

const CreateTripPage = () => {
  useProtectedPage()
  const [name, setName] = useState("")
  const [planet, setPlanet] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [duration, setDuration] = useState("")

  const history = useHistory()

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handlePlanet = (e) => {
    setPlanet(e.target.value)
  }

  const handleDate = (e) => {
    setDate(e.target.value)
  }

  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleDuration = (e) => {
    setDuration(e.target.value)
  }

  const createTrip = () => {
    const token = window.localStorage.getItem("token")
    const body = {
      name,
      planet,
      date,
      description,
      duration
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-vitor-alves-cruz/trips", body,
    {
      headers: {
        auth: token
      }
    }
    )
    .then(() => {
      alert("Viagem criada com sucesso!")
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <DivContainer>
      <h1>CreateTripPage</h1>
      <Input onChange={handleName} placeholder={"Nome"}/>
      <Select onChange={handlePlanet} >
        <Option>Escolha um planeta</Option>
        <Option>Mercúrio</Option>
        <Option>Terra</Option>
        <Option>Marte</Option>
        <Option>Vênus</Option>
        <Option>Saturno</Option>
        <Option>Urano</Option>
        <Option>Netuno</Option>
        <Option>Plutão</Option>
        <Option>Jupiter</Option>
      </Select>
      <Input onChange={handleDate} placeholder={"dd/mm/aaa"} type={"date"}/>
      <Input onChange={handleDescription} placeholder={"Descrição"}/>
      <Input onChange={handleDuration} placeholder={"Duração em dias"} type={"number"}/>
      <div>
      <Button onClick={() => goToAdminHomePage(history)}> voltar </Button>
      <Button onClick={createTrip}>Criar</Button>
      </div>
    </DivContainer>
  );
}

export default CreateTripPage;