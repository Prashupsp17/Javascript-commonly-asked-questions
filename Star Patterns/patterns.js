Q1
const n  =4;

for(let i=0;i<n;i++){
  let row = '';

  for(let j=0;j<n;j++){
    row = row + "*";
  }
  console.log(row);
}

OUTPUT
****
****
****
****

  Q2.

  for(let i=0;i<4;i++){
  let row = "";
  for(let j=0;j<i+1;j++){
    row = row + "*";
  }
  
  console.log(row);
}

OUTPUT
*
**
***
****

  Q3>

  const n = 4;
for(let i=0;i<n;i++){
  let row = "";

   for(let j=n;j>i;j--){
        row = row + "*";
   }

  console.log(row);
}

OUTPUT 
****
***
**
*

  Q4 

const n = 5;

for(let i=0;i<5;i++){
  let row = "";
  for(let j=0;j<i+1;j++){
      row = row + `${i+1}`;
  }


  console.log(row);
}

OUTPUT 
1
22
333
4444
55555

Q5
const n = 5;

for(let i=0;i<=n;i++){
  let row = "";
  for(let j=0;j<i+1;j++){
      row = row + (j+1);
  }

  console.log(row);
}

OUTPUT 
1
12
123
1234
12345
123456

  Q6

const n = 5;
for(let i=0;i<n;i++){
  let row = "";
    for(let j=0;j<n-i;j++){
  row = row + (j+1);
  }
 
  console.log(row);
}

12345
1234
123
12
1

