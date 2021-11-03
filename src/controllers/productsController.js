const path = require ('path');

const productController = {
    productos: (req, res) => // listado de productos
        {res.render('productos')
    },
    crear: (req, res) => // muestra pantalla crear
        {res.render ('agregarProducto')
    },
    detalle: (req, res) => { //muestra detalle product
        res.render ('detalleProducto')
    },
    agregado: (req,res) =>{ // accion de agregar prod   
          //ABM de agregado de producto
          //rediceccionar
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