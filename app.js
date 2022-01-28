// ************ Require's ************
const express = require('express');
const session = require('express-session');
const path = require('path')
const methodOverride = require('method-override'); // Para poder usar los métodos PUT y DELETE
const usuarioLogueadoMiddleware = require('./middlewares/usuarioLogueadoMiddleware'); 

// ************ express() -
const app = express();

// ************ Middlewares - (don't touch) ************
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.urlencoded({ extended: false })); // para poder usar post
app.use(express.json()); // para poder usar post
app.use(methodOverride('_method')); // Para poder usar los métodos PUT y DELETE
app.use(session({      // configurando session
    secret:"shhhh, es un secreto",
    resave:false,
    saveUninitialized:false,
})); 
app.use(usuarioLogueadoMiddleware)

// ************ Template Engine - (don't touch) ************
app.set('view engine' , 'ejs');
app.set ('views' , './src/views');

// ************ Route System require and use() - (don't touch) ************
const mainRouter = require ('./src/routes/mainRouter')
const productsRouter = require ('./src/routes/productsRouter')
const userRouter = require ('./src/routes/userRouter')
const adminRouter = require ('./src/routes/adminRouter')
const cors = require('cors');

const apiRouter = require('./src/routes/apiRouter');
app.use(cors());

app.use('/', mainRouter);
app.use('/user', userRouter);
app.use('/products', productsRouter);
app.use('/admin', adminRouter);
app.use('/api', apiRouter);

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
