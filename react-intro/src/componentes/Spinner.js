import React from 'react';
// para incluir el archivo de css en el componente tenemos que importalo
import './Spinner.css';


const Spinner = () => {
    return ( 
        <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
     );
}
 
export default Spinner;