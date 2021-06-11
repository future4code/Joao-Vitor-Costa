import app from "./app"
import createRecipe from "./endpoints/createRecipe"
import follow from "./endpoints/follow"
import login from "./endpoints/login"
import getMyUser from "./endpoints/myProfile"
import getOthersProfile from "./endpoints/otherProfile"
import getRecipe from "./endpoints/recipe"
import signUp from "./endpoints/signUp"

app.post("/signup", signUp)
app.post("/login", login)
app.get("/user/profile", getMyUser)
app.get("/user/:id", getOthersProfile)
app.post("/recipe", createRecipe)
app.get("/recipe/:id", getRecipe)
app.post("/user/like", follow)