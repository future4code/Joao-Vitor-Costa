import axios from "axios"
import {goToPostList} from "../routes/coordinator"

export const login = (form, clear, history) => {
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login", form)
    .then((res) => {
        window.localStorage.setItem("token", res.data.token)
        goToPostList(history)
    }).catch((err) => {
        console.log(err.data)
        alert("Email ou senha invalidos!")
        clear()
    })
}

export const signUp = (form, clear, history) => {
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup", form)
    .then((res) => {
        window.localStorage.setItem("token", res.data.token)
        goToPostList(history)
    }).catch((err) => {
        console.log(err)
        alert("Email ou senha invalidos!")
        clear()
    })
}