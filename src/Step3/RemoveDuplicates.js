const prompt = require('prompt-sync')();

const n = Number(prompt('Enter N: '));
const arr=[];

for(let i=0;i<n;i++){
  arr[i]= Number(prompt(''));    
}

function removeDup(arr){
    const n = arr.length;
    let val = 0;
    for(let i=0;i<n;i++){
        while(arr[i]==arr[i+1]){
            i++;
        }
        arr[val]=arr[i];
        val++;
    }

    for(let i=val;i<n;i++){
        arr[i]='_';
    }

    return val;
}

console.log(removeDup(arr));
console.log(arr);