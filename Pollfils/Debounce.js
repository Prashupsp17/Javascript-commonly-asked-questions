
const increment_btn = document.querySelector(".increment_btn");
const increment_pressed = document.querySelector(".increment_pressed");
const increment_count = document.querySelector(".increment_count");

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