const prompt = require('prompt-sync')();

const n = prompt('Enter n: ');
const m = prompt('Enter m: ');

const arr1 = [];
const arr2 = [];

for(let i=0;i<n;i++){
    arr1.push(prompt(`arr1[${i}] `));
}

for(let i=0;i<m;i++){
    arr2.push(prompt(`arr2[${i}] `));
}

function unionSorted(arr1,arr2){
    const union = [];
    let i = 0;
    let j = 0;

    while(i< arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            if(union[union.length-1]!=arr1[i]){
                union.push(arr1[i]);
            }
            i++;
        }
        else{
            if(union[union.length-1]!=arr2[j]){
                union.push(arr2[i]);
            }
            j++;
        }
    }

    while(i < arr1.length){
        if(union[union.length-1]!=arr1[i]){
            union.push(arr1[i]);
        }
        i++;
    }

    while(j < arr2.length){
        if(union[union.length-1]!=arr2[j]){
            union.push(arr2[j]);
        }
        j++;
    }

    return union;
}

const union = unionSorted(arr1,arr2);
console.log(union);


function intersectionSorted(arr1,arr2,m,n){
    let i=0,j=0;
    const intersection = [];
    while(i< m && j<n){
        if(arr1[i] == arr2[j]){
            intersection.push(arr1[i]);
            i++;
            j++;
        }   
        else{
            if(arr1[i] < arr2[j]){
                i++;
            }
            else{
                j++;
            }
        }
    }

    return intersection;
}

const intersection = unionSorted(arr1,arr2);
console.log(intersection);