//1, 1, 2, 3, 5, 8, etc.

const fibonacci = function(num) {
    const nums = [1,1];
    if(num == 0){
        return 0;
    } else if(num < 0){
        return 'OOPS'
    } else if(num > nums.length){
    for(let i = nums.length; i < num; i++){
        nums.push(nums[nums.length-1] + nums[nums.length-2]);
    }
}
return nums[num-1];
};




// Do not edit below this line
module.exports = fibonacci;

