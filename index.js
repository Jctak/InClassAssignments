function tipAmt(billAmt, serviceGrade){
  if ((serviceGrade === "good") || (serviceGrade === "GOOD"))
  {
    tip = billAmt * .20;
    return tip;
  }
  else if((serviceGrade === "fair") || (serviceGrade === "FAIR")){
    tip = billAmt * .15;
    return tip;
  }
  else if ((serviceGrade === "bad") || (serviceGrade === "BAD")){
    tip = billAmt * 10;
    return tip;
  }
}

function totalAmt(billAmt, serviceGrade){
  if ((serviceGrade === "good") || (serviceGrade === "GOOD")){
    total = billAmt * .20 + billAmt;
    return total;
  }
  else if((serviceGrade === "fair") || (serviceGrade === "FAIR")){
    total = billAmt * .15 + billAmt;
    return total;
  }
  else if ((serviceGrade === "bad") || (serviceGrade === "BAD")){
    total = billAmt * .10 + billAmt;
    return total;
  }
}

// console.log(tipAmt(100, "good"));
// console.log(totalAmt(100, "bad"));

function splitAmt(billAmt, serviceGrade, splitWays){
  bill = billAmt;
  grade = serviceGrade;
  split = (totalAmt(bill, grade) + tipAmt(bill, grade)) / splitWays;
  return split;
}
console.log(splitAmt(100, "good", 3));

function hello(name){
  if(name === undefined){
    console.log("Hello World");
  }
  else{
    console.log(`Hello ${name}!`);
  }
}


hello("John");
hello();

function madlib(name, subject){
  string = `${name} is a ${subject}`;
  return string;
}

console.log(madlib("JC", "Clown"));




tipAmt(100, "fair");