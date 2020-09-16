//Values
const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');
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
        return;
    }

    //consultar la API con los resultados
    consultarAPI();
}
function consultarAPI(){
    const {moneda, criptomoneda} = objBusqueda;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    
    mostrarSpinner();
    fetch(url)
    .then(response => response.json())
    .then(cotizacion =>{
        
        monstrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
    })
}
function mostrarSpinner(){
    limpiarHTML();
    console.log('entro al spinner');
    const btn = document.createElement('div');
    btn.classList.add('spinner');
    btn.innerHTML = `
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>`;
    resultado.appendChild(btn);
}
function monstrarCotizacionHTML(cotizacion){
    limpiarHTML();
    console.log(cotizacion);
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = cotizacion;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El Precio es: <span>${PRICE}</span>`;

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `<p>Precio más alto del día <span>${HIGHDAY}</span>`;

    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `<p>Precio más bajo del día <span>${LOWDAY}</span>`;

    const ultimasHoras = document.createElement('p');
    ultimasHoras.innerHTML = `<p>Variación últimas 24 horas <span>${CHANGEPCT24HOUR}%</span>`;

    const ultimaActualización = document.createElement('p');
    ultimaActualización.innerHTML = `<p>Última Actualización <span>${LASTUPDATE}</span>`;



    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualización);

}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
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
        //console.log(cripto);
        const {FullName, Name} = cripto.CoinInfo;

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        criptomonedasSelect.appendChild(option);
    });
}

