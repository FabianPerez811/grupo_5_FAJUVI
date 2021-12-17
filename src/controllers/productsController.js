const path = require('path');
const fs = require('fs');

const db = require("../database/models");

const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productController = {
    productos: (req, res) => {
        // le pasamos a la vista el array de productos que obtuvimos a partir
        // del JSON.
        res.render('productos', { productos: products })
    },
    detalle: (req, res) => { //muestra detalle product
        const id = req.params.id;
        const producto = products.find(product => {
            return product.id == id;
        })
        res.render('detalleProducto', { productSend: producto })
    },
    carrito: (req, res) => {
        res.render('carritoProductos')
    },
    abmCrear: (req, res) => // muestra pantalla crear
    {
        res.render('abmCrear')
    },
    abmCreado: (req, res) => { // accion de agregar prod   
        let newProduct = {
            id: products[products.length -1].id + 1,
            name: req.body.nombre,
            description: req.body.descripcion,
            price: req.body.precio,
            image: req.body.foto, 
            category: req.body.categoria,
        }
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "))
        res.render('abmListar', {productos:products})
    },
    abmListar: (req, res) => {
        db.Products.findAll()
            .then(function(listProducts){
                return res.render('abmListar', { productos: listProducts })
            })
        
    },
    abmEliminar: (req, res) => {
        let id = req.params.id;

		let finalProducts = products.filter(product =>{
			return product.id != id;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts,null," "))
		res.render('abmListar', { productos: finalProducts })
        
    },

    abmDetalle: (req, res) => {
        const id = req.params.id;
        const producto = products.find(product => {
            return product.id == id;
        })
        res.render('abmDetalle', { detalleDeProducto: producto });
    },
    abmEditar: (req, res) => {
        const id = req.params.id;
        const producto = products.find(product => {
            return product.id == id;
        })
        res.render('abmEditar', { productoAEditar: producto });
    },
    abmEditado: (req, res) => {
        // agregar metodo
        let id = req.params.id;

        let productToEdit = products.find( product =>{
			return product.id == id;
		})
        let editedProduct ={
			id: id,
            name: req.body.nombre,
            description: req.body.descripcion,
            price: req.body.precio,
            image:  productToEdit.image, //chequear
            category: req.body.categoria,
            size: req.body.talle,
            popular: false
		}
        	/* modificamos le array*/
		products.forEach((producto, index) => {
			if(producto.id == id){
				products[index]=editedProduct;
			}
		});

		fs.writeFileSync(productsFilePath, JSON.stringify(products,null," "))
		res.redirect('/products/')
    },

}

module.exports = productController;