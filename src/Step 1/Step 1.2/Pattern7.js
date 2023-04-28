/*

Enter the Value of N:5
    *
   ***
  *****
 *******
*********

*/

const prompt = require('prompt-sync')();
const n = prompt('Enter the Value of N:');

let str = "";

for(let i=0;i<n;i++){
    // print spaces
    for(let j=0;j<(n-1)-i;j++){
        str+=" ";
    }
    // print star
    for(let k=0;k<(2*i)+1;k++){
        str += "*"; 
    }
    console.log(str);
    str="";
}