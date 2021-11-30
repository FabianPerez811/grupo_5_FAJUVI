const path = require ('path');
const fs = require('fs')
const User = require('../../Models/Users.js')
const bcryptjs = require('bcryptjs')
const usersFilePath = path.join(__dirname, '../../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const {validationResult} = require('express-validator')

const userController = {

registro: (req, res) => {
    res.render ('registro') 
}, 

procesoRegistro: (req, res) => { //crear usuario
   const resultadoValidacion = validationResult(req);

    if(resultadoValidacion.errors.length > 0){
        return res.render('registro',{
            errors: resultadoValidacion.mapped(),
            oldData: req.body,
        })
    }

    let userDB = User.findByMail(req.body.email);

    if(userDB){
        return res.render('registro',{
            errors:{ 
                email:{
                     msg:'Este mail ya esta registrado'
                    }
                },
            oldData: req.body   
        });
    }

    let newUser = {
        id: User.generarID(),
        firstName: req.body.nombre,
        lastName: req.body.apellido,
        email: req.body.email,
        password:bcryptjs.hashSync(req.body.password , 10),
        category: req.body.catUsuario,
        image: req.file.filename,
    }
    users.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "))
    res.redirect('/user/sign-in')

},

acceso:(req, res) => {
    res.render('acceso')
},

procesoAcceso: (req,res) =>{
    let userToLog = User.findByMail(req.body.email)
    
    if(userToLog){  
    let passOK = bcryptjs.compareSync(req.body.password, userToLog.password)
        if(passOK){
            delete userToLog.password
            req.session.userLogged = userToLog;

                if(req.body.remember)

            return res.redirect('/user/profile')
        }return res.render('acceso',{errors:{password:{ msg: 'Contraseña incorrecta.'}}});
    }
    return res.render('acceso',{errors:{email:{ msg: 'No exite el mail.'}}});
},

perfil: (req, res) => {
    res.render ('perfil',{
        user:req.session.userLogged,
    }) 
},
cerrrarSesion:(req, res) => {
    req.session.destroy();
    return res.redirect('/')
},
}

module.exports = userController;