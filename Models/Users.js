// 1. Guardar el usuario
// 2. Buscar al usuario que se quiere loguear por email
// 3. Buscar a un usuaroi por id

const fs = require('fs');


const User = {
    fileName: './data/users.json',
    
    datos: function () { //obtengo todos los usuarios
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
      },
    
    generarID: function () { 
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser){
            return lastUser.id + 1;
        }
        return 1;
     },

    findAll: function () {
          return this.datos();
        },
    
    findByPk:function (id) {
        let allUsers= this.findAll();
        let userFound = allUsers.find(user => user.id == id)
        return userFound;
      },
    
    findByMail:function (mail) {
        let allUsers= this.findAll();
        let userFound = allUsers.find(user => user.mail == mail)
        return userFound;
      },

    create: function (userData) {
        let allUsers= this.findAll();
        let newUser={
            id:this.generarID(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers,null,' '))
        return newUser;
      },
    delete: function (id) {
        let allUsers= this.findAll();
        let finalUsers = allUsers.filter(user => user.id != id)
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers,null,' '))
        return true
      }
}

module.exports= User;