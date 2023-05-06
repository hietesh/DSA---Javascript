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

// 13,46,24,52,20,9
// sorting happens from the back 

function bubbleSort(arr){
    for(let i=0;i<n-1;i++){
        for(let j=0;j<(n-i)-1;j++){
            if(arr[j]>arr[j+1]){
                swap(j,j+1,arr);
            }   
        }
    }
}

// tale the element and place it in it's correct order
function insertionSort(arr){       
    for(let i=1;i<n;i++){
       for(let j=i;j>0;j--){
          if(arr[j] < arr[j-1]){
             swap(j,j-1,arr);
          }     
       } 
    }
}

insertionSort(arr);
console.log(arr);