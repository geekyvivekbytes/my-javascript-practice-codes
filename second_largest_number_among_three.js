const num1 = 4;
const num2 = 54;
const num3 = 34;
let secondlargestnum = 0;
const check = num1 > num2;
const check1 = num2 > num3;
if (check1 === check){
    secondlargestnum = num2;

}else if(check === true){
    secondlargestnum = (num1 > num3) ? num3 : num1;

}else{
    secondlargestnum = (num1 > num3) ? num1 : num3;
}
console.log(secondlargestnum);
