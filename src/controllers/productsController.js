const path = require ('path');
const fs = require('fs')

const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
    productos: (req, res) => // listado de productos
        {res.render('productos')
    },
    detalle: (req, res) => { //muestra detalle product
        const id = req.params.id;
        const producto = products.find(product => {
            return product.id == id; 
		})
        res.render('detalleProducto' ,{productSend:producto})
    },
    crear: (req, res) => // muestra pantalla crear
        {res.render ('agregarProducto')
    },
    agregado: (req,res) =>{ // accion de agregar prod   
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
          res.render('productos')
    }, 
    bmproducto: (req, res) => {
        // mostrar detalle de prod a editar
    },
    editar: (req, res) => {
        // metodo de edicion de prod
    },
    eliminar:  (req, res) => {
        // metodo de eliminacion de prod
    },
    carrito: (req, res) => {
        res.render ('carritoProductos')
    },
    
}

module.exports = productController;