const db = require("../database/models");
const Op = db.Sequelize.Op;

module.exports = {
    list: (req, res) => {
        db.Products
            .findAll({
                include: [{ association: "category" }, { association: "sizes" }]
            })
            .then(products => {
                return res.status(200).json({
                    count: products.length,                 
                    products: products.map(product => {
                        return {
                            id: product.id,
                            name: product.name,
                            description: product.description,
                            sizes: product.sizes,
                            category: product.category,
                            detail: "http://localhost:3030/products/" + product.id

                        };
                    })
                })
            })
    }
}