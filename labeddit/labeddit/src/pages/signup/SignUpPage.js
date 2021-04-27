import React from "react"
import { useHistory } from "react-router-dom";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { signUp } from "../../services/requests";
import useForm  from "../../hooks/useForm"

const SignUpPage = () => {
    useUnprotectedPage()
    const history = useHistory()
    
    const initialForm = {
        email: "",
        password: "",
        username: ""
    }
    const [form, onChange, clear] = useForm(initialForm);

    const handleClick = (e) => {
        e.preventDefault()
        signUp(form, clear, history)
    }

    return  <div>
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
      <input
        required
        value={form.username}
        name="username"
        type="text"
        onChange={onChange}
        placeholder="User"
      />
      <button>Cadastrar</button>     
    </form>
  </div>
}

export default SignUpPage;