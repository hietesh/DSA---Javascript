

const prompt = require('prompt-sync')();

const n = Number(prompt('Enter value of N: '));

function countDigits(n){
    let count = 0;
    let x = n;
    while(x!==0){
        x=Math.floor(x/10);
        count++;
    }
    return count;
}

function reverseNumber(n){
    let x = n;
    let ans = 0;
    while(x!==0){
        let rem = Math.floor(x % 10);
        ans = ans*10 + rem;
        x = Math.floor(x/10);
    }
    return ans;
}

function checkPalindrome(n){
    return (reverseNumber(n) === n);
}

// input for gcd

const num1 = prompt('Num1: ');
const num2 = prompt('Num2: ');

function findGCD(num1,num2){
    let minNum = Math.min(num1,num2);
    let ans;
    for(let i=1;i<=minNum;i++){
        if(Math.floor(num1%i==0) && Math.floor(num2%i==0)){
            ans = i;
        }
    } 
    return ans;
}


// Eucluidean Alogrithm
// gcd(a,b) = gcd(a-b,b) where a > b

function findGCDEuclidean(num1,Num2){

}

console.log(findGCD(3,4));

