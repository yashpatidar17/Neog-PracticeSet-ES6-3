//Create a function which takes a product object
// and returns a sentence about the product using ES6 features.

const printProductDetails = (obj)=>{
    const {name,specification: {capacity}} = obj
    return `${name} which is of  Inch, has a capacity of ${specification.capacity}`
}

const product = {
    name: "Apple MacBook Air 2020",
      specification: {
          capacity: "256GB",
        size: "13.3 Inch"
      },
    price: 82900
  }
  console.log(printProductDetails(product)); // Apple MacBook Air 2020 which is of 13.3 Inch, has a capacity of 256GB.