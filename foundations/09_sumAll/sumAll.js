const sumAll = function(startValue, finishValue) {
if (startValue <= 0 || finishValue <= 0 || !Number.isInteger(startValue) || !Number.isInteger(finishValue) ) {
    return "ERROR"
}
let start = Math.min(startValue, finishValue);
let end = Math.max(startValue, finishValue);
let sum = 0;
for (let i = start; i <= end; i++) {
    sum += i;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
