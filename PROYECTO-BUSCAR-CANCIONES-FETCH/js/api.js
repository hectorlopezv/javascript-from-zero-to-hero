import * as UI from './interfaz.js';// syntaxis modulo

export default class API
{   
    constructor(artista, cancion)
    {
        this.artista = artista;
        this.cancion = cancion;
        //podriamos llamaos aqui para consultar de una la consultar API con
        //o llamarlo externamente
    }
    
    consultarAPI()
    {
        console.log('Consultar API');
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        fetch(url)
        .then(response => response.json())
        .then(data =>{ 
            if ( data.lyrics){
                const{ lyrics } = data;
                UI.divResultado.textContent = lyrics;
                UI.headingResultado.textContent = `Letra de la cancion: ${this.cancion}`;
            }
            else{
                UI.divMensajesh.textContent = ` La cancion no existe, prueba con otra busquerda`;
                UI.divMensajesh.classList.add('error');
                setTimeout(() =>{
                    UI.divMensajesh.textContent = '';
                    UI.divMensajesh.classList.remove('error');
                },3000)
            }
        })
        .catch(error => console.log(error));
    }
}