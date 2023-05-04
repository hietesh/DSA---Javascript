
/*
    Enter N: 6
    10
    5
    10
    15
    10
    5
    10 = 3
    5 = 2
    15 = 1

*/
const prompt = require('prompt-sync')();
const n = prompt('Enter N: ');

const arr = [];

for(let i=0;i<n;i++){
    arr[i]= prompt('');
}

function countFrequencies(arr){
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

    // showing the frequencies of the map
    map.forEach( (value,key)=>{
        console.log(key+ " = "+value);
    });
}


countFrequencies(arr);