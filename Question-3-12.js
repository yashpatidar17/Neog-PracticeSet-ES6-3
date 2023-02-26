//Write an ES6 function to return the first element which is a multiple of 5 in the given array.
const printMultipleOfFive = arr =>{
    for(let i=0; i<arr.length; i++){
        if(arr[i]%5==0){
            return arr[i];
            break;
        }
    }
}
console.log(printMultipleOfFive([15,7, 4, 10, 7, 5, 3])) // 10
console.log(printMultipleOfFive([7, 5, 10, 7, 15, 3])) // 5