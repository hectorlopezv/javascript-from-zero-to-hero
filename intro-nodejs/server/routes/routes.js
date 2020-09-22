const express = require('express');
const router = express.Router();//router de express
//router se usa para hacer express un como mas modular
// es como un mini app contenida aqui por decirlo
// es un 

//A Router instance is a complete middleware 
//and routing system; for this reason, it is often referred to as a “mini-app”.
//cargamos la tablas....... e usamos los querys
//const Viajes = require('../models/Viajes');
//const Testimonial = require('../models/Testimoniales');

//Traemos los controlers
const nosotrosController = require ('../controller/nosotrosController');
/** controladores **/
const homeController = require('../controller/homeController');
const viajesController = require('../controller/viajesController');
const testimonialesController = require('../controller/testimonialesController');

// imporamos squelize para hacer las transactions
// que se manejada autmaticamente por sequelize
// importamos el objecto
//const db = require('../config/database');

//syntaxis vieja....
//atamos las distintas rutas basicamente.....
module.exports = function(){

    //podriamos agregar un middleware aqui mismo si se dea
    router.get('/', homeController.consultasHomePage);
    
    //cunado visita la vista
    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);

    // cuando se llena el formulario de la vista testimoniales
    router.post('/testimoniales',  testimonialesController.mostrarTestimonial);


     //podriamos agregar un middleware aqui mismo si se dea
     router.get('/viajes/:id', viajesController.mostrarViaje);


    //esto seria un ruta para cada id creamos una vista
    router.get('/viajes', viajesController.mostraViajes);
    
    //aplicando el C del MVC --> el C se encarga de cojer los datos del M y cargar la V necesaria
    //aplicando esto queda mucho mas leible
    router.get('/nosotros', nosotrosController.infoNosotros);

    return router;//retornamos el objecto ruta...
}