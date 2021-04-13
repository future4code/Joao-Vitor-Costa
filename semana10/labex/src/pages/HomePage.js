import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { goToListTripsPage, goToLoginPage } from "../routes/coordinator";
import {Button} from "../components/Button"
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

  return (
    <DivContainer>
      <h1>LabeX</h1>
    <div>
      <Button onClick={() => goToListTripsPage(history)}>Ver viagens</Button>
      <Button onClick={() => goToLoginPage(history)}>Área de admin</Button>
      </div>
    </DivContainer>
  );
};

export default HomePage;
