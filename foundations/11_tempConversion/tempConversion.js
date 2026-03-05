const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9;
  let results = Math.round(celsius *10) / 10;
  return results;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = celsius * 9 / 5 + 32;
  let results = Math.round(fahrenheit *10) / 10;
  return results;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
