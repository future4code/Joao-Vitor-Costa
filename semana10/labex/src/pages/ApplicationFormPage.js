import React, {useState} from "react"
import { useHistory } from "react-router-dom";
import axios from "axios"
import styled from "styled-components"

const ApplicationFormPage = () => {

  const history = useHistory()

  return (
    <div>
      <p>ApplicationFormPage</p>
      <button onClick={history.goBack}> voltar </button>
    </div>
  );
}

export default ApplicationFormPage;