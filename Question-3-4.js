// Write a function that uses destructuring to extract the first two elements from an array, 
// and returns them in an object with keys 'first' and 'second'.

const pickFirstAndSecond =(arr)=>{
    const[first, second] = arr;
    const obj = {first: first, second: second};
    return obj;

}
console.log(pickFirstAndSecond(["orange", "banana", "apple"]))