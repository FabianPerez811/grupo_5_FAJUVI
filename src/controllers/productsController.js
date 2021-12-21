const db = require("../database/models");

const productController = {
    //muestra al usuario el listado de todos los productos disponibles: 
    productos: function (req, res) {
        db.Products.findAll().then(function (productos) {
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

    // CRUD:
    abmCrear: (req, res) => // muestra pantalla para crear
    {
        res.render('abmCrear')
    },

    abmCreado: function (req, res) {// accion de agregar prod   
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
        console.log(req.file);

        db.Products.findByPk(req.params.id).then(function (product) {

            const talles = req.body.talle ? req.body.talle : [];
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
                });
            }).then(function () {
                return res.redirect('/admin/products/' + req.params.id + '/edit');
            });
        });
    },

    abmEliminar: function (req, res) {//hacer softDeleted
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })

        return res.redirect('/admin/products/')
    }
}

module.exports = productController;