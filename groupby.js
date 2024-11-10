// let peopleArr = [
//     {name: 'A', age: 10},
//     {name: 'B', age: 17},
//     {name: 'C', age: 14},
//     {name: 'D', age: 10},
// ];

// function GroupBy(peopleArr){
//     let obj = {};

//     for(let i=0;i<peopleArr.length;i++){
//         let item = peopleArr[i];

//         if(obj[item.age]){
//             obj[item.age].push(item.name);
//         }else{
//             obj[item.age] = [item.name];
//         }
//     }
//     return obj;

// }
// // console.log(GroupBy(peopleArr));

// const arr = [
//     {item: 'Ball', color: 'Red'}, 
//     {item: 'Car', color: 'Blue'}, 
//     {item: 'Apple', color: 'Red'}
// ];

// function groupByColor(arr){
//     let obj = {};

//   for(let i=0;i<arr.length;i++){
//       let item = arr[i];

//       if(obj[item.color]){
//            obj[item.color].push(item.item);
//       }else{
//         obj[item.color] = [item.item]
//       }
//   }
//   return obj;
// }
// // console.log(groupByColor(arr));

// const movies = [
//     {title: 'Movie A', year: 2020},
//      {title: 'Movie B', year: 2021},
//       {title: 'Movie C', year: 2020}
//     ]

//     function groupByYear(movies){
//         let obj = {};

//         for(let i=0;i<movies.length;i++){
//             let movie = movies[i];
//             console.log(movie.year);

//             if(obj[movie.year]){
//                 obj[movie.year].push(movie.title);
//             }else{
//                 obj[movie.year] = [movie.title];
//             }
//         }


// return obj;
//     }
  
//     const users = [
//         { id: 1, name: 'Alice' },
//         { id: 2, name: 'Bob' },
//         { id: 3, name: 'Charlie' },
//     ];


//     let obj = {};
//     for(let i=0;i<users.length;i++){
//         obj[users[i].id] = users[i].name;

//     }
//     console.log(obj);

//     const arr = [['name', 'Alice'], ['age', 25], ['city', 'New York']];
//    let obj ={};

//     for(let i=0;i<arr.length;i++){
//             let item = arr[i];
//             let key = item[0];
//             let value =item[1];

//             obj[key] = value;
//     }
//     console.log(obj);

    // const fruits = ['apple', 'banana', 'orange'];
    // let obj = {};

    // for(let i=0;i<fruits.length;i++){
    //          obj[i] = fruits[i];
    // }

    // console.log(obj);

    const input = [
        { name: 'A', age: 20, city: 'BLR' },
        { name: 'B', age: 20, city: 'DEL' },
        { name: 'C', age: 21, city: 'BLR' }
    ];

    // Output:
//  {
//  "BLR": [{ name: 'A', age: 20 }, { name: 'C', age: 21 }],
//  "DEL": [{ name: 'B', age: 20 }]
// }

let obj = {};

for(let i=0;i<input.length;i++){
    let item = input[i];

    if(!obj[item.city]){
        obj[item.city] = [];
    }

    obj[item.city].push({name:item.name,age:item.age});
}

console.log(obj);
 

   