module.exports = (sequelize, dataTypes) => {
    let alias = "Sizes";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        size:{
            type:dataTypes.STRING,
            allowNull: false
        }

    };

    let config = {
        tableName: "sizes",
        timestamps: false
    }
    const Size = sequelize.define(alias, cols, config);

    Size.associate = function(models) {
        Sizes.belongsToMany(models.Products, {
            as: 'products',
            through: 'products_sizes',
            foreignKey:'sizeId',
            otherKey:'productId',
            timestamps:false
        });
    }

    return Size;
}