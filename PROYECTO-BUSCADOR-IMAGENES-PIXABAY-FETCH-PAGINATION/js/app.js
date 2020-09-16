//Variables

const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const paginacionDiv = document.querySelector('#paginacion');

const registrosPorPagina = 40;
let totalPaginas;
let iterador;
let paginaActual = 1;

window.onload = () =>{
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e){
    e.preventDefault();
    const terminoBusqueda = document.querySelector('#termino').value;
    //valido si esta vacio
    if (terminoBusqueda === '')
    {
        monstrarAlerta('esta vacio');
        return;
    }
    paginaActual = 1;
    //hacemos consulta a la API
    buscarImagenes();

}

function monstrarAlerta(mensaje)
{
    const alerta_ = document.querySelector('.bg-red-100');
    if(!alerta_){
        const alerta = document.createElement('p');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded'
        ,'max-w-lg', 'mx-auto', 'mt-6', 'text-center');

        alerta.innerHTML = `
            <strong class ="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;
        formulario.appendChild(alerta);

        setTimeout(() =>{alerta.remove()},3000);
    }

}

function buscarImagenes(){
    const terminoBusqueda = document.querySelector('#termino').value;
    const apiKey = '18323994-662d67f89fac8b4c6e4b7ac00';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${terminoBusqueda}&per_page=${registrosPorPagina}&page=${paginaActual}`;
    console.log(url);
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => {
        totalPaginas = calcularPaginas(datos.totalHits);
        console.log(totalPaginas);
        mostrarImagenes(datos.hits);
    });
}

//generador que registra la cantida de elemtnos deacuerdo a la pagina 

function *crearPaginador(total){
    for(let i=1; i<= total ; i++)
    {
        yield i;
    }
}
function calcularPaginas(total){
    return parseInt(Math.ceil(total/registrosPorPagina));
}

function mostrarImagenes(imagenes)
{
    //limpiar html
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }

    // montar las imagenes
    console.log(imagenes);
    imagenes.forEach((imagen)=>{
        const {previewURL, likes, views, largeImageURL} = imagen;
        resultado.innerHTML += `
        <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
        <div class="bg-white">
            <img class="w-full" src="${previewURL}" >

            <div class="p-4">
                <p class="font-bold"> ${likes} <span class="font-light"> Me Gusta </span> </p>
                <p class="font-bold"> ${views} <span class="font-light"> Veces Vista </span> </p>

                <a 
                    class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
                    href="${largeImageURL}" target="_blank" rel="noopener noreferrer" 
                >
                    Ver Imagen
                </a>
            </div>
        </div>
    </div>
        `
    });

    //limpiar paginador
    while(paginacionDiv.firstChild){
        paginacionDiv.removeChild(paginacionDiv.firstChild);
    }
    //imprimir los botones del paginador
    imprimirPaginador();

}

function imprimirPaginador(){
    //implementar un paginador usando un iterador    
    iterador = crearPaginador(totalPaginas);
        
        while(true){
            const{value, done} =  iterador.next();
            if(done) return;

            //crear boton si todavia no es true
            const boton = document.createElement('a');
            boton.href = '#';
            boton.dataset.pagina = value;
            boton.textContent = value;
            boton.onclick = (e) =>{
                e.preventDefault();
                paginaActual = value;
                console.log(paginaActual);
                buscarImagenes();            
        }
            boton.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'mr-2', 'mb-4', 'rounded');

            //añadir la html

            paginacionDiv.appendChild(boton);
        }
}

