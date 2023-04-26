/*

Enter the Value of N:5
1
22
333
4444
55555

*/


const prompt = require('prompt-sync')();
const n = prompt('Enter the Value of N:');

for(let i=1;i<=n;i++){
    let str = "";
    for(let j=1;j<=i;j++){
        str += i; 
    }
    console.log(str);
}