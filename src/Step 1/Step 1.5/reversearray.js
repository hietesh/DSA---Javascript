const prompt = require('prompt-sync')();

const n = prompt('Enter N: ');

const arr= [];

for(let i=0;i<n;i++){
    arr[i]=prompt(`${i} : `);
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

reverseArray(arr,0,arr.length-1);

let str = '';
for(let i=0;i<n;i++){
    str+=arr[i]+" ";
}

console.log(str);