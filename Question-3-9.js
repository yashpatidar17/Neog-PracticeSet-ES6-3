//Write an ES6 function to return the second element of the given array by adding “Hello” before it.

const sayHello = arr =>{
    if(arr.length>2){
        return `${arr[1]} Hello`
    }else{
        return "array has less than 2 elements"
    }
}

console.log(sayHello(["Akshay", "Sweta", "Prerana", "Vinay"]))
// Hello Sweta

console.log(sayHello(["Kanika", "Rakesh", "Prerana", "Puja"]))
// Hello Rakesh