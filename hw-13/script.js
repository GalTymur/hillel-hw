"use strict";

function sumFunction() {
    let sum = 0;
    
    function sumValue(sumValue = 0) {
      sum += sumValue;
      return sum;
    }
    
    return sumValue;
  }
  const sum = sumFunction();
  
  console.log(sum(3)); 
  
  console.log(sum(5)); 
  
  console.log(sum(20)); 

