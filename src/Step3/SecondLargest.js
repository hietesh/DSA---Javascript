const prompt = require('prompt-sync')();

const n = Number(prompt('Enter N: '));
const arr=[];

for(let i=0;i<n;i++){
  arr[i]= Number(prompt(''));    
}

let smax = -1;
let max = arr[0];

for(let i=1;i<n;i++){
    if(arr[i] > max){
        smax = max;
        max = arr[i];
    }
    else if(arr[i] > smax && arr[i]!=max){
        smax = arr[i];
    }
}

console.log(smax);