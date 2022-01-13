const { validationResult } = require('express-validator');
const db = require("../database/models");
const Sequelize = require('sequelize');


const productController = {
    //muestra al usuario el listado de todos los productos disponibles: 
    productos: function (req, res) {
        db.Products.findAll({ where: { deleted: '0' } }).then(function (productos) {
            return res.render("productos", { productos: productos });
        });
    },

    //muestra al usuario el detalle de un producto: 
    detalle: function (req, res) {
        db.Products.findByPk(req.params.id)
            .then(function (producto) {
                if (producto) {
                    return res.render('detalleProducto', { productSend: producto });
                } else {
                    return res.render('error', { mensaje: "El producto " + req.params.id + " no existe" });
                }

            });
    },

    //muestra la vista del carrito de compras:
    carrito: (req, res) => {
        res.render('carritoProductos')
    },

    //permite al usuario buscar un producto:
    search: (req, res) => {
        console.log(req.query.search);
        const Op = Sequelize.Op;
        db.Products.findAll({
            where: {
                name: {
                    [Op.like]: "%" + req.query.search + "%"
                },
                deleted: 0
            }

        }).then(function (productosEncontrados) {
            res.render('resultadoBusqueda', { search: req.query.search, resultado: productosEncontrados });
        })

    },


    // CRUD:
    abmCrear: (req, res) => // muestra pantalla para crear
    {
        res.render('abmCrear')
    },

    abmCreado: function (req, res) {// accion de agregar prod  
        let errors = validationResult(req);
        console.log(errors.mapped())
        if (errors.isEmpty()) {
            db.Products.create({
                name: req.body.nombre,
                price: req.body.precio,
                description: req.body.descripcion,
                image: req.body.foto,
                categoryId: req.body.categoria,
                deleted: 0
            }).then(function (producto) {
                const talles = req.body.talle ? req.body.talle : [];
                producto.setSizes(talles)
                    .then(function () {
                        return res.redirect('/admin/products');
                    });

            }, function (error) {
                console.log('error al crear el producto: ' + error)
            });
        } else {
            res.render('abmCrear', {
                erroresCrear: errors.mapped(),
                datoCargado: req.body
            });
        }

    },

    abmListar: (req, res) => {
        db.Products.findAll({ where: { deleted: '0' } })
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
        db.Products.findByPk(req.params.id, {
            include: [{ association: "category" }, { association: "sizes" }]
        })
            .then(function (product) {
                if (product) {
                    const productSizes = product.sizes.map(function (size) {
                        return size.id;
                    });
                    return res.render('abmEditar', { productoAEditar: product, sizes: productSizes });
                } else {
                    return res.render("error", { mensaje: "No se encontró el producto " + req.params.id });
                }
            }).catch(function (error) {
                console.log(error);
            })
    },

    abmEditado: function (req, res) {
        let errors = validationResult(req);

        db.Products.findByPk(req.params.id, {
            include: [{ association: "category" }, { association: "sizes" }]
        }).then(function (product) {

            const productSizes = product.sizes.map(function (size) {
                return size.id;
            });

            const talles = req.body.talle ? req.body.talle : [];

            if (errors.isEmpty()) {
                product.setSizes(talles).then(function () {
                    db.Products.update({
                        name: req.body.nombre,
                        price: req.body.precio,
                        description: req.body.descripcion,
                        image: "/img/" + req.file.filename,
                        category: req.body.categoria,
                        deleted: 0
                    }, {
                        where: {
                            id: req.params.id
                        }
                    }).then(function () {
                        return res.redirect('/admin/products/' + req.params.id + '/edit');
                    });
                })
            } else {
                res.render('abmEditar', {
                    erroresEditar: errors.mapped(),
                    datoCargado: req.body,
                    productoAEditar: product,
                    sizes: productSizes
                });
            }
        });


    },

    abmEliminar: function (req, res) {
        db.Products.update({
            deleted: 1
        }, {
            where: {
                id: req.params.id
            }
        })

        return res.redirect('/admin/products/')
    },
    searchProducts: (req, res) => {
        console.log(req.query.search);
        const Op = Sequelize.Op;
        db.Products.findAll({
            where: {
                name: {
                    [Op.like]: "%" + req.query.search + "%"
                }
            }

        }).then(function (productos) {
            res.render('busquedaProducto', { search: req.query.search, resultado: productos });
        })

    }
}

module.exports = productController;