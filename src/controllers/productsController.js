const path = require ('path');
const fs = require('fs')

const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
    productos: (req, res) => {
        // le pasamos a la vista el array de productos que obtuvimos a partir
        // del JSON.
        res.render('productos', {productos:products})
    },
    detalle: (req, res) => { //muestra detalle product
        const id = req.params.id;
        const producto = products.find(product => {
            return product.id == id; 
		})
        res.render('detalleProducto' ,{productSend:producto})
    },
    carrito: (req, res) => {
        res.render ('carritoProductos')
    },
    abmCrear: (req, res) => // muestra pantalla crear
        {res.render ('agregarProducto')
    },
    abmCreado: (req,res) =>{ // accion de agregar prod   
          let newProduct = {
			id: 22222, //products[products.length -1].id + 1,
            name: req.body.nombre,
            description: req.body.descripcion,
            price: req.body.precio,
            image: "/img/aro2.jpg" , //-------PENDIENTE--------
            category: req.body.categoria ,
		}
            products.push(newProduct);
            fs.writeFileSync(productsFilePath, JSON.stringify(products,null," "))
          res.render('bmProducto')
    }, 
    abmListar: (req, res) => { 
        res.render('bmProducto')
    },
    abmEditar: (req, res) => {
        // metodo de edicion de prod
    },
    abmEliminar:  (req, res) => {
        // metodo de eliminacion de prod
    },

    abmDetalle:(req, res) => {
        res.render ('agregarProducto')
    },

    abmEditado:(req,res) => {
        
    }
    
}

module.exports = productController;