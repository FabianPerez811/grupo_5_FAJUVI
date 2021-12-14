module.exports = (sequelize, dataTypes) => {
    let alias = "CartsProducts";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cartId:{
            type:dataTypes.INTEGER
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
        Cart.belongsTo(models.CartsProducts, {
            as: "cartsCartsProducts",
            foreignKey: "cartId"
        })
    }

    return CartProduct;
}