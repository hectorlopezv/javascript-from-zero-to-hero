//Variables
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

document.addEventListener('DOMContentLoaded', () =>{
    formulario.addEventListener('submit', validadBusqueda);
});

function validadBusqueda(e){
    e.preventDefault();
    //miramos si esta vacio literal
    const busqueda = document.querySelector('#busqueda').value;
    console.log(busqueda);
    if (busqueda.length < 3){
        mostrarMensaje('Busquerad muy corta... añade mas informacion');
    }

    consultarAPI(busqueda);

}

function consultarAPI(busqueda){
    const githubURL =`https://jobs.github.com/positions.json?description=${busqueda}`;
    const url = `https://api.allorigins.win/get?url=${ encodeURIComponent(githubURL) }`
    console.log(axios);
    //obtenemos la ulr
    axios.get(url)
    .then(respueta => monstrarVacantes( JSON.parse(respueta.data.contents) )   );
}


function monstrarVacantes(vacantes){
    //limpiar el html
    console.log(vacantes);
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }

    if (vacantes.length > 0){


        resultado.classList.add('grid');

        vacantes.forEach( el =>{
            const {title, company, type, url} = el;
            resultado.innerHTML += `
            <div class="shadow bg-white p-6 rounded">
            <h2 class="text-2xl font-light mb-4">${title}</h2>
            <p class="font-bold uppercase">Compañia:  <span class="font-light normal-case">${company} </span></p>
            <p class="font-bold uppercase">Tipo de Contrato:   <span class="font-light normal-case">${type} </span></p>
            <a class="bg-teal-500 max-w-lg mx-auto mt-3 rounded p-2 block uppercase font-xl font-bold text-white text-center" href="${url}">Ver Vacante</a>
        </div>`;
        })
    }else{
        const noResultado = document.createElement('p');
        noResultado.classList.add('text-center', 'mt-10', 'text-gray-600', 'w-full');
        noResultado.textContent = 'No hay vancantes, intenta con otro termino busquerda ';
        resultado.appendChild(noResultado);
        resultado.classList.remove('grid');
    }

}
function mostrarMensaje(mensaje){
    const existe = document.querySelector('.alerta');
    if(!existe){
        const alerta = document.createElement('div');
        alerta.classList.add('bg-gray-100', 'p-3', 'text-center', 'mt-3', 'alerta');
        alerta.textContent = mensaje;
        formulario.appendChild(alerta);
        setTimeout(() =>{alerta.remove()},3000);
    }
}