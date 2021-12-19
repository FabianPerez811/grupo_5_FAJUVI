const path = require('path');
const fs = require('fs')


const db = require("../database/models");

const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {

    indice: (req, res) => {
        const promise = db.Products.findAll();

        promise.then(function (productos) {
                const productosPopulares = productos.filter(function (producto) {
                    return producto.price <= 1300;
                })
                res.render('indice', { productosPopulares: productosPopulares })
            })
            .catch(function (error) {
                console.error(error)
            })
    }

}

module.exports = mainController;