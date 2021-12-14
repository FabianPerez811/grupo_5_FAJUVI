module.exports = (sequelize, dataTypes) => {
    let alias = "CartsProducts";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }

    };

    let config = {
        tableName: "cartsProducts",
        timestamps: false
    }
    const CartProduct = sequelize.define(alias, cols, config);

    return CartProduct;
}