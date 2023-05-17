const prompt = require('prompt-sync')();

const n = parseInt(prompt('Enter n: '));
const k = parseInt(prompt('Enter k: '));

const arr = [];

for(let i=0;i<n;i++){
    arr.push(parseInt(prompt(`arr[${i}]: `)));
}

// brute force approach 
function subArrayWithSumK(arr,n,k){
    let max = -1;
    for(let i=0;i<n;i++){
        let sum = 0;
        let j=i;
        while(j<n){
            sum+=arr[j];
            if(sum==k && (j-i)+1 > max){
              max = (j-i)+1;
              break; 
            }
            j++;    
        }
    }
    return max;
}


// optimal approach
function subArrayWithSumKOpt(arr,n,k){
    
}

const ans = subArrayWithSumK(arr,n,k);
console.log(ans);