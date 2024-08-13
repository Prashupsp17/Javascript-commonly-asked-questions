const array = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Alice' }
  ];
  
  function removeDuplicates(array){
    let obj={};
    let result = [];
  
    for(let i=0;i<array.length;i++){
      let item = array[i];
  
      if(!obj[item.id]){
        obj[item.id] = true;
        result.push(item);
      }
    }
    return result;
  }
  console.log(removeDuplicates(array)) ;