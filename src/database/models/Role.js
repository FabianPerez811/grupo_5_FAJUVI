module.exports = (sequelize, dataTypes) => {
    let alias = "Roles";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        role:{
            type:dataTypes.STRING,
            allowNull: false
        }

    };

    let config = {
        tableName: "roles",
        timestamps: false
    }
    const Role = sequelize.define(alias, cols, config);

    Role.associate = function(models) {
        Role.hasMany(models.Users, {
            as: "roles",
            foreignKey: "roleId"
        })
    }

    return Role;
}