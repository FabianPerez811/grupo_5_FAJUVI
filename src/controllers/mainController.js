const path = require ('path');

const mainController = {
    
    indice: (req, res) =>
        {res.render ('indice') },
    
    acceso:(req, res) => 
        {res.render ('acceso')},
        
    registro: (req, res) =>
        {res.render ('registro') },
    
}

module.exports = mainController;