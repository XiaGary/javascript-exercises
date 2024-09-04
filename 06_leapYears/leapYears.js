const leapYears = function(year) {
    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
        return true;
    } else{
        return false;
    }
};

// leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)

//1. divisible by 4
//2. not divisible by 100
//3. UNLESS divisible by 400

// Do not edit below this line
module.exports = leapYears;
