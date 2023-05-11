const prompt = require('prompt-sync')();

const n = Number(prompt('Enter N: '));

const arr = [];
for(let i=0;i<n;i++){
    arr.push(Number(prompt('')));
}

function moveZeros(arr,n){
    for(let i=0;i<n-1;i++){
        if(arr[i]==0){
            for(let j=i+1;j<n;j++){
                if(arr[j]!=0){
                    const temp = arr[j];
                    arr[j]=arr[i];
                    arr[i]=temp;
                    break;
                }
            }      
        } 
    }
}

// optimal 

function moveZerosOptimal(arr,n){
    let j=-1;

    for(let i=0;i<n;i++){
        if(arr[i]==0){
            j=i;
            break;
        }
    }

    for(let i=j+1;i<n;i++){
        if(arr[i]!=0){
            const temp = arr[j];
            arr[j]=arr[i];
            arr[i]=temp;
            j+1;
        }
    }
}

moveZerosOptimal(arr,n);
console.log(arr);