const express = require('express');
const path = require('path')

const app = express();

app.use(express.static(path.resolve(__dirname, "./public")));

app.listen(3030, () => {
    console.log("Servidor corriendo http://localhost:3030")

})

app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'src/views/indice.html')) })
app.get('/acceso', (req, res) => { res.sendFile(path.join(__dirname, 'src/views/acceso.html')) })
app.get('/carritoProductos', (req, res) => { res.sendFile(path.join(__dirname, 'src/views/carritoProductos.html')) })
app.get('/detalleProducto', (req, res) => { res.sendFile(path.join(__dirname, 'src/views/detalleProducto.html')) })
app.get('/registro', (req, res) => { res.sendFile(path.join(__dirname, 'src/views/registro.html')) })
app.get('/agregarProducto', (req, res) => { res.sendFile(path.join(__dirname, 'src/views/agregarProducto.html')) })
