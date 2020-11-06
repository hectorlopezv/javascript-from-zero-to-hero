//Clasess Es6

class App{
    constructor(){
        this.x = 0;
    }
    method_1(){
        console.log('method 1');
    }
    static method_1(){

    }
}

//clasess ES7

class papa extends App{
    gender = "amle";//this will be the constructor

    printGender = () =>{//this will be de functions
        console.log(this.gender)
    }
}