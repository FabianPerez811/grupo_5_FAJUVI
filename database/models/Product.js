module.exports = (sequelize, dataTypes) => {
    let alias = "Products";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.INTEGER
        },
        /*image: {
            type: dataTypes.STRING
        },*/
        size:{
            type: dataTypes.INTEGER
        },
        deleted: {
            type: dataTypes.BOOLEAN
        }

    };

    let config = {
        tableName: "products",
        timestamps: false
    }
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.Categories, {
            as: "category",
            foreignKey: "categoryId"
        }),
        Product.belongsTo(models.Sizes, {
            as: "sizeProducts",
            foreignKey: "sizeId"
        }),
        Product.hasMany(models.CartsProducts, {
            as: "cartProducts",
            foreignKey: "productId" 
        })
    }

    return Product;
}