/*

Enter the value N: 5
ABCDE
ABCD
ABC
AB
A

*/

const prompt = require('prompt-sync')();

const n = prompt('Enter the value N: ');

for(let i=n;i>0;i--){
    let str = ''
    for(let j=0;j<i;j++){
        str+= String.fromCharCode(65+j);
    }
    console.log(str); 
}