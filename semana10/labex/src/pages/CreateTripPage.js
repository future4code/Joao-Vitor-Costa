import React, {useState} from "react"
import { useHistory, useParams } from "react-router-dom";
import axios from "axios"
import styled from "styled-components"

const CreateTripPage = () => {

  const history = useHistory()

  return (
    <div>
      <p>CreateTripPage</p>
      <button onClick={history.goBack}> voltar </button>
    </div>
  );
}

export default CreateTripPage;