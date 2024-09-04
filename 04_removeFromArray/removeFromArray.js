// const arr = [1, 2, 3, 4]
const removeFromArray = function(arr, ...remove) {
    for(let i = 0; i < arr.length; i++){
        for(let rem of remove){
            if(arr[i] === rem){
                arr.splice(i, 1)
                i--
                break;
            }
        }    
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;