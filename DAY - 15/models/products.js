const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

module.exports = sequelize.define("products", {

    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    count: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    image: {
        type: DataTypes.STRING
    }
});



























// // Using Postgres

// const { DataTypes } = require("sequelize");
// const sequelize = require("../database/index");

// const Product = sequelize.define("product", {
//     id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true,
//     },
//     title: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     price: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//     },
//     //no. of products left
//     count: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//     },
//     description: {
//         type: DataTypes.TEXT,
//     },
//     image: {
//         type: DataTypes.STRING,
//     },
// });

// module.exports = Product;