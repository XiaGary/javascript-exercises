const palindromes = function (str) {
    let string = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').replaceAll(' ', '');
    let palindromeCheck = string.split('').reverse().join('');
    if(string.toLowerCase() == palindromeCheck.toLowerCase()){
        return true;
    } else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
