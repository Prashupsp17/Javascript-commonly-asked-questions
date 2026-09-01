const products = [
  { name: "iPhone", category: "Mobile" },
  { name: "Samsung", category: "Mobile" },
  { name: "MacBook", category: "Laptop" },
  { name: "Dell", category: "Laptop" }
];

function productbasedgroup(products){
   let map = {};

   for(let i=0;i<products.length;i++){
      let item = products[i];

      if(!map[item.category]){
        map[item.category] = [];
      }
      map[item.category].push(item.name);
   }
   return map;
}
console.log(productbasedgroup(products));

// OUTPUT

// {
//   Mobile: ["iPhone", "Samsung"],
//   Laptop: ["MacBook", "Dell"]
// }
