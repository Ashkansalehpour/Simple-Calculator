/* 
  Title: Simple Calculator

  Version:1.0 v

  Developer: Ashkan Salehpour

  Date:11/03/2022

  Description: Simple JavaScript calculator code which work with two numbers and sign
*/



// We use three different parameters for our function 
// num1,num2 ---> numbers which we use it in operation
// operation --> the math signs (+,-,*,/)

let MyFunction = function(num1,num2,operation){
    // we use this condition (if) for if our operation equal (==) to specific sign, our script do the do exactly the same thing our sign equal to operation and then we make some variable (a,b,c,d) for each one of the conditions to print the exact operation and show the answer to us. :)
    if(operation=='+'){
        // sum operation
       a= num1+num2
       console.log(a);
    }
    if(operation=='-'){
        // minus operation
        b= num1-num2
        console.log(b);
    }
    if(operation=='*'){
        // multiplication operation
         c= num1*num2
        console.log(c);
     }
     if(operation=='/'){
        // division operation
         d= num1/num2
         console.log(d);
     }
 }
// first and second value are use for numbers and the third one use for signs(operation) which we want happen to our numbers and we write a ('') .
MyFunction(3,9,'*')