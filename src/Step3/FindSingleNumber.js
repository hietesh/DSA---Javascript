const prompt = require('prompt-sync')(); 
const n = prompt('Enter n: ');
const arr = [];

for(let i=0;i<n;i++){
    arr.push(prompt(`arr1[${i}] `));
}


const findSingleNum = (arr)=>{
    const map = new Map();

    arr.forEach((el)=>{
        if(map.has(el)){
            map.set(el,map.get(el)+1);
        }
        else{
            map.set(el,1);
        }
    });

    // return the single number
    let ans=-1;
    map.forEach((value,key)=>{
        if(value==1){
            ans = key;
        }
    });

    return ans;
}

console.log(findSingleNum(arr));