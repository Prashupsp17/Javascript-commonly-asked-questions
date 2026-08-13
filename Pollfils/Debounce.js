const input = document.querySelector("#search");

function debounce(fn,delay){

  let timer;

  return function(...args){
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    },delay);
  }

}

function search(value){
   console.log(value);
   alert(value);
}

const debounceSearch = debounce(search,5000);
input.addEventListener("input",function(e){
   debounceSearch(e.target.value);
})
