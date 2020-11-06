//Reference and primitive types Refresher

//arrays, objects, i guess, weak maps are reference types(pointer to it)
const person = {
    name: 'Max'
};

const secondPerson = person;
person.name = 'Manu';
//solution is use Spreaded Object to create a copy
const secondPPerson = {
    ...person
}

//primitive types are considered as copy when referenced 
const number1 = 2;
const number_5 = number1;//makes a copy of the value in that space in the memory
