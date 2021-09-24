const express = require ('express');
const path = require ('path')

const app = express();

app.use(express.static(path.resolve(__dirname, "./public")));

app.listen (3030,() => {console.log ("Servidor corriendo http://localhost:3030")

})

app.get ('/', (req,res) => {res.sendFile(path.join(__dirname, '/views/indice.html'))})
app.get ('/', (req,res) => {res.sendFile(path.join(__dirname, '/views/acceso.html'))})
app.get ('/carritoProductos', (req,res) => {res.sendFile(path.join(__dirname, '/views/carritoProductos.html'))})
app.get ('/', (req,res) => {res.sendFile(path.join(__dirname, '/views/detalleProducto.html'))})
app.get ('/', (req,res) => {res.sendFile(path.join(__dirname, '/views/registro.html'))})
