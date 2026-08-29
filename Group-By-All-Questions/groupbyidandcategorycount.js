const orders = [
    { id: 1, category: "food" },
    { id: 1, category: "food" },
    { id: 1, category: "travel" },
    { id: 2, category: "food" },
    { id: 2, category: "food" },
    { id: 2, category: "shopping" }
];

function output(orders){

   let map = {};
   for(let i=0;i<orders.length;i++){
     let item = orders[i];

     if(!map[item.id]){
        map[item.id] = {};
     }
     if(!map[item.id][item.category]){
        map[item.id][item.category] = 0;
     }
     map[item.id][item.category]++;
   }
    return map;
}
console.log(output(orders));
