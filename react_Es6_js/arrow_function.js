//arrow functions - el this se refierre a el codigo que rodea al arrow function
//context --> objects that calls the function / how its called
//lexical scope --> all variables visible to a function where it its defined // cares about how its defined

//example Context scope
const obj = {
    var_: 5,
    fun_ : function(){
        console.log(this.var_);
    }
}

//Breaking Context scope - Callback functions
const obj = {
    var_: 5,
    fun_ : function(){
        console.log(this.var_);
        setTimeout(function(){
            console.log(this.var_);
        })
    }
}

//Solution use arrow functions - lexical scope
const obj = {
    var_: 5,
    fun_ : function(){
        console.log(this.var_);
        setTimeout(() => {
            console.log(this.var_);
        })
    }
}

//Breaking arrow functions - this does not refer to var_
const obj = {
    var_: 5,
    fun_ : () => {
        console.log(this.var_);
    }
}