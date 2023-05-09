const prompt = require('prompt-sync')();

const n = Number(prompt('Enter N: '));
const arr=[];

for(let i=0;i<n;i++){
  arr[i]= Number(prompt(''));    
}

let max = arr[0];

arr.forEach((a)=>{
    if(a>max){
       max = a; 
    }
});


// lowest 
console.log(arr.sort( (a,b) => a-b )[0]);

// highest
console.log(max);