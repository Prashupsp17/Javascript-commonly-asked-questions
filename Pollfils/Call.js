// Polyfill for call method

let car1 = {
    color:"red",
    company:"Ferrai"
}
function purchaseCar(currency,price){
    console.log(`You have purchased a ${this.color} ${this.company} car for ${price} ${currency}`);
}

purchaseCar.call(car1, "Rs", 5000000);

Function.prototype.myCall = function(context={}, ...args){
    if(typeof this !== 'function'){
        throw new Error(this + "Its not callable");
    }

    context.fn = this;
    context.fn(...args);
}

purchaseCar.myCall(car1, "Rs",500000);