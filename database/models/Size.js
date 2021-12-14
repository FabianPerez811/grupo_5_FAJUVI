module.exports = (sequelize, dataTypes) => {
    let alias = "Sizes";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        size:{
            type:dataTypes.STRING
        }

    };

    let config = {
        tableName: "sizes",
        timestamps: false
    }
    const Size = sequelize.define(alias, cols, config);

    Size.associate = function(models) {
        Size.hasMany(models.Products, {
            as: "sizeProducts",
            foreignKey: "sizeId"
        })
    }

    return Size;
}