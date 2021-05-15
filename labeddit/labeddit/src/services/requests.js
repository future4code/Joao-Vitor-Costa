import axios from "axios"
import {goToPostList} from "../routes/coordinator"

export const login = (form, clear, history, setText) => {
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login", form)
    .then((res) => {
        window.localStorage.setItem("token", res.data.token)
        goToPostList(history)
        clear()
        setText("Logout")
    }).catch((err) => {
        console.log(err.data)
        alert(err.response.data.message)
        clear()
    })
}

export const signUp = (form, clear, history) => {
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup", form)
    .then((res) => {
        window.localStorage.setItem("token", res.data.token)
        goToPostList(history)
        clear()
    }).catch((err) => {
        console.log(err)
        alert(err.response.data.message)
        clear()
    })
}