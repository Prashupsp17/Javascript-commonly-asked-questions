function MyPromise(callback) {
    this.state = "pending";
    this.value = undefined;
    this.callbacks = [];

    const resolve = (value) => {
        this.state = "fulfilled";
        this.value = value;

        this.callbacks.forEach((callback) => {
            callback(this.value);
        });
    };

    const reject = (value) => {
        this.state = "rejected";
        this.value = value;
    };

    callback(resolve, reject);
}

MyPromise.prototype.then = function(callback) {
    if (this.state === "fulfilled") {
        callback(this.value);
    } else if (this.state === "pending") {
        this.callbacks.push(callback);
    }
};

const promise = new MyPromise((resolve, reject) => {
    resolve("success");
});

promise.then((value) => {
    console.log(value);
});
