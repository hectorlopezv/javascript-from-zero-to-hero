const carrit = ["Enero","Febrero"]
for(let pendiente in carrit) 
{
    console.log(pendiente);

}

const automovil = 
{
    modelo: 'camaro',
    year: 1999,
    motor: '6.6v6'
}

for (let key in automovil) {
    console.log(key); 

}

for (let [key, value] of  Object.entries(automovil) ) 
{
    console.log(key);
    console.log(value);
}