const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);

global.Op = Sequelize.Op

module.exports = {
    sequelize: null,
    Models: {},

    connect() {
        this.sequelize = new Sequelize('twitter', 'root', '', {
            dialect: 'mysql',
            logging: false,
        })
        this.loadModels()
    },

    loadModels() {
        fs.readdirSync(__dirname).filter(file => {
            return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
        })
            .forEach(file => {
                const model = require(path.join(__dirname, file))(this.sequelize, Sequelize.DataTypes);
                this.Models[model.name] = model;
            });
        this.sequelize.sync({ alter: true });
    },
}

