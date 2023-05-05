const prompt = require('prompt-sync')();
const n = prompt('Enter N: ');

const arr = [];

for(let i=0;i<n;i++){
    arr[i]= prompt('');
}

function k_highFrequency(arr,k){
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
    let max_key = Number.MIN_VALUE;
    const output =[];
    for(let i=0;i<k;i++){
        map.forEach((value,key)=>{
            if(value > high){
                high = value;
                max_key=key;
            }
        });
        map.set(max_key,0);
        output.push(max_key);
    }
    return output ; 
}

console.log(k_highFrequency(arr,2));