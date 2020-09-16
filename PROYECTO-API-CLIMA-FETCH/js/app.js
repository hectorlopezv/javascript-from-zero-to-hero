//Variables
const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');


window.addEventListener('load', ()=>{
    formulario.addEventListener('submit', buscarClima);
})

function buscarClima(e) { 
    e.preventDefault();
    //validar informacion como la api espera que llege
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;
    console.log(ciudad);
    console.log(pais);

    if(ciudad === '' || pais === '') {
        console.log('hubo un error');
        mostrarError('ambos campos son obligatorios');
        return;
    }
    //validad que la ciudad exista en la pais
    // consultar la API
    consultarAPI(ciudad, pais);
    console.log('buscando clima');
}


function consultarAPI(ciudad, pais) 
{
    const appId = 'c652050a8537aa61b0b72000760d8848';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
    console.log(url);
    Spinner();//llaamos al spinner
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => {
        //limpiar el anterior
        limpiarHTML();
        if (datos.cod === '404'){
            mostrarError('ciudad no encontrada');
            return;
        }

 
        //mostrar en el html
        mostrarClima(datos);
    })
}


function Spinner()
{
    limpiarHTML();
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');
    divSpinner.innerHTML = `
    <div class="sk-circle1 sk-circle"></div>
    <div class="sk-circle2 sk-circle"></div>
    <div class="sk-circle3 sk-circle"></div>
    <div class="sk-circle4 sk-circle"></div>
    <div class="sk-circle5 sk-circle"></div>
    <div class="sk-circle6 sk-circle"></div>
    <div class="sk-circle7 sk-circle"></div>
    <div class="sk-circle8 sk-circle"></div>
    <div class="sk-circle9 sk-circle"></div>
    <div class="sk-circle10 sk-circle"></div>
    <div class="sk-circle11 sk-circle"></div>
    <div class="sk-circle12 sk-circle"></div>`;
    resultado.appendChild(divSpinner);
    


}
function limpiarHTML()
{
    while(resultado.firstChild)
    {
        resultado.removeChild(resultado.firstChild);
    }
}
function mostrarClima(datos) {
    const {main: {temp, temp_max, temp_min} } = datos;
    
    const temperatura = Math.round(temp - 273.15);
    //creamos el parrafo y los agregamos al div basicameente
    const actual = document.createElement('p');
    actual.innerHTML = `${temperatura} &#8451;`;
    actual.classList.add('font-bold', 'text-6xl');
    
    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');
    // añadimos los respectivos nodos
    resultadoDiv.appendChild(actual);
    resultado.appendChild(resultadoDiv);

}
function mostrarError(mensaje)
{
    const alerta = document.querySelector('.bg-red-100');
    // la idea es que si encuentra alerta por la classe te retorna el objecto
    // la presencia del objecto es definida como true
    if (!alerta)
    {
        console.log(mensaje);
        // valid que no tenga la classe
        //crear div para alertar
        const alerta = document.createElement('div');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 
        'rounded');
        alerta.innerHTML = `
        <strong class ="font-bold">Error!</strong>
        <span class="block">${mensaje}</span>
        `;
        container.appendChild(alerta);
        setTimeout(() => {alerta.remove()},3000)
    }

}