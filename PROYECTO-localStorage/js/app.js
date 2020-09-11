//variables
const lista_id = document.querySelector('#lista-tweets');
const formulario = document.querySelector('#formulario');
let tweets = [];



//EVENT listeners
function eventListeners()
{
    formulario.addEventListener('submit', agregarTweet);
}

document.addEventListener("DOMContentLoaded",() => 
    {
        cargarTweets();
        eventListeners();
    }
)


//Funciones
function agregarTweet(e)
{
    e.preventDefault();
    //textArea
    const tweet = document.querySelector('#tweet').value;
    console.log(tweet);

    //validacion
    if (tweet === '')
    {
        mostrarError('No puede ir vacio');
        return;
    }
    //añadir arreglo
    console.log('Creando un tweet');
    const tweetObj = 
    {
        id: Date.now(),
        tweet: tweet
    }
    //añadiendo tweets al arreglo
    tweets = [...tweets, tweetObj];
    console.log(tweets);

    //crear HTML
    crearHTML();

    //reinciar el formulario
    formulario.reset();
}



//Mostrar Mensaje de error
function mostrarError(error)
{
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');
    
    document.querySelector('#contenido').appendChild(mensajeError);
    setTimeout(() =>
        {
            mensajeError.remove()
        }, 3000
    );
}


function crearHTML()
{
    limpiarHTML();
    //si esta vacio que
    if (tweets.length > 0)
    {
        tweets.forEach( (el)=>
        {
            //agregar btn de eliminar
            const btn = document.createElement('a');
            btn.classList.add('borrar-tweet');
            btn.innerText = 'X';
 
            //crear html
            const parr = document.createElement('li');
            parr.innerText = `ID: ${el.id} - Text: ${el.tweet}`;
            // añadir la funcion elimnar
            btn.onclick = () => 
            {
                borrarTweet(parr, el);
            }


            // asignar el boton
            parr.appendChild(btn);
            //añadir tweet
            lista_id.appendChild(parr);
        }
        )
    }
    //meter tweets al local storage
    sincronizarStorage();
}

function limpiarHTML()
{
    while(lista_id.firstChild)
    {
        lista_id.removeChild(lista_id.firstChild);
    }
}


//agregar tweets actuales a localStorage
function sincronizarStorage ()
{
    console.log('sincro');
    console.log(tweets);
    localStorage.setItem('tweets', JSON.stringify(tweets));

}

//cargar tweets del localstorage
function cargarTweets()
{
    console.log('cargando tweets')
    localTweets = JSON.parse(localStorage.getItem('tweets'));
    console.log(localTweets);
    if (localTweets != null && localTweets.length > 0)
    {
        tweets = localTweets
    }
}

//borrar tweets
function borrarTweet(el_html, el_obj)
{
    console.log(el_html);
    console.log('el_obj')
    console.log(el_obj);
    tweets = tweets.filter((el)=>
        {
            //console.log(el);
            //console.log(typeof(el_obj.id));
            //console.log(typeof(el.id));
            return el_obj.id !== el.id
        }
    );
    console.log(tweets);
    el_html.remove();
    localStorage.setItem('tweets', JSON.stringify(tweets) );
}