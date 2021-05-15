import {Switch, Route} from "react-router-dom"
import React from "react"
import LoginPage from "../pages/login/LoginPage"
import SignUpPage from "../pages/signup/SignUpPage"
import PostListPage from "../pages/list/PostListPage"
import PostDetailPage from "../pages/details/PostDetailPage"

const Router = ({text, setText}) => {
    return <Switch>
        <Route exact path="/login">
            <LoginPage text={text} setText={setText}/>
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
}

export default Router;