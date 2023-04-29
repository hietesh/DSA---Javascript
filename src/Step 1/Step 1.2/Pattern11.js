const prompt = require('prompt-sync')();

const n = prompt('Enter the value N:');

let chang01; 

for(let i=1;i<=n;i++){
    let str = '';
    if(i%2==0){
        chang01=0;     
    }
    else{
        chang01=1;
    }
    for(let j=1;j<=i;j++){
        str+=chang01;
        chang01 = 1-chang01;
    }
    console.log(str);
}

