import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { goToAdminHomePage, goToListTripsPage, goToLoginPage } from "../routes/coordinator";
import {Button} from "../components/Estilization"
import fundo from "../img/fundo.jpg"


const DivContainer = styled.div`
height: 100vh;
width: 100vw;
  color: white;
  background-image: url(${fundo});
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HomePage = () => {
  const history = useHistory();

  const token = window.localStorage.getItem("token")

  const validacao = () => {
    if(token === null) {
      goToLoginPage(history)
    } else {
      goToAdminHomePage(history)
    }
  }

  return (
    <DivContainer>
      <h1>LabeX</h1>
    <div>
      <Button onClick={() => goToListTripsPage(history)}>Ver viagens</Button>
      <Button onClick={validacao}>Área de admin</Button>
      </div>
    </DivContainer>
  );
};

export default HomePage;
