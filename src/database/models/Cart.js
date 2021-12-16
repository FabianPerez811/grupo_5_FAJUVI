module.exports = (sequelize, dataTypes) => {
    let alias = "Carts";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId:{
            type:dataTypes.INTEGER
        },
        totalPrice:{
            type:dataTypes.INTEGER
        }

    };

    let config = {
        tableName: "Carts",
        timestamps: false
    }
    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = function(models) {
        Cart.belongsTo(models.Users, {
            as: "carts",
            foreignKey: "userId"
        }),
        Cart.hasMany(models.CartsProducts, {
            as: "cartsCartsProducts",
            foreignKey: "cartId"
        })

    }

    return Cart;
}