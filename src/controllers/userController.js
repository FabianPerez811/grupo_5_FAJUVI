const path = require ('path');
const bcryptjs = require('bcryptjs')
const {validationResult} = require('express-validator');
const db = require('../database/models/index.js');

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

    db.Users.findAll({where : {
        email: req.body.email,
        deleted : '1'
    }})
            .then((user)=>{
                let userDB = user[0].dataValues
                if(userDB != undefined){
                    return res.render('registro',{
                        errors:{ 
                            email:{
                                 msg:'Este mail ya esta registrado'
                                }
                            },
                        oldData: req.body 
                    })
                }else{
                    db.Users.create({
                        firstName: req.body.nombre,
                        lastName: req.body.apellido,
                        email: req.body.email,
                        password:bcryptjs.hashSync(req.body.password , 10),
                        roleId: req.body.catUsuario,
                        profileImage: req.file.filename,
                    }).then(()=>{
                        res.redirect('/user/sign-in')
                    }).catch((error)=>{
                        console.log(error);
                    })
                }
            })
},

acceso:(req, res) => {
    res.render('acceso')
},

procesoAcceso: (req,res) =>{
    db.Users.findAll({where : {
        email: req.body.email,
        deleted : '0'}})
        .then((userToLog)=>{
            
              if(userToLog){  
                let userPass = userToLog[0].dataValues.password;
                let passOK = bcryptjs.compareSync(req.body.password, userPass)
                    if(passOK){
                        delete userToLog.password
                        req.session.userLogged = userToLog[0].dataValues;
            
                        return res.redirect('/user/profile')
                    }else{
                        return res.render('acceso',{errors:{password:{ msg: 'Contraseña incorrecta.'}}});
                    }     
                    }                 
        }).catch(()=>{
            return res.render('acceso',{errors:{email:{ msg: 'No existe el mail.'}}}); 
        })
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
editarUsuario:(req, res) => {
    
   res.render('editarUsuario',{user:req.session.userLogged})
},
editadoUsuario:(req, res) => {
    const file= req.file ? req.file.filename : req.session.profileImage
    let userEdited = {
        firstName: req.body.nombre,
        lastName: req.body.apellido,
        email: req.body.email,
        profileImage: file
    }
    db.Users.update(
        userEdited
    ,{
        where:{
            id:req.session.userLogged.id
        }
    }).then(()=>{

        db.Users.findByPk(req.session.userLogged.id)
        .then((user)=>{
            req.session.userLogged = user
            res.locals.userLogged = req.session.userLogged
            res.render('perfil',{user})
        })
    }) 

 },

}

module.exports = userController;