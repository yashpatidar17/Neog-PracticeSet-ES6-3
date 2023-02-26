//Write an ES6 function to return sum of all numbers at even indices of the given array.

const sumOfEvenIndices =arr=>{
    let cal=0;
    for(let i=0;i<arr.length;i++){
        if(i%2 === 0){
            cal = cal +arr[i];
        }
    }
    return cal;
}

console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])) // 6
console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])) // 30