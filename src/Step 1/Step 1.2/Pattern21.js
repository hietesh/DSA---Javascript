/*

    Enter value of N: 4
    ****
    *  *
    *  *
    ****

*/

const prompt = require('prompt-sync')();

const n = prompt('Enter value of N: ');

for(let i=0;i<n;i++){
    let str="";
    for(let j=0;j<n;j++){
        if(i===0 || j===0 || i===n-1 || j===n-1){
            str+="*";
        }
        else{
            str+=" ";
        }
    }
    console.log(str);
}