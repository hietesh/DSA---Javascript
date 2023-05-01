/*
    Enter value on N: 5
    *        *
    **      **
    ***    ***
    ****  ****
    **********
    ****  ****
    ***    ***
    **      **
    *        *
    
*/

const prompt = require('prompt-sync')();

const n = prompt('Enter value on N: ');

// first half of the pattern

for(let i=1;i<=n;i++){
    let str='';
    for(let j=1;j<=i;j++){
        str+='*';
    }

    for(let j=1;j<=n-i;j++){
        str+=' ';
    }

    for(let j=1;j<=n-i;j++){
        str+=' ';
    }

    for(let j=1;j<=i;j++){
        str+='*';
    }

    console.log(str);  
}

// second half of the pattern
for(let i=1;i<n;i++){
    let str='';
    for(let j=1;j<=n-i;j++){
        str+="*";
    }

    for(let j=1;j<=i;j++){
        str+=" ";
    }

    for(let j=1;j<=i;j++){
        str+=" ";
    }

    for(let j=1;j<=n-i;j++){
        str+="*";
    }

    console.log(str);
}