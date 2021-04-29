import React from "react";
import { useHistory } from "react-router-dom";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { signUp } from "../../services/requests";
import useForm from "../../hooks/useForm";
import {
  DivContainer,
  Form,
  StyledTextField,
  StyledButton,
  DivInputs
} from "./styled";

const SignUpPage = () => {
  useUnprotectedPage();
  const history = useHistory();

  const initialForm = {
    email: "",
    password: "",
    username: "",
  };
  const [form, onChange, clear] = useForm(initialForm);

  const handleClick = () => {
    signUp(form, clear, history);
  };

  return (
    <DivContainer>
      <Form>
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
        <StyledTextField
          required
          value={form.username}
          name="username"
          type="text"
          onChange={onChange}
          label="User"
        />
        </DivInputs>
        <StyledButton
        variant={"contained"} 
        color={"primary"}
        onClick={() => handleClick()}
        >Cadastrar</StyledButton>
      </Form>
    </DivContainer>
  );
};

export default SignUpPage;
