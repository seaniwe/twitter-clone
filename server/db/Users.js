"use strict";
const Sequelize = require('sequelize');

/// Модель аккаунта игрока
module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        createAt: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
        }
    },
    {
        timestamps: false
    });
    return model;
};
