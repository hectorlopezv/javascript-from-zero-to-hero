//switch if we have multiple conditions

const metodoPago = 'efectivo';

switch (metodoPago) {
    case 'efectivo':
        console.log(`page con ${metodoPago}`);
        break;
    default:
        console.log(`Aun no has selecionado un metodo de pago no soportado`);
        break;
}


