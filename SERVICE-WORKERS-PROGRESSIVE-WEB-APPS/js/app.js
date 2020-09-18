if ( 'serviceWorker' in navigator ){ // miramos si el browser lo soporta


    //registramos el service worker
    //NOS PERMITES
    //BACKGROUND SYNC , PUSH NOTIFICAITONS botón
    // ES para mejorar la experiencia offline de un usuario en
    //maneja el core de LAZY loading es solo usado on demande
    //BUENO para cache de datos staticos
    navigator.serviceWorker.register('../sw.js')
    .then(registrado => console.log('se Instalo correctamente', registrado))
    .catch(error => console.log(error));
}
else 
{
    console.log('Service Workers no soportados');
}