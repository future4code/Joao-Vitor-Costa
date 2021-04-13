import React, {useState} from "react"
import { useHistory, useParams } from "react-router-dom";
import axios from "axios"
import styled from "styled-components"
import { goToAdminHomePage } from "../routes/coordinator";

const LoginPage = () => {

  const history = useHistory()

  return (
    <div>
      <p>LoginPage</p>
      <button onClick={history.goBack}> voltar </button>
      <button onClick={() => goToAdminHomePage(history)}>entrar</button>
    </div>
  );
}

export default LoginPage;