import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { login } from "../../services/requests";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { goToSignUp } from "../../routes/coordinator";
import {
  DivContainer,
  Form,
  StyledTextField,
  StyledButton,
  DivInputs,
} from "./styled";

const LoginPage = ({text, setText}) => {
  useUnprotectedPage();
  const history = useHistory();

  const initialForm = {
    email: "",
    password: "",
  };
  const [form, onChange, clear] = useForm(initialForm);

  const handleClick = () => {
    login(form, clear, history, setText);
  };

  return (
    <DivContainer>
      <Form >
        <DivInputs>
          <StyledTextField
            required
            value={form.email}
            name="email"
            type="text"
            onChange={onChange}
            label="Email"
          />
          <StyledTextField
            required
            value={form.password}
            name="password"
            type="password"
            onChange={onChange}
            label="Senha"
          />
        </DivInputs>

        <StyledButton 
        variant={"contained"} 
        color={"primary"}
        onClick={() => handleClick()}>
          Entrar
        </StyledButton>

        <StyledButton
          onClick={() => goToSignUp(history)}
          variant={"text"}
          color={"primary"}
        >
          Não possui conta? Cadastre-se agora!
        </StyledButton>
      </Form>
    </DivContainer>
  );
};

export default LoginPage;
