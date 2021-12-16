module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: dataTypes.STRING
        },
        lastName: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        profileImage: {
            type: dataTypes.STRING,
            allowNull: false
        },
        roleId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        deleted: {
            type: dataTypes.BOOLEAN
        }

    };

    let config = {
        tableName: "users",
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.belongsTo(models.Roles, {
            as: "roles",
            foreignKey: "roleId"
        }),
        User.hasMany(models.Carts, {
            as: "carts",
            foreignKey: "userId"
        })

    }
  

    return User;
}