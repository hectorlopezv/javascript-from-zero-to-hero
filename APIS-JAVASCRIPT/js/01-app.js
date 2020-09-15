//enviar las notificaciones al usuario para
// es necesario que el usriaro las acepter

const notifacion = document.querySelector('#notificar');

notifacion.addEventListener('click', () =>{
    Notification
    .requestPermission()
    .then( resultado =>{
        console.log(resultado);
    })
});

const verNotifacion = document.querySelector('#verNotificacion');
verNotifacion.addEventListener('click',() =>{
    if(Notification.permission === 'granted')
    {
        const notificacion = new Notification('Esta es la notifacion creada',
        {
            icon:'img/ccj.png',
            body: ' Codigo con Juan, Aprende con pryectos reales'
        });
        notificacion.onclick = function()
        {
            window.open('http://google.com');
        }
    }
})