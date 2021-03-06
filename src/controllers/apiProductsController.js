const db = require("../database/models");
const Op = db.Sequelize.Op;

module.exports = {
    list: (req, res) => {
        db.Products
            .findAll({
                include: [{ association: "category" }, { association: "sizes" }],
                where: { deleted: '0' }
            })
            .then(products => {

                const countsByCategory = {};

                products.forEach(product => {

                    const categoryId = product.category.id;
                    //voy a acceder a las propiedades de un objeto a traves de la variable categoryId
                    if (!countsByCategory[categoryId]) {
                        countsByCategory[categoryId] = {
                            count: 0,
                            category: product.category.category
                        };
                    }

                    countsByCategory[categoryId].count++;
                });
                console.log(countsByCategory)
                console.log(Object.values(countsByCategory))



                return res.status(200).json({
                    count: products.length,
                    countByCategory: Object.values(countsByCategory),
                    totalCategory: (Object.values(countsByCategory)).length,
                    products: products.map(product => {
                        return {
                            id: product.id,
                            name: product.name,
                            description: product.description,
                            sizes: product.sizes,
                            category: product.category,
                            detail: "http://localhost:3030/products/" + product.id,
                            price: "$" + product.price,
                            image: "http://localhost:3030" + product.image
                        };
                    }),
                    lastProduct: products[products.length - 1]
                })
            })
    },
    details: (req, res) => {
        db.Products.findByPk(req.params.id, {
            include: [{ association: "category" }, { association: "sizes" }],
            where: { deleted: '0' }
        })
            .then(product => {
                return res.status(200).json({
                    product: product,
                    img: "http://localhost:3030" + product.image
                })
            })

    }
}