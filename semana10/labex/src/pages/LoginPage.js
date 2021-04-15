import React, {useState} from "react"
import { useHistory, useParams } from "react-router-dom";
import axios from "axios"
import styled from "styled-components"
import { goToAdminHomePage, goToHomePage } from "../routes/coordinator";
import {Button, Input} from "../components/Estilization"
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

const LoginPage = () => {
  const history = useHistory()

  const initialForm = {
    email: "",
    password: ""
  }

  const [form, onChange] = useForm(initialForm)

  const login = () => {
    const body = {
      email: form.email,
      password: form.password
    }

    const token = window.localStorage.getItem("token")

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-vitor-alves-cruz/login", body,
    {
      headers: {
        auth: token
      }
    })
    .then((res) => { 
      window.localStorage.setItem("token", res.data.token)
      goToAdminHomePage(history)
    })
    .catch((err) => {
    console.log(err.message)
    alert("Email ou senha incorretos!")
    })
  }

  const handleClick = (e) => {
    e.preventDefault();
    login()
  }

  return (
    <DivContainer>

      <h1>LoginPage</h1>
      <Form onSubmit={handleClick} >
      <Input 
      required
      value={form.email} 
      name="email" 
      onChange={onChange} 
      placeholder={"E-mail"}
      type="text">
      </Input>
      <Input 
      required
      value={form.password} 
      name = "password" 
      type="password" 
      onChange={onChange} 
      placeholder={"Senha"}>
      </Input>
      <div>
      <Button onClick={() => goToHomePage(history)}> voltar </Button>
      <Button>entrar</Button>
      </div>
      </Form>
      
      
    </DivContainer>
  );
}

export default LoginPage;