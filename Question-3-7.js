// Write a function to return the last 5 characters as an array from the given array.

const printLastFive =(arr)=>{
    const arr1 = [];
    for(let i=arr.length-5;i<arr.length;i++){
            //arr1[i-arr.length+5] = arr[i];
        // for(let j =0;j<5;j++){
        //      arr1[j] = arr[i];
        // }
    }
    return arr1;
}

console.log(printLastFive([0, 1, 1, 2, 3, 5, 8]));