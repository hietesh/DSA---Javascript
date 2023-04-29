/*

Enter the value N: 5
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 


*/


const prompt = require('prompt-sync')();

const n = prompt('Enter the value N: ');

let num = 1;
for(let i=1;i<=n;i++){
    let str = "";
    for(j=1;j<=i;j++){
        str += num + " ";
        num++;
    }

    console.log(str);
}