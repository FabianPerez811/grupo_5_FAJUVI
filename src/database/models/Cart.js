module.exports = (sequelize, dataTypes) => {
    let alias = "Carts";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId:{
            type:dataTypes.INTEGER,
            allowNull: false
        },
        totalPrice:{
            type:dataTypes.INTEGER,
            allowNull: false
        }

    };

    let config = {
        tableName: "carts",
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