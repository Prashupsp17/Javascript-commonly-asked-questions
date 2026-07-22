let car = {
    color:"red",
    name:"ferrari"
}

function purchaseCar(currency,amt){
    console.log(`I have purchased ${this.color} car, name ${this.name} for ${currency} ${amt}  `)
    
}
purchaseCar.call(car,"rs",50000);

Function.prototype.myApply  = function(context={},args){
    if(typeof this != 'function'){
        throw new Error(this,"its not callable");
    }
    
    if(!Array.isArray(args)){
        throw new Error('no as its not an array');
    }
    
  
    
    context.fn = this;
    context.fn(...args);
}
purchaseCar.myApply(car,["rs",70000]);
