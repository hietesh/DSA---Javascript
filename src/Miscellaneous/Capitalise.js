let myString = 'developer is the new'

const strArr = myString.split(' ');

const newStr = strArr.map((str)=>{
    return str.charAt(0).toUpperCase() + str.substring(1);
});

myString = newStr.join(" ");

console.log(myString);