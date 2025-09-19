let currentTerm  = 1;
let firstTerm  = 0;
const totalTermRequired = 8;

console.log(currentTerm, ' st term of fibonacci series is' , firstTerm);

currentTerm = 2;
let secondTerm = 1;
console.log(currentTerm , ' nd term of fibonacci series is ', secondTerm);

currentTerm = 3;
let thirdTerm = secondTerm + firstTerm ;
console.log(currentTerm , ' rd term of fibonacci series is ', thirdTerm);

for (let loopTerm = currentTerm + 1 ;loopTerm < totalTermRequired; loopTerm = loopTerm + 1){
    
    firstTerm = secondTerm;
    secondTerm = thirdTerm;
    thirdTerm = firstTerm + secondTerm;
    console.log(loopTerm , ' th term of fibonacci series is ', thirdTerm);
  
}

