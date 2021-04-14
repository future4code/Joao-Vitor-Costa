import React from "react";
import { useHistory } from "react-router-dom";
import {goToHomePage} from "../routes/coordinator"

const ErrorPage = () => {
  const history = useHistory();
  return (
    <div>
      <p>Erro 404 - Essa página não existe!</p>
      <button onClick={() => goToHomePage(history)}>Voltar para a Home</button>
    </div>
  );
};

export default ErrorPage;