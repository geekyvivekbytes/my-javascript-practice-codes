let current_term  = 1;
let firstTerm  = 0;
const totalTermRequired = 8;

console.log(current_term, ' st term of fibonacci series is' , firstTerm);

current_term = 2;
let secondTerm = 1;
console.log(current_term , ' nd term of fibonacci series is ', secondTerm);

current_term = 3;
let thirdTerm = secondTerm + firstTerm ;
console.log(current_term , ' rd term of fibonacci series is ', thirdTerm);

for (let loopTerm = current_term + 1 ;loopTerm < totalTermRequired; loopTerm = loopTerm + 1){
    
    firstTerm = secondTerm;
    secondTerm = thirdTerm;
    thirdTerm = firstTerm + secondTerm;
    console.log(loopTerm , ' th term of fibonacci series is ', thirdTerm);
  
}
