const repro = 
{
    reproductor: function (){ 
        console.log(`reproduciendo cancion...`);
    },

    pausar: function()
    {
        console.log('pausando..');
    },

    borrar: function()
    {
        console.log(`borrando cancion.. `);
    },
    crearPlaylist: function(nombre) 
    {
        console.log(`creando la paylist de ${nombre}`);
    }


}


repro.reproductor(30);
repro.borrar = function(id) 
{
    console.log(`borrando canciones ${id}`);
}

repro.borrar(30);
repro.crearPlaylist()