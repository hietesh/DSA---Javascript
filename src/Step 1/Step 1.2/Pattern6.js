/*

Enter the Value of N:5
12345
1234
123
12
1

*/


const prompt = require('prompt-sync')();
const n = prompt('Enter the Value of N:');

for(let i=1;i<=n;i++){
    let str = "";
    for(let j=1;j<=(n-i)+1;j++){
        str += j; 
    }
    console.log(str);
}