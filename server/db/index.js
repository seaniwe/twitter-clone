const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);

module.exports = {    
    sequelize: null,
    Models: {},
    
    async connect() {
        this.sequelize = await new Sequelize('twitter', 'root', '', {
            dialect: 'mysql',
            logging: false,
        })
        this.loadModels();
        console.log(`db conented`)
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
    }
}