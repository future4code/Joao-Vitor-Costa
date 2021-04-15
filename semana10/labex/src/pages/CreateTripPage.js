import React, {useState} from "react"
import { useHistory, useParams } from "react-router-dom";
import axios from "axios"
import styled from "styled-components"
import {useProtectedPage} from "../hooks/useProtectedPages"
import {goToAdminHomePage} from "../routes/coordinator"
import {Button, Input, Select} from "../components/Estilization"
import fundo from "../img/fundo.jpg"
import {useForm} from "../hooks/useForm"

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
`;

  const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  `

  const Option = styled.option`
  `

const CreateTripPage = () => {
  useProtectedPage()

  const initialForm = {
    name: "",
    description: "",
    planet: "",
    durationInDays: "",
    date: "",
  }
  const [form, onChange] = useForm(initialForm)

  const history = useHistory()

  const createTrip = () => {
    const token = window.localStorage.getItem("token")
    const body = {
      "name": form.name,
      "description": form.description,
      "planet": form.planet,
      "durationInDays": form.durationInDays,
      "date": form.date
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

  const handleClick = (e) => {
    e.preventDefault();
    createTrip()
  }

  return (
    <DivContainer>
      <h1>CreateTripPage</h1>
      <Form onSubmit = {handleClick}>
      <Select 
      required
      onChange={onChange}
      name = "planet"
      value = {form.planet} 
      >
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
      <Input 
      required
      name = "name"
      value = {form.name}
      onChange={onChange} 
      type= "text"
      placeholder={"Nome"}
      pattern={"(.*[a-z]){5}"}
      />
      <Input 
      required
      onChange={onChange} 
      type = "date"
      name = "date"
      value = {form.date}
      />
      <Input 
      required
      onChange={onChange} 
      placeholder={"Descrição"}
      type = "text"
      name = "description"
      value = {form.description}
      />

      <Input 
      required
      onChange={onChange} 
      placeholder={"Duração em dias"} 
      type = {"number"}
      name = "duration"
      value = {form.durationInDays}
      min = {50}
      />
      <div>
      <Button onClick={() => goToAdminHomePage(history)}> voltar </Button>
      <Button>Criar</Button>
      </div>
      </Form>
    </DivContainer>
  );
}

export default CreateTripPage;