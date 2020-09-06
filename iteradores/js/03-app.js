//fizzBuzz javascript

for (let i=0; i <= 100; i++)
{
    //console.log(`numero ${i}`)

    if (i % 5 === 0  && i % 3 === 0)
    {
        console.log('FizzBuzz');
    }
    else if(i%5 === 0)
    {
        console.log('Buzz');
    }
    else 
    {
        console.log('Fizz');
    }

}