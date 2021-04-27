import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm"
import {login} from "../../services/requests"
import {useUnprotectedPage} from "../../hooks/useUnprotectedPage"
import {goToSignUp} from "../../routes/coordinator"

const LoginPage = () => {
useUnprotectedPage()
  const history = useHistory();
    
  const initialForm = {
      email: "",
      password: ""
  }
  const [form, onChange, clear] = useForm(initialForm);

    const handleClick = (e) => {
        e.preventDefault()
        login(form, clear, history)
    }

  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          required
          value={form.email}
          name="email"
          type="text"
          onChange={onChange}
          placeholder="Email"
        />
        <input
          required
          value={form.password}
          name="password"
          type="password"
          onChange={onChange}
          placeholder="Senha"
        />
        <button onClick={() => goToSignUp(history)}>Cadastrar</button>
        <button>Entrar</button>     
      </form>
    </div>
  );
};

export default LoginPage;
