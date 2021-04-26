import {BrowserRouter, Switch, Route} from "react-router-dom"
import React from "react"
import LoginPage from "../pages/LoginPage"
import SignUpPage from "../pages/SignUpPage"
import PostListPage from "../pages/PostListPage"
import AddPostPage from "../pages/AddPostPage"
import PostDetailPage from "../pages/PostDetailPage"


const Router = () => {
    return <BrowserRouter>
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
        <Route exact path="/adicionar-post">
            <AddPostPage/>
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