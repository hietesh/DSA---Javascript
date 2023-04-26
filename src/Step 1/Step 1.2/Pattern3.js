/*

Enter the Value of N: 5
*
**
***
****
*****

*/
const prompt = require('prompt-sync')();
const n = prompt('Enter the Value of N:');

let tenth = 1;
for(let i=1;i<=n;i++){
    let str = 0;
    for(let j=1;j<=i;j++){
        str = str*10 + j;
    }
    console.log(str);
} 