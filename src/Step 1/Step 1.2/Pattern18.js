/*

Enter value on N: 5
E 
D E 
C D E 
B C D E 
A B C D E 

*/

const prompt = require('prompt-sync')();

const n = prompt('Enter value on N: ');

for(let i=0;i<n;i++){
    let str='';
    for(let j=0;j<=i;j++){
       str+=String.fromCharCode((65+(n-i)+j)-1)+" ";
    }
    console.log(str);                                                                                                                                                                                                                                                     
}