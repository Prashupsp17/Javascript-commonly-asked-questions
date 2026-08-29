
// Total amount by category
const expenses = [
    { category: "food", amount: 100 },
    { category: "travel", amount: 200 },
    { category: "food", amount: 50 },
    { category: "shopping", amount: 300 },
    { category: "travel", amount: 100 }
];


function totalAmtByCategory(expenses){
    let map = {};
     
     for(let i=0;i<expenses.length;i++){
        let item = expenses[i];

        if(!map[item.category]){
           map[item.category] = item.amount;
        }else{
            map[item.category] = map[item.category] + item.amount;
        }
     }
     return map;

}
console.log(totalAmtByCategory(expenses));
