const prompt = require('prompt-sync')(); 
const n = prompt('Enter n: ');
const arr = [];

for(let i=0;i<n-1;i++){
    arr.push(prompt(`arr1[${i}] `));
}

function findMissing(arr,n){
    // Your code goes here
    const total = n*(n+1)/2;
    let ans = 0;
    for(let i=0;i<n-1;i++){
        ans = ans + arr[i];
    }
    
    return total - ans;
}

console.log(findMissing(arr,n));
