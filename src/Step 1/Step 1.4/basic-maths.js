

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

// const num1 = prompt('Num1: ');
// const num2 = prompt('Num2: ');

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

function armStrongNumber(n){
    const count = countDigits(n);
    let x = Number(n);
    let ans=0;
    while(x!=0){
        const powerValue = Math.pow(Math.floor(x%10),count);
        ans+=powerValue;
        x = Math.floor(x/10);
    }
    return ans == n;
}

function printAllDivisor(n){
    let str="";
    for(let i=1;i<=n;i++){
        if(n%i==0){
            str+=i+" ";
        }
    }
    return str.trimEnd();
}

function checkPrime(n){
    let x=Number(n);
    for(let i=2;i< Math.sqrt(n);i++){
        if(Math.floor(x%i)==0){
            return false;
        }
    }
    return true;
}

console.log(checkPrime(n));

