const prompt = require('prompt-sync')();

const n = Number(prompt('Enter N: '));
const arr=[];

for(let i=0;i<n;i++){
  arr[i]= Number(prompt(''));    
}

function checkSort(arr){
    for(let i=1;i<arr.length;i++){
        if(arr[i]<arr[i-1]){
            return false;
        }
    }
    return true;
}

console.log(checkSort(arr));