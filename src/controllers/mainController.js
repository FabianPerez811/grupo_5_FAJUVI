const path = require ('path');
const fs = require('fs')


const db = require("../database/models");

const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
    
    indice: (req, res) => {
        const productoPopulares = db.Products.findAll(producto => {
            return producto.price <= 1300; 
        })
        res.render ('indice',{productosPopulares:productoPopulares});
    }
    
          
}

module.exports = mainController;