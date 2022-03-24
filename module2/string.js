let str = "Hii i am string";
console.log(str);

// length of string

let len = str.length;
console.log(len);

// slice --> slice (2,8) means it includes element from 2nd location to before the element of 8th location 
let sliceArr= str.slice(2,8);
console.log(sliceArr);

// replace method --> replace the word with another word that we give
let replacedstr = str.replace("am","was");
console.log(replacedstr);

// upper case
let upperCase = str.toUpperCase();
console.log(upperCase());