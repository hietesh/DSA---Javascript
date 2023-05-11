const prompt = require('prompt-sync')();

const n = Number(prompt('Enter N: '));
const k = Number(prompt('Enter K: '));

const arr = [];
for(let i=0;i<n;i++){
    arr.push(Number(prompt('')));
}

function reverseArray(arr,st,end){
    if(st>=end){
        return;
    }
    let temp = arr[st];
    arr[st]=arr[end];
    arr[end]=temp;
    reverseArray(arr,st+1,end-1);
}


reverseArray(arr,0,k-1);
reverseArray(arr,k,n-1);
reverseArray(arr,0,n-1);

console.log(arr);