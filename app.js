const express = require ('express');
const path = require ('path')

const app = express();

app.use(express.static(path.resolve(__dirname, "./public")));

app.listen (3030,() => {console.log ("Servidor corriendo http://localhost:3030")

})

app.get ('/', (req,res) => {res.sendFile(path.join(__dirname, '/views/index.html'))})
app.get ('/', (req,res) => {res.sendFile(path.join(__dirname, '/views/login.html'))})
app.get ('/', (req,res) => {res.sendFile(path.join(__dirname, '/views/productCart.html'))})
app.get ('/', (req,res) => {res.sendFile(path.join(__dirname, '/views/productDetail.html'))})
app.get ('/', (req,res) => {res.sendFile(path.join(__dirname, '/views/register.html'))})
