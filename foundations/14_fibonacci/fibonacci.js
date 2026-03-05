const fibonacci = function(index) {
    if (index < 0) return "OOPS";
let fibonacciSeq = [0, 1];
for (let i= 2; i <= index; i++) {
    fibonacciSeq.push( fibonacciSeq[i - 1] + fibonacciSeq[i - 2]);
}
return fibonacciSeq[index];
};

// index = 3 ; [1,1,2]

// Do not edit below this line
module.exports = fibonacci;
