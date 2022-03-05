console.log("Swagat hai aap sabhi logo ka!!!!!");


console.log("Pepcoders");


// variables in javascript and data types

let num = 10;//number
console.log(num);

let char = 'a';//character
console.log(char);

let str = "I am string"; // string
console.log(str);

let bool = true; // boolean
console.log(bool);

let a=10 , b=20, sum = a+b; // sum of variables
console.log(sum);

// Loops
// for loop
for(let i=0; i<5; i++){
    console.log(i);
}
console.log("now we are writting while loop here");
// while loop
let count=5;
while(count>=0){
    console.log(count);
    count--;
}

let n = 5;
let flag = 1;
for(let i=2; i<=(n-1); i++){
    if(n % i == 0){
        flag = 0;//not prime
        break;
    }
}
if(flag == 1){
    console.log("prime");
}else{
    console.log("not prime");
}
