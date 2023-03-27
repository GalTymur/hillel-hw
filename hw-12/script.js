"use strict";

function pow(num, degree) {
    if (degree == 1) {
      return x = num;
    } else {
      return num * pow(num, degree - 1);
    }
  }
  
  console.log( pow(2, 3) );

  