// Create a function that takes a product object as an argument and returns a string that includes the
//  product name, price, and a message based on whether it is in stock or not.



const formatProduct = ({ name, price, inStock }) => {

  if (inStock == true) {
    return `${name} costs INR ${price} and is in stock`
  } else {
    return `${name} costs INR ${price} and is out of stock`
  }
}
const product = {
  name: 'Socks',
  price: 249,
  inStock: true,
};

// const { name, price, inStock } = product;
const message = formatProduct(product);
console.log(message);