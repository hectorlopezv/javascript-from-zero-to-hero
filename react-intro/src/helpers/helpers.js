export const calcularTotal = (cantidad, plazo) => {
    //cantidades
    // 0 -1000 = 25%
    // 1001 - 5000 = 20%
    // 50001 - 10000 = 15%
    // +10000 = 10%

    let totalCantidad;
    let totalPlazo = 0;
    if (cantidad <= 1000){
        totalCantidad = cantidad * .25;
    } 
    else if (cantidad > 1000 && cantidad <= 5000)
    {
        totalCantidad = cantidad * .2;
    } 
    else if (cantidad > 5001 && cantidad <= 10000)
    {
        totalCantidad = cantidad * .15;
    } 
    else if (cantidad > 10000) 
    {
        totalCantidad = cantidad * .1;
    }
    console.log(totalCantidad);
    //calcular el plazo
    //3 = 5%
    //6 = 10%
    //12 = 15%
    //24 = 20%


    switch (plazo) {
        case 3:
            totalPlazo = cantidad * .05;
            break;
        case 6:
            totalPlazo = cantidad * .1;
            break;
        case 12:
            totalPlazo = cantidad * .15;
            break;
        case 24:
            totalPlazo = cantidad * .2;
            break;
        default:
            break;
    }

    return totalPlazo + totalCantidad + cantidad;



    
}
