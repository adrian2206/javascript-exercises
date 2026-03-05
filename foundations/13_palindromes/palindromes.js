const palindromes = function (word) {
    let processedWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reverseWord = processedWord.split("").reverse().join("");
    if (processedWord === reverseWord) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
