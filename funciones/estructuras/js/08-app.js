const autenticado = true;


function revisarPuntaje()
{
    if (puntaje > 400) 
    {
        console.log('Excelente')
        return;
    }

    if (puntaje > 300) 
    {
        console.log('Felicidades');
        return;
    }
}

revisarPuntaje();