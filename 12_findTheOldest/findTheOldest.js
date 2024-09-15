// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },

const findTheOldest = function(arr) {
    for(let i = 0; i < arr.length; i++){
        if(!arr[i].yearOfDeath){
            arr[i].yearOfDeath = new Date().getFullYear();
        }
    }
    const sorted = arr.sort(function(a,b){
        const firstPerson = a.yearOfDeath - a.yearOfBirth;
        const secondPerson = b.yearOfDeath - b.yearOfBirth;
        return firstPerson > secondPerson ? -1 : 1; 
    })
    return sorted[0]

};
// Do not edit below this line
module.exports = findTheOldest;
