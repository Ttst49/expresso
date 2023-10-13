const express = require("express")
const app = express()
const port = 3000
const pizzaRoutes = require("./routes/pizzas")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const session = require("express-session")
const cookieParser = require("cookie-parser")

mongoose
    .connect("mongodb://localhost:27017/foodtruck")
    .then(()=>{
        console.log('on est bien connecté')
    })
    .catch((err)=>{console.log(err)})


app.use(express.json())
app.use('/api/pizzas', pizzaRoutes)

app.get('/signup', function (req, res) {
    res.render('signup');
});

app.set("view engine","pug")
app.set("views","./views")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(session({ secret:"your secret key"}))


app.get('/', function (req, res){
    res.cookie(name, 'value', {maxAge: 360000});})

app.get('/clear_cookie_foo', function(req, res){
    res.clearCookie('foo');
    res.send('cookie foo cleared');
});


let users = []






app.listen(port,()=>{
    console.log("coucou c'est moi")
})
