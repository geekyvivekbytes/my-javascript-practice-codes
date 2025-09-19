const num1 = 34;
console.log('using if_else condition'); 
if (45 > num1){
    console.log('given number is less than 45');
}else{
    console.log('given number is greater than 45');
}

console.log('same program using ternary');
let y = (45 > num1) ? "less than 45" : "greater than 45" ;
console.log('given number is' , y);
