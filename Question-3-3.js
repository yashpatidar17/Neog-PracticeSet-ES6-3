// Write a function findPerson that takes an array of person objects and a
//  name as parameters and returns the object with the matching name, or null if not found. 


const findPerson = (arr,str) =>{
    if(arr.find(({name}) => name === str)){
        return "found"
    }return "not found";
}

console.log(findPerson([{ name: 'Amay', age: 25 }, { name: 'Akhil', age: 25 }], "Amay"))