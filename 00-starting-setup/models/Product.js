const fs = require("fs");
const path = require("path");

const products = [];

const storePath = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }
  save() {
    fs.readFile(storePath, (err, fileContent) => {
      let newProducts = [];

      if (!err) newProducts = JSON.parse(fileContent);

      newProducts.push(this);
      fs.writeFile(storePath, JSON.stringify(newProducts), err => {
        console.log(err);
      });
    });

    products.push({ title: this.title });
  }

  static fetchAll(callBack) {
    fs.readFile(storePath, (err, fileContent) => {
      if (err) {
        callBack([]);
      }

      return callBack(JSON.parse(fileContent));
    });
  }
};
