//Create a function that takes an array of strings as an argument and returns a string that
// includes the number of items in the array and the first and last items.

const formatArray = (arr) =>{
    return `The array has ${arr.length} items and the first item is "${arr[0]}" , and the last item is "${arr[arr.length-1]}"`;
}

const items = ['apple', 'banana','yash', 'orange','patidar'];
const message = formatArray(items);
console.log(message);