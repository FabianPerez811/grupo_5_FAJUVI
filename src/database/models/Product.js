module.exports = (sequelize, dataTypes) => {
    let alias = "Products";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING
        },
        popular:{
            type: dataTypes.INTEGER
        },
        categoryId:{
            type: dataTypes.INTEGER
        },
        deleted: {
            type: dataTypes.INTEGER,
            allowNull: false
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
        });
        Product.hasMany(models.CartsProducts, {
            as: "cartProducts",
            foreignKey: "productId" 
        });
        Product.belongsToMany(models.Sizes, {
            as: 'sizes',
            through: 'products_sizes',
            foreignKey:'productId',
            otherKey:'sizeId',
            timestamps:false
        });
    }

    return Product;
}