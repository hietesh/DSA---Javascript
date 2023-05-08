const prompt = require('prompt-sync')();

const n = Number(prompt('Enter N: '));
const arr=[];

for(let i=0;i<n;i++){
  arr[i]= Number(prompt(''));    
}

// merge sort
function quickSort(arr,start,end){
    if(start >= end){
        return;
    }
    let index = pivotFix(arr,start,end);
    quickSort(arr, start, index-1);
    quickSort(arr, index+1, end);
}

function pivotFix(arr, start, end) {
    // count the number of elements less pivot & considering the first element as a pivot
    let count = 0;
    for(let i=start;i<=end;i++){
        if(arr[i]<arr[start]){
            count++;
        }
    }

    // place the pivot to it's correct postion
    let temp = arr[count];
    arr[count]=arr[start];
    arr[start]=temp;

    // arrange the less than elements to left of pivot and greater than elements to the right of the pivot
    let i=start;
    let j=count+1;
    while(i<=count && j<=end){
        if(arr[i] > arr[count]){
            if(arr[j]<=arr[count]){
                let t = arr[i];
                arr[i]=arr[j];
                arr[j]=t;
            }
            else{
                j++;
            }
        }
        else{
            i++;
        }
    }
    
    // return the pivot element
    return count;
}

quickSort(arr);

console.log(arr);