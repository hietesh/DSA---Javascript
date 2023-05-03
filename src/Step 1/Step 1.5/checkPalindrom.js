/*
    Enter String: Hitesh
    It's not a palindrome

    Enter String: nitin
    It's a palindrome

*/

const prompt = require('prompt-sync')();

const n = prompt('Enter String: ');

// iterative approach

function palinIterative(n){
    for(let i=0;i<n.length/2;i++){
        if(n.charAt(i)!=n.charAt((n.length-1)-i)){
            console.log('Its not a Palindrome');
            return;
        }
    }
    console.log('Its a Palindrome');
}

// recursive approach 
function palinRecursive(n,st,end){
    if(st >= end){
        return "It's a palindrome";
    }
    if(n.charAt(st)!=n.charAt(end)){
        return "It's not a palindrome";
    }
    return palinRecursive(n,st+1,end-1);
}

console.log(palinRecursive(n,0,n.length-1));