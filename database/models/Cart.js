module.exports = (sequelize, dataTypes) => {
    let alias = "Carts";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        totalPrice:{
            type:dataTypes.INTEGER
        }

    };

    let config = {
        tableName: "carts",
        timestamps: false
    }
    const Cart = sequelize.define(alias, cols, config);

    return Cart;
}