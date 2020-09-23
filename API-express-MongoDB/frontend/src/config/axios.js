//importamos axios
// y creamos un cliente axios
import axios from 'axios';

// ponemos una url base para todos los endpoint
//crea como un blueprint en la url

const clienteAxios =  axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
});

export default clienteAxios;