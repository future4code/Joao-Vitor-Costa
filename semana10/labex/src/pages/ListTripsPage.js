import React, {useState} from "react"
import { useHistory, useParams } from "react-router-dom";
import axios from "axios"
import styled from "styled-components"
import { goToApplicationFormPage, goToLastPage } from "../routes/coordinator";

const ListTripsPage = () => {

  const history = useHistory()

  return (
    <div>
      <p>ListTripsPage</p>
      <button onClick={() => goToApplicationFormPage(history)}>Inscrever-se</button>
      <button onClick={history.goBack}> voltar </button>
    </div>
  );
}

export default ListTripsPage;