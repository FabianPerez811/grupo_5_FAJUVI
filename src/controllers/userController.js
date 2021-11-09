const path = require ('path');
const fs = require('fs')

const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const userController = {
acceso:(req, res) => {
    res.render ('acceso')
},
    
registro: (req, res) => {
    res.render ('registro') 
},
}

module.exports = userController;