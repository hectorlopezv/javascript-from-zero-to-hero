document.addEventListener('visibilitychange', ()=>{
    console.log(document.visibilityState);

    if(document.visibilityState === 'visible')
    {
        console.log('reproducir video')
    }
    else 
    {
        console.log('para el video se salio de la pestaña');
    }
})