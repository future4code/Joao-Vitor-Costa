import app from "./app"
import login from "./endpoints/login"
import getMyUser from "./endpoints/myProfile"
import getOthersProfile from "./endpoints/otherProfile"
import signUp from "./endpoints/signUp"

app.post("/signup", signUp)
app.post("/login", login)
app.get("/user/profile", getMyUser)
app.get("/user/:id", getOthersProfile)