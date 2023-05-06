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


function insertionRecursive(arr,id){
    if(id==arr.length){
        return;
    }

    for(let i=id;i>0;i--){
        if(arr[i] < arr[i-1]){
            swap(i,i-1,arr);
        }
        // else{
        //     break;
        // }
    }

    insertionRecursive(arr,id+1);
}


insertionRecursive(arr,1);

console.log(arr);
