const add = function(a, b) {
	let result = a + b;
  return result;
};

const subtract = function(a, b) {
	let result = a - b;
  return result;
};

const sum = function(array) {
	let result = array.reduce ((accumulator, currentValue) => accumulator + currentValue, 0);
  return result;
};

const multiply = function(array) {
  let result = array.reduce ((accumulator, currentValue) => accumulator * currentValue, 1);
  return result
};

const power = function(a, b) {
	let result = a**b;
  return result;
};

const factorial = function(fact) {
	if (fact < 0) {
    return "ERROR";
  } else if (fact === 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = 1; i <= fact; i++) {
      result *= i;
    }
    return result;
  }
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
