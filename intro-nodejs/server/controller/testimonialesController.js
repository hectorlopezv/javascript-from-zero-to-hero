const Testimonial = require('../models/Testimoniales');
const db = require('../config/database');

exports.mostrarTestimoniales = async (req, res) =>{
    const testimoniales = await Testimonial.findAll();
    res.render('testimoniales',{
        pagina: `Viaje ${req.params.id}`,
        testimoniales
    });
    /*
    Testimonial.findAll()
    .then(testimoniales => {
        res.render('testimoniales',{
            pagina: `Viaje ${req.params.id}`,
            testimoniales
        })
    } ) 
    .catch(error => console.log(error) )
    */
};

exports.mostrarTestimonial = async (req, res) =>{
    // validamos que todos los campos esten 
    console.log('en el FORM');
    let { nombre, email, mensaje} = req.body;


    let errores = [];
    
    if (!nombre) {
        errores.push({'mensaje': 'Agrega tu Nombre'});
    }
    
    if (!email) {
        errores.push({'mensaje': 'Agrega tu Correo'});
    }
    
    if (!mensaje) {
        errores.push({'mensaje': 'Agrega tu Mensaje'});
    }
    //revisamos los errores
    if (errores.length > 0) {
        //muestra vista de errores
        console.log('aqui muestra la vista del error');
        res.render('testimoniales', { //redireccionamos a la url si encuentra algun campo vacio
            errores,
            nombre, 
            email,
            mensaje
        });
    }
    else
    {
        //almacenar en la base de datos
        console.log('entro a validacion');
        /*
        const user = Testimonial.create({
            nombre,
            email,
            mensaje
          })
          .then()
          .catch()
          */
         await db.transaction(async t => {
            const user = await Testimonial.create({
                nombre,
                correo: email,
                mensaje
            }, { transaction: t });
            // aqui ya fue exitoso
            return user;
        })
        .then(t => {
            console.log(t);
            res.redirect('/testimoniales');
        })
        .catch(error => console.log(error));

        //con las promises son asynchornas esto se ejecuta 
        console.log('paso validacion');
    }

};