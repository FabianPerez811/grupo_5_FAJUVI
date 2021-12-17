const path = require('path');
const fs = require('fs');

const db = require("../database/models");

const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productController = {
    //muestra el listado del home:
    productos: (req, res) => {
        // le pasamos a la vista el array de productos que obtuvimos a partir
        // del JSON.
        res.render('productos', { productos: products })
    },
    
    //muestra al usuario el detalle de un producto: 
    detalle: (req, res) => { 
        const id = req.params.id;
        const producto = products.find(product => {
            return product.id == id;
        })
        res.render('detalleProducto', { productSend: producto })
    },

    //muestra la vista del carrito de compras:
    carrito: (req, res) => {
        res.render('carritoProductos')
    },

    // CRUD:
    abmCrear: (req, res) => // muestra pantalla para crear
    {
        res.render('abmCrear')
    },

    abmCreado: function (req, res) { 
        console.log(req.body);// accion de agregar prod   
        db.Products.create({
            name: req.body.nombre,
            price: req.body.precio,
            description: req.body.descripcion,
            image: req.body.foto,
            categoryId: req.body.categoria,
            deleted: 0
        }).then(function () {
            console.log('Creado OK');
            return res.redirect('/admin/products');
        }, function (error) {
            console.log('error al crear el product: ' + error)
        });
    },

    abmListar: (req, res) => {
        db.Products.findAll()
            .then(function (listProducts) {
                return res.render('abmListar', { productos: listProducts })
            })
    },

    abmDetalle: function (req, res) {
        db.Products.findByPk(req.params.id)
            .then(function (product) {
                return res.render("abmDetalle", { detalleDeProducto: product });
            });
    },

    abmEditar: function (req, res) {
        db.Products.findByPk(req.params.id)
            .then(function (product) {
                return res.render('abmEditar', { productoAEditar: product });
            })
    },

    abmEditado: function (req, res) {
        db.Products.update({
            name: req.body.nombre,
            price: req.body.precio,
            description: req.body.descripcion,
            image: req.body.foto,
            //sizeId: req.body.??,
            category: req.body.categoria,
            deleted: 0
        }, {
            where: {
                id: req.params.id
            }
        });

        return res.redirect('/admin/products/' + req.params.id + '/edit');
    },

    abmEliminar: function(req,res){
        db.Products.destroy({
            where: {
                id:req.params.id
            }
        })

        return res.redirect('/admin/products/')
    }    
}

module.exports = productController;