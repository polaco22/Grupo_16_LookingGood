module.exports = (sequelize, dataTypes) => {
    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        fullName: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        userName: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        dni: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        domicilio: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        provincia: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        ciudad: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: dataTypes.TEXT,
            allowNull: false,
        },
        avatar: {
            type: dataTypes.STRING,
        },
        admin: {
            type: dataTypes.TINYINT,
            allowNull: false,
        }
    };
    let config = {
        tableName: "users_data",
        timestamps: false,
    };
    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {

    User.hasMany(models.Cart, {
        as: "users",
        foreignKey:"userId",
    });
    }

    return User;
}
