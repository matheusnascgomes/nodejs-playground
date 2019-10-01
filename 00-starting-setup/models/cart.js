const fs = require("fs");
const path = require("path");

const cartStoragePath = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

const getCartFromFile = cb => {
  fs.readFile(cartStoragePath, (err, fileContent) => {
    if (err) {
      cb(null);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Cart {
  static addNewProduct(id, price, cb) {
    getCartFromFile(cart => {
      let cartNewValues = { products: [], totalValue: 0 };

      if (cart) cartNewValues = cart;

      const existingProductIndex = cartNewValues.products.findIndex(
        product => product.id === id
      );
      const existingProduct = cartNewValues.products[existingProductIndex];

      let updatedProduct;

      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cartNewValues.products = [...cartNewValues.products];
        cartNewValues.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id, qty: 1 };
        cartNewValues.products = [...cartNewValues.products, updatedProduct];
      }

      cartNewValues.totalValue = cartNewValues.totalValue + +price;

      fs.writeFile(cartStoragePath, JSON.stringify(cartNewValues), err => {
        cb();
      });
    });
  }
};
