const Viaje = require('../models/Viajes');
const Viajes = require('../models/Viajes');
exports.mostraViajes =  async (req, res) =>{
    const viajes = await Viaje.findAll();
    res.render('viajes',{
        pagina: " Proximo Viajes",
        viajes
    });
    // sin await
    /*
    Viajes.findAll()
        .then(viajes => {
            res.render('viajes',{
                pagina: " Proximo Viajes",
                viajes
            })
        } ) 
        .catch(error => console.log(error) )
    */
};

exports.mostrarViaje =  async (req, res) =>{
    //aunque pase cualquier id pase la misa vista
    
    const viaje  = await Viajes.findByPk(req.params.id);
    res.render('viaje',{
        pagina: `Viaje ${req.params.id}`,
        viaje
    });
    
    /*
    Viajes.findByPk(req.params.id)
        .then(viaje => {
            res.render('viaje',{
                pagina: `Viaje ${req.params.id}`,
                viaje
            })
        } ) 
        .catch(error => console.log(error) )
    */        
};