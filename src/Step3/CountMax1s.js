const prompt = require('prompt-sync')(); 
const n = prompt('Enter n: ');
const arr = [];

for(let i=0;i<n;i++){
    arr.push(prompt(`arr1[${i}] `));
}

function countMaxOnes(arr,n){
    let count = 0;
    let max = 0;
    for(let i=0;i<n;i++){
        if(arr[i]!=1){
            count=0;
        }
        else{
            count++;
            if(count>max){
                max = count;
            }
        }
    }
    return max;
}


console.log(countMaxOnes(arr,n));