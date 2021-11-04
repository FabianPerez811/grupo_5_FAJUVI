// ************ Require's ************
const express = require('express');
const path = require('path')
//const methodOverride = require('method-override'); // Para poder usar los métodos PUT y DELETE

// ************ express() -
const app = express();

// ************ Middlewares - (don't touch) ************
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.urlencoded({ extended: false })); // para poder usar post
app.use(express.json()); // para poder usar post
//app.use(methodOverride('_method')); // Para poder usar los métodos PUT y DELETE

// ************ Template Engine - (don't touch) ************
app.set('view engine' , 'ejs');
app.set ('views' , './src/views');

// ************ Route System require and use() - (don't touch) ************
const mainRouter = require ('./src/routes/mainRouter')
const productsRouter = require ('./src/routes/productsRouter')

app.use('/', mainRouter);
app.use('/', productsRouter);

// ************ Set the server to listen - (don't touch) ************
app.listen(3030, () => {
    console.log("Servidor corriendo http://localhost:3030")

})

//app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'src/views/indice.html')) })
//app.get('/acceso', (req, res) => { res.sendFile(path.join(__dirname, 'src/views/acceso.html')) })
//app.get('/carritoProductos', (req, res) => { res.sendFile(path.join(__dirname, 'src/views/carritoProductos.html')) })
//app.get('/detalleProducto', (req, res) => { res.sendFile(path.join(__dirname, 'src/views/detalleProducto.html')) })
//app.get('/registro', (req, res) => { res.sendFile(path.join(__dirname, 'src/views/registro.html')) })
//app.get('/agregarProducto', (req, res) => { res.sendFile(path.join(__dirname, 'src/views/agregarProducto.html')) })
//app.get('/bmProducto', (req, res) => { res.sendFile(path.join(__dirname, 'src/views/bmProducto.html')) })
