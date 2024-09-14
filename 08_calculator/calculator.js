const add = function(a,b, ...c) {
	return a + b;
};

const subtract = function(a, b, ...c) {
	return a-b-c
};

const sum = function(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
	
};

const multiply = function(arr) {
  let sum = 1;
  for(let i = 0; i < arr.length; i++){
    sum *= arr[i];
  }
  return sum;
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(num) {
	let factorial = 1;
  if(num == 0){
    return 1;
  } else{
      for(let i = num; i >= 1; i--){
    factorial *= i;
  }
}return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
