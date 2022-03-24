// function in js without parameter and without return type
function sayHello(){
    console.log("Hello from function");
}

sayHello();

// Function with parameter
function sum(num1, num2){
    let addition = num1 + num2;
    console.log("Additon of given numbers: "+addition);
}

let a=10, b=20;
sum(a,b); // call the function

// Function with return type
function multiply(num1, num2){
    return num1*num2;
}

let mult = multiply(2,4); // call the function
console.log("The product of given number is: " + mult);

// Store a function in the variable and then call that variable to print the function
    let S =   function sub(num1, num2){
              return num1-num2;
          }
      console.log("The subtraction of two given number is: "+ S(10,5));


      // IIFE :- Immediately invoked function expression
        // (funciton(){
        //     console.log("Hello from IIFE");
        // })();


    //   // IIFE wirh parameter
    //   (function(num1,num2){
    //       console.log(num1/num2);
    //   })(10,5);