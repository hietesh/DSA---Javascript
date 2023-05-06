const prompt = require('prompt-sync')();

const n = Number(prompt('Enter N: '));
const arr=[];

for(let i=0;i<n;i++){
  arr[i]= Number(prompt(''));    
}

// merge sort
function mergeSort(arr){
   merge(arr,0,arr.length-1);  
}


function merge(arr,st,end){
    if(st>=end){
        return;
    }
    const mid = Math.floor((st + end) /2);
    merge(arr,st,mid);
    merge(arr,mid+1,end);
    mergeTwoSort(arr,st,mid,end);
}

function mergeTwoSort(arr,st,mid,end){
    const output = [];
    let i=st;
    let j=mid+1;

    while(i<=mid && j<=end){
        if(arr[i] < arr[j] ){
            output.push(arr[i]);
            i++;
        }
        else{
            output.push(arr[j]);
            j++;
        }
    }
    // if anyone gets exhausted push the remaining to the output

    while(i<=mid){
        output.push(arr[i]);
        i++;
    }

    while(j<=end){
        output.push(arr[j]);
        j++;
    }

    for(let k=0;k<output.length;k++){
        arr[k+st]=output[k];
    }
}

mergeSort(arr);
console.log(arr);