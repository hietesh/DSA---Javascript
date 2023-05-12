const prompt = require('prompt-sync')();

const n = Number(prompt('Enter N: '));

const arr =[];

for(let i=0;i<n;i++){
    arr[i]= Number(prompt(''));    
}

const num = Number(prompt('Enter Num: '));

function linearSearch(arr,num)
{
    const n = arr.length;
    for(let i=0;i<n;i++){
        if(arr[i]==num){
            return i;
        }
    }  

    return -1;
}


console.log(linearSearch(arr,n));