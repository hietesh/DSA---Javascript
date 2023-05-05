const prompt = require('prompt-sync')();
const n = prompt('Enter N: ');

const arr = [];

for(let i=0;i<n;i++){
    arr[i]= prompt('');
}

/*
    Enter N: 6
    10
    5
    10
    15
    10
    5
    Highest Frequency 10
    Lowest Frequency 15

*/

function highFrequency(arr){
    const map = new Map();

    // setting the freqencies in the map
    for(let i=0;i<n;i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1);
        }
        else{
            map.set(arr[i],1);
        }
    }

    let high=Number.MIN_VALUE;
    let maxElement=arr[0];
    map.forEach((value,key)=>{
        if(value > high){
            high = value;
            maxElement=key;
        }
    })

    return maxElement;
}

function lowFrequency(arr){
    const map = new Map();
    for(let i=0;i<n;i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1);
        }
        else{
            map.set(arr[i],1);
        }
    }
    let minElement = arr[0];
    let min_val=Number.MAX_VALUE;
    map.forEach((value,key)=>{
        if(value < min_val){
            min_val = value;
            minElement = key;
        }
    });

    return minElement;
}

console.log("Highest Frequency "+highFrequency(arr));
console.log("Lowest Frequency "+lowFrequency(arr));