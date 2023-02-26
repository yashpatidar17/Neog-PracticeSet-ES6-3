//Write an ES6 function to return the second element of the given array by multiplying 20 to it.

const printSecondCharacter = arr => {
    if(arr.length>=2) { //how to check if array contains only number
        return arr[1]*20;
    }
}

console.log(printSecondCharacter([1, 2, 3, 5, 8]))