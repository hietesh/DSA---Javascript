/*

Enter the Value of N:8
       *
      ***
     *****
    *******
   *********
  ***********
 *************
***************
***************
 *************
  ***********
   *********
    *******
     *****
      ***
       *

*/

const prompt = require('prompt-sync')();
const n = prompt('Enter the Value of N:');

let str = "";
let l = 0;

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

for(let i=(n-1);i>=0;i--){

    // print spaces
    for(let j=1;j<=l;j++){
        str+=" ";
    }
 
    // print star
    for(let k=0;k<(2*i)+1;k++){
        str += "*"; 
    }
    
    console.log(str);
    l++;
    str="";
}