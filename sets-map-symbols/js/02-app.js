//WeakSet

const weakset = new WeakSet();

const cliente = {
    nombre: 'hector',
    saldo:100
}

const nombre = 'juan';

weakset.add(cliente);
console.log(weakset);
weakset.add(nombre);
console.log(weakset);
