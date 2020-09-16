//Values
const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');

const objBusqueda ={ 
    moneda:'',
    criptomoneda: ''
}
//Crear un Promised
const obtenerCriptomonedas = criptomonedas => new Promise(resolve => resolve(criptomonedas) )

document.addEventListener('DOMContentLoaded', ()=>{
    consultarCriptomonedas();
    formulario.addEventListener('submit', submitFormulario);
    criptomonedasSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
});

function leerValor(e){
    objBusqueda[e.target.name] = e.target.value;  
}
function submitFormulario(e){
    e.preventDefault();
    // validad
    const {moneda, criptomoneda} = objBusqueda;
    if(moneda==='' || criptomoneda===''){//validacion si los campos estan vacios
        monstrarAlerta('ambos campos son obligatorios');
    }

    //consultar la API con los resultados
}

function monstrarAlerta(mensaje){
    console.log(mensaje);
    const existe = document.querySelector('.error');
    if(!existe){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');
        divMensaje.textContent = mensaje;

        formulario.appendChild(divMensaje);
        setTimeout(() =>{divMensaje.remove()},3000);
    }
}

function consultarCriptomonedas(){
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
    fetch(url)
    .then(respuesta => respuesta.json())
    //creamos un PROMISE para poder retonar el resultado en
    // envez de llamar otra funcion como un callback
    //estamos devolviendo las cripmonedas en si
    .then(datos => obtenerCriptomonedas(datos.Data))
    .then(criptomonedas=> selectCriptomonedas(criptomonedas));
}

function selectCriptomonedas(criptomonedas){
    criptomonedas.forEach(cripto => {
        console.log(cripto);
        const {FullName, Name} = cripto.CoinInfo;

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        criptomonedasSelect.appendChild(option);
    });
}

