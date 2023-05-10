const prompt = require('prompt-sync')();

const n = Number(prompt('Enter N: '));
const arr=[];

for(let i=0;i<n;i++){
  arr[i]= Number(prompt(''));    
}


function leftRotate(arr,n){
    if(n==1){
        return arr;
    }

    const firstVal = arr[0];

    for(let i=1;i<n;i++){
        arr[i-1]=arr[i];
    }

    arr[n-1] = firstVal;
}

leftRotate(arr,n);

console.log(arr);