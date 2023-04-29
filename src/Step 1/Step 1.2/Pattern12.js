/*

Enter the value N: 9
1                1
12              21
123            321
1234          4321
12345        54321
123456      654321
1234567    7654321
12345678  87654321
123456789987654321


*/


const prompt = require('prompt-sync')();

const n = prompt('Enter the value N: ');

for(let i=1;i<=n;i++){
    let str = "";
    // first half 
    for(let j=1;j<=i;j++){
        str += j;
    }
    // print spaces
    for(let j=1;j<=n-i;j++){
        str += " ";
    }

    // print other half
    // print spaces
    for(let j=1;j<=n-i;j++){
       str+=" "; 
    }

    // print numbers
    for(let j=n-(n-i);j>0;j--){
        str+=j;
    }

    console.log(str);
}