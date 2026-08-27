// Calculate total sales by salesperson
const sales = [
    { person: "John", amount: 100 },
    { person: "John", amount: 200 },
    { person: "Mike", amount: 300 },
    { person: "John", amount: 50 },
    { person: "Mike", amount: 100 },
];

function totalSalesBySalesPerson(sales){

    let map = {};

    for(let i=0;i<sales.length;i++){
        let item = sales[i];

        if(!map[item.person]){
            map[item.person] = item.amount;
        }else{
            map[item.person] = map[item.person] + item.amount;
        }
         
    }
    return map;
}
console.log(totalSalesBySalesPerson(sales));
