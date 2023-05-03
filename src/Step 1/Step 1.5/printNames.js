/*
    5
    Hitesh Hitesh Hitesh Hitesh Hitesh 
*/

const prompt = require('prompt-sync')();

const n = prompt('');

let str = '';

function printNames(n){
    if(n==1){
        return 'Hitesh ';
    }
    str += printNames(n-1); 
    return 'Hitesh '+str;
}

console.log(printNames(n));