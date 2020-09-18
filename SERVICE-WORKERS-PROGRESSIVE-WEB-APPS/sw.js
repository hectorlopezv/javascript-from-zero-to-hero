// se usa Self en vez de window
//en caso de tener no tener datos carga estos estos datos
//cargas estos datos de cache y mostrarlos
const nombreCache = 'apv-v8';
const archivos = [
    '/',
    '/index.html',
    '/js/error.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js'
];
// en  caso de haber internet se trae lo que estaba 
//cacheado previamente al haber vistado la pagina
//osea vas a la pagina a entonces se va al cache y asi
//si sin conexion visitia una pagina b no va  funcionar.....



// cuando se installla el service worker
// solo se ejecuta una cuando se registra el service worker
self.addEventListener('install', e => {
    console.log('Instalando el Service Worker');
    // buen lugar para cachear archivos
    e.waitUntil(// espera que se carge todo los archivos de cache
        caches.open(nombreCache)// anadimos  el nombre del cache
        .then(cache => {
            //console.log('cachenado');
            cache.addAll(archivos);// anadimos el cache en un arreglo de archivos
        })
    )
    //hacemo caching de nuestro archivos del proyecxto
    //console.log(e);
});

// cada vez que se activa el service worker
//activamos el service worker en
self.addEventListener('activate', e => {
    console.log('se activo el service worker');
    // buen lugar para nuevas versiones de la PWA
    // ponemos la ultima version del cache
    e.waitUntil(
        caches.keys()
        .then(keys => {
            // la idea es cojer la ultima version
            return Promise.all(//esto ejecuta las promise en paralelo
                keys.filter(key => key !== nombreCache)
                .map(key => caches.delete(key)) // borra las versiones anteriores 
                    // retorna un promise y eleminamos las otra versiones de caches
            )

        })
    )
    console.log(e);
});

/*
//Evento fetch para descargar archivos estaticos
//Descargamos los archivos estaticos
self.addEventListener('fetch', e => {
    console.log('Fetch....');
    console.log(e);
    e.respondWith(
        caches.match(e.request)
        .then(respuestaCache => {
            return respuestaCache //responde con el contenido adecuado 
            //dependiendo del request 
        })
        .catch( () => caches.match('/error.html') ).then(x => x) // en caso de no encontrara 
                            //algo que no esta cacheado o visitado previamente 
                            //pero existant
                            //match devuelve un error
    )
})
*/


self.addEventListener('fetch', e => {
    console.log('Fetch... ', e);

    e.respondWith(
        caches.match(e.request)
            .then( respuestaCache => {
                return respuestaCache ;
            })
            .catch( () => caches.match('/error.html'))
    )
})


