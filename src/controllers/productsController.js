const path = require ('path');

const productController = {
    carrito: (req, res) => 
         {res.render ('carritoProductos') }, 
    
    detalle: (req, res) => 
        {res.render ('detalleProducto') },
   
    agregar: (req, res) =>
        {res.render ('agregarProducto') },
     
    bmproducto: (req, res) => 
        {res.render ('bmProducto') },
}

module.exports = productController;