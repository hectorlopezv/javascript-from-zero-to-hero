const Viajes = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');   
// se trae la consulta del Modelo y le dice que Vista quiere mostrar
exports.consultasHomePage =  async (req, res) =>{
    const promises = [];
    // para pasar multiples consultas2
    /*
    const viajes = Viajes.findAll({limit: 3});

    const testimoniales = Testimonial.findAll({limit: 3})
    */
    //ahora usando async await
    const viajes = await Viajes.findAll({limit: 3});

    const testimoniales = await Testimonial.findAll({limit: 3});

    res.render('index',{
        pagina: 'Proximo Viajes',
        clase: 'home',
        viajes: viajes,
        testimoniales: testimoniales
    })

    // pasar el promise y ejecutarlo y pasamos las multiples consultas.....
    /*
    const resultado = Promise.all(promises);
    resultado
    .then(resultado => res.render('index',{
        pagina: 'Proximo Viajes',
        clase: 'home',
        viajes: resultado[0],
        testimoniales: resultado[1]
    })

    )
    .catch(error => console.log(error) )
    */
}
