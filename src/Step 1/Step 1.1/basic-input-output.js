// using readline 

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Whats your Name ?', name=>{
    console.log(`Hello ${name}`);
    readline.close();
})

// using prompt sync module

const prompt = require('prompt-sync')();

const input = prompt('what is your name?');

console.log(input);