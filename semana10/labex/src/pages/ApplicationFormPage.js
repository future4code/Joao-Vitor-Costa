import React, {useState} from "react"
import { useHistory } from "react-router-dom";
import axios from "axios"
import styled from "styled-components"
import {Button, Input, Select} from "../components/Estilization"
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

const ApplicationFormPage = () => {

  const history = useHistory()
  return (
    <DivContainer>
      <h1>ApplicationFormPage</h1>
      <Select> </Select>
      <Input placeholder={"Nome"}></Input>
      <Input min="1" placeholder={"Idade"} type={"number"}></Input>
      <Input placeholder={"Texto de candidatura"}></Input>
      <Input placeholder={"Profissão"}></Input>
      <Select> </Select>
      <Button onClick={history.goBack}> voltar </Button>
    </DivContainer>
  );
}

export default ApplicationFormPage;