import React from 'react';

const Resultado = ({total, cantidad, valor}) => {
    return (  
        <div className="u-full-width resultado">
            <h2> Resumen</h2>
            <p> la cantidad solicitada es de: $ {cantidad}</p>
            <p> A pagar en: {valor} Meses</p>
            <p> su pago mensual es de: $ {(total/valor).toFixed(2)}</p>
            <p> total a pagar: ${ total} </p>
        </div>
    );
}
 
export default Resultado;