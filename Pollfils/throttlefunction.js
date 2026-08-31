
function throttle(fn,delay){
   
   let lastCall = 0;

   return function(...args){
      let now = Date.now();
      if( now - lastCall >= delay){
           lastCall = now;
           fn.apply(this,args);
      }else{
        console.log("Call rejected",Date.now());
      }
   }

}   
function test(){
    console.log("Function called ",Date.now());
}

const throttled = throttle(test,5000);

setInterval(() => {
     throttled();
},1000);


