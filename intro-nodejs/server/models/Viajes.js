//creamos los modelos .. EN OTRS PROBLEMAS LAS TABLAS
const { Sequelize, DataTypes } = require('sequelize');

// importamos el objecto
const db = require('../config/database');

//definimos el modelo(Tabla) de Viaje
const Viaje = db.define('viajes', {
    //definimos las columnas de la tabla VIAJE
    titulo: {
        type: DataTypes.STRING,
        allowNull: false     
    },
    precio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_ida: {
        type: DataTypes.DATE
    },
    fecha_vuelta: {
        type: DataTypes.DATE
    },
    imagen: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    disponibles: {
        type: DataTypes.STRING
    }

});

module.exports = Viaje;

