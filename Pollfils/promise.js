function PromisePolyFill(executor){
  let isSettled = false;
  let isFulfilled  = false;
  let isRejected = false;
  let isCalled = false;
  let value;
  let onResolve;
  let onReject;
  function resolve(val){
    if(isSettled) return;
    isSettled = true;
    isFulfilled = true;
    value = val;
    if(typeof onResolve === "function"){
       onResolve(value);
      isCalled = true;
    }
    
  }
  function reject(val){
    
      if (isSettled) return;
  isSettled = true;
     isRejected = true;
    value  =val; 

    if(typeof onReject === "function"){
      onReject(value);
      isCalled = true;
    }
  }

  this.then = function(callback){
    onResolve = callback;

    if(isFulfilled  && !isCalled){
       isCalled = true;
      onResolve(value);
    }
    return this;
  }

  this.catch  =function(callback){
    onReject = callback;

    if(isRejected && !isCalled){
      isCalled = true;
      onReject(value);
    }
    return this;
  }

  try{
     executor(resolve,reject);
  }catch(error){
    reject(error);
  }
 
}

new PromisePolyFill((resolve, reject) => {
  resolve(2);
})
.then((res) => {
  console.log("Success:", res);
})
.catch((err) => {
  console.log("Error:", err);
});
