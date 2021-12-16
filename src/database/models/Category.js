module.exports = (sequelize, dataTypes) => {
    let alias = "Categories";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category:{
            type:dataTypes.STRING
        }

    };

    let config = {
        tableName: "Categories",
        timestamps: false
    }
    const Category = sequelize.define(alias, cols, config);

    Category.associate = function(models) {
        Category.hasMany(models.Products, {
            as: "products",
            foreignKey: "categoryId"
        })
    }

    return Category;
}