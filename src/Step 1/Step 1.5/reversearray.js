const prompt = require('prompt-sync')();

const n = prompt('Enter N: ');

const arr= [];

for(let i=0;i<n;i++){
    arr[i]=prompt(`${i} : `);
}

console.log(arr.length);