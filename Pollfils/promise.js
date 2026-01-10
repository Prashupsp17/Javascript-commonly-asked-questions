function PromisePolyFill(executor) {
    let onResolve;
    let onReject;

    let isFulfilled = false;
    let isRejected = false;
    let isCalled = false;
    let value;

    function resolve(val) {
        if (isFulfilled || isRejected) return;

        isFulfilled = true;
        value = val;

        if (typeof onResolve === "function") {
            isCalled = true;
            onResolve(val);
        }
    }

    function reject(val) {
        if (isFulfilled || isRejected) return;

        isRejected = true;
        value = val;

        if (typeof onReject === "function") {
            isCalled = true;
            onReject(val);
        }
    }

    this.then = function (callback) {
        onResolve = callback;

        if (isFulfilled && !isCalled) {
            isCalled = true;
            onResolve(value);
        }
        return this;
    };

    this.catch = function (callback) {
        onReject = callback;

        if (isRejected && !isCalled) {
            isCalled = true;
            onReject(value);
        }
        return this;
    };

    try {
        executor(resolve, reject);
    } catch (err) {
        reject(err);
    }
}


const examplePromise = new PromisePolyFill((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 1000);
});

examplePromise
  .then((res) => console.log("then:", res))
  .catch((err) => console.error("catch:", err));
