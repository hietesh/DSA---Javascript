const prompt = require('prompt-sync')();

const n = Number(prompt('Enter N: '));
const arr=[];

for(let i=0;i<n;i++){
  arr[i]= Number(prompt(''));    
}

function swap(i,j,arr){
    const temp = arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

function bubbleRecursive(arr,n){
    if(n==1){
        return;
    }

    for(let i=0;i< n-1;i++){
        if(arr[i] > arr[i+1]){
            swap(i,i+1,arr);
        }
    }

    bubbleRecursive(arr,n-1);
}

bubbleRecursive(arr,n);

console.log(arr);


