const prompt = require('prompt-sync')();

const n = Number(prompt('Enter n: '));


class Solution{
    constructor(){
        this.str = "";
    }

    printNtimes(n){
        if(n<=0){
            return;
        }
        this.printNtimes(n-1);
        this.str+=n+" ";
    }

    printVal(n){
        this.printNtimes(n);
        console.log(this.str.trimEnd());
    }
}

const s = new Solution(); 
console.log(s.printVal(n));