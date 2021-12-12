const express = require("express")
const connect = require("./configs/db")
require("dotenv").config();
const passport = require("passport")

const app = express()

app.use(express.json())


const  {signup,signin} = require("./controllers/auth")
const userController = require("./controllers/user")
const productController = require("./controllers/product")

app.post("/signup",signup)
app.post("/signin", signin)
app.use("/users", userController)
app.use("/products",productController)

app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
}));


app.listen(2233, async()=>{
    await connect()
    console.log("listing on port 2233")
})