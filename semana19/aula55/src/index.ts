import { app } from "./controller/app"
import  { signUp }  from './controller/user/signUp'
import { login } from './controller/user/login'
import {allUsers} from './controller/user/allUsers'
import {deleteUser} from './controller/user/deleteUser'

app.post('/user/signup', signUp)
app.post('/user/login', login)
app.delete('/user/:id', deleteUser)
app.get('/all', allUsers)