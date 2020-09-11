localStorage.removeItem('nombre');

const mesesArray = JSON.parse(localStorage.getItem('meses'));
mesesArray.push('bebe');
localStorage.setItem('meses', JSON.stringify(mesesArray));