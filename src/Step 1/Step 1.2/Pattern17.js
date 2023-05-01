/*

Enter value on N: 5
     A
    ABA
   ABCBA
  ABCDCBA
 ABCDEDCBA

*/

const prompt = require('prompt-sync')();

const n = prompt('Enter value on N: ');

for(let i=0;i<n;i++){
    let str='';
    for(let j=0;j<n-i;j++){
        str+=' ';
    }
    // print numer odd lines
    
    for(let j=0;j<i;j++){
       str+=String.fromCharCode(65+j);
    }

    for(let j=i;j>=0;j--){
        str+=String.fromCharCode(65+j);
    }

    console.log(str);                                                                                                                                                                                                                                                     
}