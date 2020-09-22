//creamos los modelos .. EN OTRS PROBLEMAS LAS TABLAS
const { Sequelize, DataTypes } = require('sequelize');

// importamos el objecto
const db = require('../config/database');

const Testimonial = db.define('testimoniales',{
    nombre : {
        type : DataTypes.STRING
    },
    correo: {
        type : DataTypes.STRING
    } ,
    mensaje: {
        type: DataTypes.STRING
    }
})

module.exports = Testimonial;