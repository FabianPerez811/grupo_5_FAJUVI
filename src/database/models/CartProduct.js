module.exports = (sequelize, dataTypes) => {
    let alias = "CartsProducts";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cartId:{
            type:dataTypes.INTEGER,
            allowNull: false,
            allowNull: false
        },
        productId:{
            type:dataTypes.INTEGER
        }

    };

    let config = {
        tableName: "cartsProducts",
        timestamps: false
    }
    const CartProduct = sequelize.define(alias, cols, config);
    

    CartProduct.associate = function(models) {
        CartProduct.belongsTo(models.Products, {
            as: "cartProducts",
            foreignKey: "productId" 
        }),
        CartProduct.belongsTo(models.Carts, {
            as: "cartsCartsProducts",
            foreignKey: "cartId"
        })
    }

    return CartProduct;
}