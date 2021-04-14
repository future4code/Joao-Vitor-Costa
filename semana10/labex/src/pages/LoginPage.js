import React, {useState} from "react"
import { useHistory, useParams } from "react-router-dom";
import axios from "axios"
import styled from "styled-components"
import { goToAdminHomePage, goToHomePage } from "../routes/coordinator";
import {Button, Input} from "../components/Estilization"
import fundo from "../img/fundo.jpg"

const DivContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${fundo});
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  `

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const login = () => {
    const body = {
      email: email,
      password: password
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-vitor-alves-cruz/login", body)
    .then((res) => {console.log(res.data) 
                   window.localStorage.setItem("token", res.data.token)
                   goToAdminHomePage(history)
    })
    .catch((err) => {console.log(err.message)})
  }

  return (
    <DivContainer>
      <h1>LoginPage</h1>
      <Input value={email} onChange={handleEmail} placeholder={"E-mail"}></Input>
      <Input value={password} onChange={handlePassword} placeholder={"Senha"}></Input>
      <div>
      <Button onClick={() => goToHomePage(history)}> voltar </Button>
      <Button onClick={login}>entrar</Button>
      </div>
    </DivContainer>
  );
}

export default LoginPage;