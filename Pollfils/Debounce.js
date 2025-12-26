
const increment_btn = document.querySelector(".increment_btn");
const increment_pressed = document.querySelector(".increment_pressed");
const increment_count = document.querySelector(".increment_count");
const throttle_increment_btn = document.querySelector(".throttle_increment_btn");

let pressedCount = 0;
let triggeredCount = 0;



const myDebounce = (cb,d) => {

    let timer;

    return function(...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            cb(...args);
        },d)
    };

};

const debounce = myDebounce(() => {
    triggeredCount += 1;
    increment_count.innerHTML = triggeredCount;
},800);


increment_btn.addEventListener("click", () => {
    increment_pressed.innerHTML = ++pressedCount;
     debounce();
})


const myThrottle = (cb,d) => {
    let last = 0;

    return function(...args){
        let  now = new Date().getTime();
        if(now - last < d) return;
        last = now;
        return cb(...args);
    }
}

var Throttle = myThrottle(() => {
    triggeredCount += 1;
    increment_count.innerHTML = triggeredCount;
},1000);


throttle_increment_btn.addEventListener("click", () => {
    increment_pressed.innerHTML = ++pressedCount;
    Throttle();
});
