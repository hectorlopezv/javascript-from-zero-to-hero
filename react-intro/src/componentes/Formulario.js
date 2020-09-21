import React, { Fragment, useState } from 'react';
import {calcularTotal} from '../helpers/helpers';
const Formulario = (props) => {
    //descontructor de props
    const {cantidad, guardarCantidad, valor, setvalor, total, settotal, setcargando} = props;
    //definimos un estado para el error
    const [error, seterror] = useState(false);
    
    const calcularPrestamo = (e) => {
        e.preventDefault();

        //validar formulario literalmente
        if(cantidad === 0 || valor === ''){
            seterror(true);
            return
        }
        // si pasa validacion error en falso y renderiza todo de nuevo
        seterror(false);

        //hablita spinner
        setcargando(true);
        setTimeout(() =>{
            //realizar cotizacion
            console.log('paso validacion');
            const valorPagar = calcularTotal(cantidad, valor);
            console.log(valorPagar);

            //guardar el total a pasar el nuevo componente
            settotal(valorPagar);

            // apaga el spinner
            setcargando(false);
        }, 3000);
      
    }

    return (  
        <Fragment>
        <form onSubmit={ calcularPrestamo }  >
            {cantidad}
          <div className="row">
              <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Ejemplo: 3000"
                      onChange= { e => guardarCantidad(parseInt(e.target.value)) }
                  />
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                  {valor}
                  <select 
                      className="u-full-width"
                      onChange={e => setvalor(parseInt(e.target.value)) }
                  >
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                  />
              </div>
          </div>
    </form>
    {
        // en este caso hacemos un condicional para ver si el hook del error esta en tro si es ta
        // mostramos el mensaje de error
        // si es falso no se mostrara nada
    }
    {error ? <p className="error">Todos los campos son obligatorios</p>: ''}
    </Fragment>
    );
}
 export default Formulario;