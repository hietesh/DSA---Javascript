/*

Enter the value N: 5
A
AB
ABC
ABCD
ABCDE

*/

const prompt = require('prompt-sync')();

const n = prompt('Enter the value N: ');

for(let i=1;i<=n;i++){
    let str = ''
    for(let j=0;j<i;j++){
        str+= String.fromCharCode(65+j);
    }
    console.log(str); 
}