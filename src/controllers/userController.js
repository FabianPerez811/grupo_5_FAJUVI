const path = require ('path');
const fs = require('fs')
const User = require('../../Models/Users.js')

const usersFilePath = path.join(__dirname, '../../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userController = {

registro: (req, res) => {
    res.render ('registro') 
}, 

procesoRegistro: (req, res) => { //crear usuario
    let newUser = {
        id: User.generarID(),
        firstName: req.body.nombre,
        lastName: req.body.apellido,
        email: req.body.email,
        password: req.body.password,
        category: req.body.catUsuario,
        image: req.file.filename,
    }
    users.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "))
    res.render('acceso')

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