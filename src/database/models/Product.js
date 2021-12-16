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
        price: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        },
        popular:{
            type: dataTypes.INTEGER
        },
        sizeId:{
            type: dataTypes.INTEGER
        },
        categoryId:{
            type: dataTypes.INTEGER
        },
        deleted: {
            type: dataTypes.INTEGER
        }

    };

    let config = {
        tableName: "Products",
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