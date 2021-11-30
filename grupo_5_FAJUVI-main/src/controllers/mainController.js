const path = require ('path');
const fs = require('fs')

const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
    
    indice: (req, res) => {      
        const productoPopulares = products.filter(producto => {
            return producto.popular == true; 
        })
        res.render ('indice',{productosPopulares:productoPopulares});
    },      
}

module.exports = mainController;