import {BrowserRouter, Switch, Route} from "react-router-dom"
import React from "react"
import LoginPage from "../pages/login/LoginPage"
import SignUpPage from "../pages/signup/SignUpPage"
import PostListPage from "../pages/list/PostListPage"
import PostDetailPage from "../pages/details/PostDetailPage"
import Header from "../components/header/Header"


const Router = () => {
    return <BrowserRouter>
    <Header />
    <Switch>
        <Route exact path="/login">
            <LoginPage/>
        </Route>
        <Route exact path="/cadastro">
            <SignUpPage/>
        </Route>
        <Route exact path="/">
            <PostListPage/>
        </Route>
        <Route exact path="/detalhe/:id">
            <PostDetailPage/>
        </Route>
        <Route>
            <div>Erro 404</div>
        </Route>
    </Switch>
    </BrowserRouter>
}

export default Router;