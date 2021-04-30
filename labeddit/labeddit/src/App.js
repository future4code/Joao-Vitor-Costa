import { ThemeProvider } from "@material-ui/styles";
import React, {useState} from "react"
import theme from "./constants/theme";
import Router from "./routes/Router"
import Header from "./components/header/Header"
import {BrowserRouter} from "react-router-dom"

const App = () => {
  const token = window.localStorage.getItem("token")
  const [text, setText] = useState(token ? "Logout": "Login")

  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Header text={text} setText={setText}/>
      <Router text={text} setText={setText}/>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
