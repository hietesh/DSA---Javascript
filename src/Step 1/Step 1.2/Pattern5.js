/*

Enter the Value of N: 5

*****
****
***
**
*

*/
const prompt = require('prompt-sync')();
const n = prompt('Enter the Value of N:');

for(let i=1;i<=n;i++){
    let str = "";
    for(let j=i;j<=n;j++){
        str += "*"; 
    }
    console.log(str);
}