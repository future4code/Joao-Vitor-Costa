import React, {useState} from "react"
import { useHistory } from "react-router-dom";
import axios from "axios"
import styled from "styled-components"
import { goToCreateTripPage } from "../routes/coordinator";

const AdminHomePage = () => {

  const history = useHistory()
  
  return (
    <div>
      <p>admin home</p>
      <button onClick={() => goToCreateTripPage(history)}>Criar viagem</button>
      <button onClick={history.goBack}>voltar</button>
    </div>
  );
}

export default AdminHomePage;