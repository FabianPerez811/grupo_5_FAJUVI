const path = require ('path');
const fs = require('fs')
const User = require('../../Models/Users.js')

const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
  

const userController = {
registro: (req, res) => {
    res.render ('registro') 
}, 

acceso:(req, res) => {
    res.render ('acceso')
},

procesoAcceso: (req,res) =>{
    let userToLog = User.findByMail(req.body.email)
    if(userToLog){
        
    }
    return res.render('acceso',{errors:{email:{ msg: 'No exite el mail.'}}});
},

perfil: (req, res) => {
    res.render ('perfil') 
},
}

module.exports = userController;